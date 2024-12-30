import React, { useState } from 'react'
import { medicalFile } from './types';

const MedicalFile = ({
  testsList,
  setTestsList,
  heading,
  Icon
}: {
  testsList: medicalFile[];
  setTestsList: any;
  heading?:string;
  Icon?:any
}) => {
  const [testName, setTestName] = useState<string>("");
  const [testFile, setTestFile] = useState<any>();
  const [testNote, setTestNote] = useState<string>("");

  const HandleAddTest = () => {
    const newTest: medicalFile = {
      name: testName,
      file: testFile,
      note: testNote,
    };
    setTestsList([...testsList, newTest]);
    setTestName("");
    setTestFile(null);
    setTestNote("");
  };

  const HandleRemoveTest = (name:string) =>{
    const newTestsList:medicalFile[] = testsList.filter(ele => ele.name !== name)
    setTestsList(newTestsList)
  }

  const HandleEditTest = (name:string) =>{
    const itemToUpdate:medicalFile = testsList.find(ele=> ele.name === name) as medicalFile
    if(itemToUpdate){
      setTestName(itemToUpdate.name)
      setTestFile(itemToUpdate.file)
      setTestNote(itemToUpdate.note as string)
      HandleRemoveTest(name)
    }
  }
  return (
    <section>
      <h4 className="heading">
        <img src={Icon} alt="" />
        {heading}
      </h4>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="testName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="testName"
              id="testName"
              className="form-control"
              placeholder="Please enter test Name"
              value={testName}
              onChange={(e) => setTestName(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="testFile" className="form-label">
              File
            </label>
            <input
              type="file"
              name="testFile"
              id="testFile"
              className="form-control"
              placeholder="No Chosen File"
              value={testFile}
              onChange={(e) => setTestFile(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="testNote" className="form-label">
              Note
            </label>
            <input
              type="text"
              name="testNote"
              id="testNote"
              className="form-control"
              placeholder="Please enter test Note"
              value={testNote}
              onChange={(e) => setTestNote(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary btn-submit"
        onClick={HandleAddTest}
      >
        add
      </button>
      {
        testsList.length > 0 && 
        <table className="data-table test-table">
        <thead>
          <tr>
            <td>Test Name</td>
            <td>File</td>
            <td>Note</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {testsList.map((ele,i) =>
            <tr key={i}>
            <td>{ele.name}</td>
            <td>{(ele.file as string).split('\\')[2]}</td>
            <td>{ele.note}</td>
            <td className='actions'>
              <button className="btn text-info"
              onClick={()=>HandleEditTest(ele.name)}>
                <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
              </button>
              <button className="btn text-danger"
              onClick={()=>HandleRemoveTest(ele.name)}>
                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
      }
    </section>
  );
};

export default MedicalFile