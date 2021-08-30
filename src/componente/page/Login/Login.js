import { Fragment } from "react";

const Login=()=>{
    return (
        <Fragment>
            <div className="container-fluid login-container d-flex flex-wrap justify-content-center align-content-center">
                <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Example label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Another label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"></input>
                        </div>
                </form>
            </div>   
        </Fragment>
    );
}

export default Login;