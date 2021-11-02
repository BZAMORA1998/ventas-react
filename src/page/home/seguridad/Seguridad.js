import { Fragment } from "react";

const Seguridad=()=>{ 

    function FancyBorder(props) {
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      );
    }

    return (
        <Fragment> 
            <div className="App">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </div>
        </Fragment>
    );
}

export default Seguridad;