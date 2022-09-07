import React from 'react';
import { Link } from "react-router-dom";
import { Button, Form, FormGroup } from 'react-bootstrap';
// import GoogleButton from 'react-google-button';

const SignUp = () => {
    return (
        <>
            <div className="p-4 box">
                <Form>
                    <FormGroup className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address"> </Form.Control>
                    </FormGroup>

                    <FormGroup className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"> </Form.Control>
                    </FormGroup>
                
                    <div className="d-grid gap-2">
                        <Button variant="dark" type="submit">
                            Iniciar sesión 
                        </Button>
                    </div>
                </Form>
            </div>

            <div className="p-4 box mt-3 text-center">
                ¿Ya tenés una cuenta? <Link to="/">Sign up</Link> Ingresá.
            </div>    
        </>
    )
}

export default SignUp;