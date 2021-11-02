import { Fragment, useState } from "react";
import './Login.css';
import Text from "../../util/text/Text";
import { useHistory } from "react-router-dom";
import AutenticacionService from "../../service/AutenticacionService";
import Sweetalert2 from "../../util/sweetalert2/Sweetalert2";
import Swal from 'sweetalert2';

const Login=()=>{ 

    //Variasbles a utilizar
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const history = useHistory();
    const autenticacionService = new AutenticacionService();
    let sweetalert2 =new Sweetalert2();


    /**
     * @description Auntentica el usuario
     * @author Bryan Zamora
     */
    function postLogin(){
        sweetalert2.loading(true);
        autenticacionService.postAutenticacion(usuario,contrasena)
        .then(Response => {
            if(Response['code']==200){
                sweetalert2.loading(false);
                history.push("../home");
            }else if(Response['code']==400){
                sweetalert2.loading(false);
                sweetalert2.showModalError(Response['message']);
            }else{
                console.log(Response['message']);
            }
        });
    }

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
                                    setText={setUsuario}
                                    />                      
                                </div>

                                <div className="form-group mt-5">
                                    <Text 
                                    icon="fas fa-key" 
                                    label="Contraseña"
                                    id="pass"
                                    typeInput="password"
                                    text={contrasena}
                                    setText={setContrasena}
                                    /> 
                                    <label type="button" className="button"><i className="eye fa fa-eye showPass" aria-hidden="true"></i></label>
             
                                </div>
                            </form>
                            <button onClick={postLogin}  id="btn-ok" type="button" className="btn btn-primary w-100" >Inicie Sesión</button>
                            <a className="mt-4 d-flex justify-content-end">Recuperar Contraseña</a>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default Login;