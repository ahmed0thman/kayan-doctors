import React, { useEffect, useRef, useState } from "react";
import { getStroke } from "perfect-freehand";
import { getSvgPathFromStroke } from "./utils";
import eraserImg from "../../../../assets/images/icons/eraser.svg";

type point = [number, number, number];

type pathShape = {
  shape: string;
  color: string;
};

export default function FreeHandNote({
  setShowHandNoteEditor,
}: {
  setShowHandNoteEditor: any;
}) {
  const [noteName, setNoteName] = useState<string>("Note Title");
  const [showMenuSettings, setShowMenuSettings] = useState<boolean>(true);
  const [editNoteTitle, setEditNoteTitle] = useState<boolean>(false);
  const [size, setSize] = useState(12);
  const [thinning, setThinning] = useState(0);
  const [streamline, setStreamline] = useState(0.05);
  const [smoothing, setSmoothing] = useState(0.99);
  // const [easing, setEasing] = useState("linear");
  const [taperStart, setTaperStart] = useState(0);
  const [capStart, setCapStart] = useState(true);
  const [taperEnd, setTaperEnd] = useState(15);
  const [capEnd, setCapEnd] = useState(true);
  // const [fill, setFill] = useState(true);
  const [stroke, setStroke] = useState(0);
  const [selectedColor, setSelectedColor] = useState("rgb(0, 0, 0)");

  const [points, setPoints] = useState<point[]>([]);
  const [currentPathShape, setCurrentPathShape] = useState<any>();
  const [pathShapes, setPathShapes] = useState<pathShape[]>([]);
  const noteCanvasRef = useRef<SVGSVGElement | null>(null);

  const colorOptions = [
    "rgb(0, 0, 0)",
    "rgb(255, 193, 7)",
    "rgb(255, 87, 34)",
    "rgb(233, 30, 99)",
    "rgb(103, 58, 183)",
    "rgb(0, 188, 212)",
    "rgb(239, 239, 239)",
  ];

  const options = {
    size: size,
    thinning: thinning,
    smoothing: smoothing,
    streamline: streamline,
    stroke: stroke,
    easing: (t: number) => t,
    start: {
      taperStart: taperStart,
      easing: (t: number) => t,
      capStart: capStart,
    },
    end: {
      taper: taperEnd,
      easing: (t: number) => t,
      cap: capEnd,
    },
    color: selectedColor,
  };

  const resetOptions = () => {
    setSize(21);
    setThinning(0);
    setStreamline(0.05);
    setSmoothing(0.99);
    // setEasing("linear");
    setTaperStart(0);
    setCapStart(true);
    setTaperEnd(0);
    setCapEnd(true);
    // setFill(true);
    setStroke(0);
    setSelectedColor("rgb(0, 0, 0)");
  };

  function handlePointerDown(e: React.PointerEvent<SVGSVGElement>) {
    (e.target as SVGSVGElement).setPointerCapture(e.pointerId);
    const noteCanvas = noteCanvasRef.current;

    if (noteCanvas) {
      const { x, y } = noteCanvas?.getBoundingClientRect();
      setPoints([[e.pageX - x, e.clientY - y, e.pressure]]);
    }
  }

  function handlePointerMove(e: React.PointerEvent<SVGSVGElement>) {
    if (e.buttons !== 1) return;
    const noteCanvas = noteCanvasRef.current;

    if (noteCanvas) {
      const { x, y } = noteCanvas?.getBoundingClientRect();
      setPoints([...points, [e.pageX - x, e.clientY - y, e.pressure]]);
    }
  }

  function handlePointerUp() {
    const shape = getStroke(points, options);
    const pathData: pathShape = {
      shape: getSvgPathFromStroke(shape),
      color: selectedColor,
    };
    setPathShapes([...pathShapes, pathData]);
    setPoints([]);
    setCurrentPathShape(null);
  }

  function saveNoteSVG() {
    const svg = noteCanvasRef.current;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${noteName}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  useEffect(
    function () {
      if (points.length > 0) {
        const shape = getStroke(points, options);
        setCurrentPathShape(getSvgPathFromStroke(shape));
      }
    },
    [points]
  );

  return (
    <section className="freehand-editor">
      <div className="freehand-editor-header">
        <div className="d-flex align-items-center gap-3">
          <div>
            <button
              className="btn btn-menu"
              onClick={() => setShowMenuSettings((prev) => !prev)}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
          {editNoteTitle ? (
            <>
              <input
                type="text"
                className="form-control notename"
                value={noteName}
                onChange={(e) => setNoteName(e.currentTarget.value)}
              />
              <button
                className="btn p-0 d-flex align-items-center border-0"
                onClick={() => setEditNoteTitle(false)}
              >
                <i className="fa fa-check" aria-hidden="true"></i>
              </button>
            </>
          ) : (
            <>
              <h5 className="heading">{noteName}</h5>
              <button
                className="btn p-0 d-flex align-items-center border-0"
                onClick={() => setEditNoteTitle(true)}
              >
                <i
                  className="fa fa-pencil-square-o fs-4 text-muted"
                  aria-hidden="true"
                ></i>
              </button>
            </>
          )}
        </div>

        <div className="d-flex gap-3 align-items-center">
          <button className="btn btn-primary">Save</button>
          <span
            className="btn btn-close p-0"
            onClick={() => setShowHandNoteEditor(false)}
          ></span>
        </div>
      </div>

      <div className="freehand-editor-body">
        <div
          className={`freehand-editor-menu ${showMenuSettings ? "" : "hide"}`}
        >
          <div className="freehand-editor-settings">
            <label>Size</label>
            <input
              type="range"
              min={1}
              max={100}
              value={size}
              onChange={(e) => setSize(+e.target.value)}
            />
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(+e.target.value)}
            />

            <label>Thinning</label>
            <input
              type="range"
              min={-0.99}
              max={0.99}
              step={0.01}
              value={thinning}
              onChange={(e) => setThinning(+e.target.value)}
            />
            <input
              type="number"
              value={thinning}
              step={0.01}
              onChange={(e) => setThinning(+e.target.value)}
            />

            <label>Streamline</label>
            <input
              type="range"
              min={0.01}
              max={0.99}
              step={0.01}
              value={streamline}
              onChange={(e) => setStreamline(+e.target.value)}
            />
            <input
              type="number"
              value={streamline}
              step={0.01}
              onChange={(e) => setStreamline(+e.target.value)}
            />

            <label>Smoothing</label>
            <input
              type="range"
              min={0.01}
              max={0.99}
              step={0.01}
              value={smoothing}
              onChange={(e) => setSmoothing(+e.target.value)}
            />
            <input
              type="number"
              value={smoothing}
              step={0.01}
              onChange={(e) => setSmoothing(+e.target.value)}
            />
            {/* <label>Stroke</label>
            <input
              type="range"
              min={0}
              max={100}
              value={stroke}
              onChange={(e) => setStroke(+e.target.value)}
            />
            <input
              type="number"
              value={stroke}
              onChange={(e) => setStroke(+e.target.value)}
            /> */}

            {/* <label>Easing</label>
            <select
              className="form-select py-1"
              value={easing}
              onChange={(e) => setEasing(e.target.value)}
            >
              {[
                "linear",
                "easeInQuad",
                "easeOutQuad",
                "easeInOutQuad",
                "easeInCubic",
                "easeOutCubic",
                "easeInOutCubic",
                "easeInQuart",
                "easeOutQuart",
                "easeInOutQuart",
                "easeInQuint",
                "easeOutQuint",
                "easeInOutQuint",
                "easeInSine",
                "easeOutSine",
                "easeInOutSine",
                "easeInExpo",
                "easeOutExpo",
                "easeInOutExpo",
              ].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select> */}
          </div>
          <hr />
          {/* <div className="freehand-editor-settings">
            <label>Taper Start</label>
            <input
              type="range"
              min={0}
              max={100}
              value={taperStart}
              onChange={(e) => setTaperStart(+e.target.value)}
            />
            <input
              type="number"
              value={taperStart}
              onChange={(e) => setTaperStart(+e.target.value)}
            />

            <label>Cap Start</label>
            <input
              type="checkbox"
              checked={capStart}
              onChange={() => setCapStart(!capStart)}
            />
          </div> */}

          <div className="freehand-editor-settings">
            <label>Taper End</label>
            <input
              type="range"
              min={0}
              max={100}
              value={taperEnd}
              onChange={(e) => setTaperEnd(+e.target.value)}
            />
            <input
              type="number"
              value={taperEnd}
              onChange={(e) => setTaperEnd(+e.target.value)}
            />

            <label>Cap End</label>
            <input
              type="checkbox"
              checked={capEnd}
              onChange={() => setCapEnd(!capEnd)}
            />
          </div>
          <hr />

          <div className="freehand-editor-settings">
            <label>Color</label>
            <div className="colors-grid">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  className={`color-btn ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
            <button
              className="btn btn-eraser"
              onClick={() => setSelectedColor("rgba(255,255,255")}
            >
              <img src={eraserImg} alt="" />
            </button>
          </div>
          {/* <div className="freehand-editor-settings">
            <label>Fill</label>
            <input
              type="checkbox"
              checked={fill}
              onChange={() => setFill(!fill)}
            />
          </div> */}

          <hr />

          <div className="buttons">
            <button onClick={resetOptions}>Reset Options</button>
            <button onClick={() => setPathShapes([])}>Clear</button>
          </div>
          <hr />
          <div className="buttons">
            <button onClick={saveNoteSVG}>Save as SVG</button>
          </div>
        </div>
        <svg
          ref={noteCanvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {pathShapes.length > 0 &&
            pathShapes.map(({ shape, color }) => (
              <path d={shape} fill={color} />
            ))}
          {points && <path d={currentPathShape} fill={selectedColor} />}
        </svg>
      </div>
    </section>
  );
}
