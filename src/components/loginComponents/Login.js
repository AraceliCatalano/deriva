import React from 'react';
import { Link } from "react-router-dom";
import { Button, Form, FormGroup } from 'react-bootstrap';
import GoogleButton from 'react-google-button';

const Login = () => {
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
                    <Button variant="dark" type="Submit">
                    Log In
                    </Button>
                </div>
                </Form>
                <hr />
                <div>
                <GoogleButton
                    className="g-btn"
                    type="dark"
                 
                />
                </div>
            </div>
            <div className="p-4 box mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>

            
    
        </>
    )
}

export default Login;