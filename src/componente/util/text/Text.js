import { Fragment } from "react";
import './Text.css';
import $ from 'jquery';
import { useState } from 'react';

const Text=({typeInput,label,id,icon})=>{

    const [textInt, setTextInt] = useState('');
    
    const onFocusEvent=()=>{
        $(`#textoF-${id}`).css("margin-top",-20);
        $(`#textoI-${id}`).css("border-bottom","1px solid blue");
        $(`#textoF-${id}`).css("font-size","12px");
    }
    const onFocusOutEvent=()=>{
      if(textInt==null || textInt==""){
        $(`#textoF-${id}`).css("margin-top",0);
        $(`#textoI-${id}`).css("border-bottom","1px solid red");
        $(`#textoF-${id}`).css("font-size","13px");
       }
    }

    return (
        <Fragment>
            <div className="form-group m-0">
                <label className="position-absolute" htmlFor="texto" id={`textoF-${id}`} >
                    <i className={`${icon} mr-2`}></i>{label}
                </label>
                    <input 
                    autoComplete="nope" 
                    type={typeInput} 
                    className="form-control mt-3" 
                    id={`textoI-${id}`} 
                    value={textInt}
                    onInput={e => setTextInt(e.target.value)}
                    name="txt_texto" 
                    onFocus={onFocusEvent}
                    onBlur={onFocusOutEvent}
                    required></input>
            </div>
        </Fragment>
    );
}

export default Text;