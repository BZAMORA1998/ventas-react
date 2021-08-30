import { Fragment } from "react";
import './Text.css';

const Text=({typeInput,label,id,icon})=>{
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
                    id={id} 
                    name="txt_texto" 
                    autoFocus required></input>
            </div>
        </Fragment>
    );
}

export default Text;