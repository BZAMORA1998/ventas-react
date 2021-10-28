import { Fragment, useState } from "react";
import './Login.css';
import Text from "../../util/text/Text";
import { useHistory } from "react-router-dom";

const Login=()=>{ 

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const history = useHistory();

    const handleUsuarioChange = (text)=>{
        setUsuario(text);
     };

     const handleContrasenaChange = (text)=>{
        setContrasena(text);
     };

     function routerHome() {
        history.push("../home");
      };

    return (
        <Fragment>  
            <div className="container-fluid login-container d-flex flex-wrap justify-content-center align-content-center">
                <div className="card w-25 w-l">
                        <div className="mt-4 d-flex flex-column flex-wrap justify-content-center align-content-center">
                            <i className="fas fa-user-circle fa-7x d-flex justify-content-center"></i> 
                            <p>Iniciar Sesión</p>
                        </div>
                            
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <Text 
                                    icon="fas fa-user-lock" 
                                    label="Usuario"
                                    id="user"
                                    text={usuario}
                                    setText={handleUsuarioChange}
                                    />                      
                                </div>

                                <div className="form-group mt-5">
                                    <Text 
                                    icon="fas fa-key" 
                                    label="Contraseña"
                                    id="pass"
                                    typeInput="password"
                                    text={contrasena}
                                    setText={handleContrasenaChange}
                                    /> 
                                     <label type="button" className="button"><i className="eye fa fa-eye showPass" aria-hidden="true"></i></label>
             
                                </div>
                            </form>
                            <button onClick={routerHome}  id="btn-ok" type="button" class="btn btn-primary w-100" >Inicie Sesión</button>
                            <a className="mt-4 d-flex justify-content-end">Recuperar Contraseña</a>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default Login;