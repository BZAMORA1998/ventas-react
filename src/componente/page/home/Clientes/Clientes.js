import { Fragment } from "react";
import { Button,Form } from 'react-bootstrap';

const Clientes=()=>{ 

    return (
        <Fragment> 
            <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
                <div className="card w-50">
                    <div className="card-body">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
             </div>
        </Fragment>
    );
}

export default Clientes;