import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("upper case is clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","sucess");
  };
  const handlelowClick = () => {
    // console.log("upper case is clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    // console.log("upper case is clicked"+ text);
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    // console.log("upper case is clicked"+ text);
    let newText = document.getElementById('myBox');
    newText.select();
    navigator.clipboard.writeText(newText.value)
    
  };
  const handleRemoveSpaces= () => {
    // console.log("upper case is clicked"+ text);
    let newText = text.split(/[ ] +/);
    setText(newText.join(' '));
    
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  

  const [text, setText] = useState("");

  return (
    <div>
      <>
        <div className="mb-3">
          <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>

            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{backgroundColor:props.mode==='dark'?'#461a95':'white',color:props.mode==='dark'?'white':'black'}}
            ></textarea>
            <button className="btn btn-primary my-2 " onClick={handleUpClick}>
              Convert to Upper
            </button>
            <button className="btn btn-primary my-2 mx-2 " onClick={handlelowClick}>
              Convert to Lower
            </button>
            <button className="btn btn-primary my-2 mx-2 " onClick={handleClear}>
              Clear
            </button>
            <button className="btn btn-primary my-2 mx-2 " onClick={handleCopy}>
              Copy Text
            </button>
            <button className="btn btn-primary my-2 mx-2 " onClick={handleRemoveSpaces}>
            Remove Spaces
          </button>
          <button className="btn btn-primary my-2 mx-2 " onClick={handleRemoveSpaces}>
            Remove Spaces
          </button>
          </div>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Your text Summary</h2>
          <p>
          
            {text.split(" ").length-1} Words And {text.length} characters
          </p>
          <p> {Math.round(0.05*text.split(" ").length,2)} Minutes to Read</p>
          <h3>preview</h3>
          <p>{text.length>0?text:'Write Something to Preview'}</p>
        </div>
      </>
    </div>
  )
}



