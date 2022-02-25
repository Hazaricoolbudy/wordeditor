import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("upper case is clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","Sucess");
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
              style={{backgroundColor:props.mode==='dark'?'rgb(62 58 126)':'white',color:props.mode==='dark'?'white':'black'}}
            ></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-2 " onClick={handleUpClick}>
              Convert to Upper
            </button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 " onClick={handlelowClick}>
              Convert to Lower
            </button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 " onClick={handleClear}>
              Clear
            </button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleCopy}>
              Copy Text
            </button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 " onClick={handleRemoveSpaces}>
            Remove Spaces
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 " onClick={handleRemoveSpaces}>
            Remove Spaces
          </button>
          </div>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Your text Summary</h2>
          <p>
          
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} characters
          </p>
          <p> {Math.round(0.005*text.split(" ").length,2)} Minutes to Read</p>
          <h3>preview</h3>
          <p>{text.length>0?text:'Write Something to Preview'}</p>
        </div>
      </>
    </div>
  )
}



