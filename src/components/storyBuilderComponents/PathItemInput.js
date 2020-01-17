import React, { useState } from 'react'

function PathItemInput() {
  let pathID = "#2";
  const [options, setOptions] = useState([])

  function handleAddOption() {
    let val = options.length + 1
    setOptions(oldArray => [...oldArray, val]);
    //alert(JSON.stringify(options))
  }

  return (
    <div className="row">
     <div className="col s12 m12">
       <div className="card white" style={{height:"auto"}}>
         <div className="card-content">
         <span className="new badge blue" data-badge-caption="#1"></span>
         <span className="card-title">Story root </span>
           <p>I am a very simple card. I am good at containing small bits of information.
           I am convenient because I require little markup to use effectively.</p>
           <div className="input-field col s12">
             <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
             <label for="textarea2">Start Path</label>
           </div>
           <br/>
         </div>
        <div className="center-align" style={{padding:"10px"}}>
         <ul className="list-inline">
       <li><a onClick={handleAddOption} className="waves-effect waves-light btn-small red"><i className="material-icons right">queue</i>Add option</a></li>
    <li><a className="waves-effect waves-light btn-small green"><i className="material-icons right">video_call</i>Add video</a></li>
    <li><a className="waves-effect waves-light btn-small orange"><i className="material-icons right">collections</i>Add picture</a></li>
       </ul>
      </div>
      <ul className="collection with-header">
        <li className="collection-header"><span className="card-title">Options </span></li>
        {options.map((value, index) => {
        return (<li key={index} className="collection-item"><div>Option {value} </div></li>);
      })}

        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">delete_forever</i></a></div></li>
      </ul>
       </div>
     </div>
    </div>
  );
}

export default PathItemInput;
