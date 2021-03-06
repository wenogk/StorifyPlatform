import React, { useReducer, useState, useEffect } from 'react'
import Navbar2 from '../Navbar2'
import Footer from '../Footer'
import PathItemInput from './PathItemInput'
import TreeView from './TreeView'
import Preview from './Preview'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {useSelector, useDispatch} from 'react-redux';


export default function CreateStory() {

const dispatch = useDispatch();
const PATHS = useSelector((state) => {return(state)});

function getParentTitle(pathID) {
//console.log("get parent title function called")
  for (let idVal in PATHS) {
    for(let optionIndex in PATHS[idVal].options) {
      if(PATHS[idVal].options[optionIndex].pathID === pathID) {
        console.log("PARENT TITLE IS " + PATHS[idVal].title)
        return PATHS[idVal].title;
      }
    }
  }
}
var paths = []
for (let idVal in PATHS) {
  paths.push(<PathItemInput title={PATHS[idVal].title} pathID={idVal} textVal={PATHS[idVal].text} onChanged={dispatch} parentTitle={getParentTitle(idVal)}  hasVideoDefault={(PATHS[idVal].video=="") ? false : true} defaultVideoURL={PATHS[idVal].video} />);
}
  return (
  <React.Fragment>
  <Navbar2 />
  <div className="row" id="option">
  <div className="col s12">


  </div>

</div>
{/*start simple mode */}

<div id="storyMode" className="col s12">
  <div className="container">
  <div className="typewriter">
  <h1 className="header center hide-on-small-only" >create your story.</h1><br/>
  </div>
  {paths}
  <div className="center-align"><br />
  <a className=" btn-large"><i className="material-icons left">cloud</i>PUBLISH</a>

  </div>
    <br />  <br />
    </div>
  </div>

{/*end simple mode */}

<div id="previewMode" className="col s12">
<Preview />

</div>
<div id="treeVisMode" className="col s12" style={{overflow:"auto"}}>
<TreeView />
</div>

  <Footer />

  </React.Fragment>
  );
}
