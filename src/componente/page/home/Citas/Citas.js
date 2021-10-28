import { Fragment } from "react";

const Citas=()=>{ 

    function FancyBorder(props) {
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      );
    }

    return (
        <Fragment> 
            <FancyBorder color="blue">
              <h1 className="Dialog-title">
                Welcome
              </h1>
              <p className="Dialog-message">
                Thank you for visiting our Citas!
              </p>
            </FancyBorder>
        </Fragment>
    );
}

export default Citas;