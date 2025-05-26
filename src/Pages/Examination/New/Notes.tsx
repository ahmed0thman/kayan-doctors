import React, { useRef, useState } from "react";
import FreeHandNote from "./FreeHandNote/FreeHandNote";
import { Editor } from "primereact/editor";
import { set } from "date-fns";
import { Note } from "./types";

const Notes = () => {
  const [showHandNoteEditor, setShowHandNoteEditor] = useState<boolean>(false);
  const [showTextEditor, setShowTextEditor] = useState<boolean>(false);
  const [textNote, setTextNote] = useState<string>("");
  const [handNote, setHandNote] = useState<string>("");
  const [noteList, setNoteList] = useState<Note[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleImageNoteClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      // Example: add the image as a note
      addNote({
        id: new Date().getTime().toString(),
        name: file.name,
        type: "file",
        note: file,
      });
    }
  }

  function addNote(note: Note) {
    setNoteList((prevNotes) => [...prevNotes, note]);
    setTextNote(""); // Clear the text note after adding
    setShowTextEditor(false); // Close the text editor modal after saving
    setShowHandNoteEditor(false); // Close the hand note editor modal after saving
  }
  function removeNote(noteId: string) {
    setNoteList((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  }
  return (
    <>
      <section className="notes">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="heading">Notes</h4>
          <div className="notes-action-types">
            <button
              className="btn"
              title="Hand Note"
              onClick={() => setShowHandNoteEditor(true)}
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button
              className="btn"
              title="Text Note"
              onClick={() => setShowTextEditor(true)}
            >
              <i className="fa fa-keyboard-o" aria-hidden="true"></i>
            </button>
            <button
              className="btn"
              title="Image Note"
              onClick={handleImageNoteClick}
            >
              <i className="fa fa-picture-o" aria-hidden="true"></i>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>

        {noteList.length > 0 && (
          <div className="custom-table">
            <table className="data-table test-table">
              <thead>
                <tr>
                  <td>Note Id</td>
                  <td>Type</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {noteList.map((ele, i) => (
                  <tr key={i}>
                    <td>{ele.id}</td>
                    <td>{ele.type}</td>
                    <td className="actions">
                      <button
                        className="btn text-info"
                        //   onClick={()=>HandleEditTest(ele.name)}
                      >
                        <i
                          className="fa fa-pencil fa-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button
                        className="btn text-danger"
                        //   onClick={()=>HandleRemoveTest(ele.name)}
                      >
                        <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <div className={`modal ${showTextEditor && "show"}`}>
        <section className="post-card">
          <Editor
            value={textNote}
            onTextChange={(e) => setTextNote(e.htmlValue as string)}
            style={{ height: "450px" }}
            dir="auto"
          />
          <div className="d-flex gap-2 align-items-center justify-content-end">
            <button
              className="btn btn-outline-primary btn-post"
              onClick={() => setShowTextEditor(false)}
            >
              cancel
            </button>
            <button
              className="btn btn-primary btn-post"
              onClick={() =>
                addNote({
                  id: new Date().getTime().toString(),
                  name: "",
                  type: "text",
                  note: textNote,
                })
              }
            >
              Save
            </button>
          </div>
        </section>
      </div>
      <div className={`modal ${showHandNoteEditor ? "show" : ""}`}>
        <FreeHandNote
          setShowHandNoteEditor={setShowHandNoteEditor}
          addNote={addNote}
        />
      </div>
    </>
  );
};

export default Notes;
