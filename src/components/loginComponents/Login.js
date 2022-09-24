import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Form, FormGroup, Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../../context/UserAuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/homeLogin");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/homeLogin");
        } catch (err) {
            setError(err.message);
        }
    };

    
    return (
        <>
            <Container className="p-4 box">
                <h2 className="mb-3"> Iniciar sesión </h2>
                <GoogleButton
                    className="g-btn"
                    type="dark"
                    onClick={handleGoogleSignIn}
                />
                <hr/>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" 
                        onChange={(e) => setEmail(e.target.value)}
                        /> 
                    </FormGroup>

                    <FormGroup className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                   /> 
                    </FormGroup>
                    <Button variant="dark" type="submit" value="Log In" > Iniciar sesión</Button>
               
                    <div className="p-2 text-center">
                      ¿Olvidaste tu contraseña? <Link to="/restablecerContrasena">Restablecer.</Link>
                    </div>
                    
                </Form>
                <hr/>
                <Container className="p-2 text-center">
                     ¿No tenés cuenta? <Link to="/signup">Registrate.</Link>
                </Container>
                
                
             
                
            </Container>
            

            
    
        </>
    )
}

export default Login;