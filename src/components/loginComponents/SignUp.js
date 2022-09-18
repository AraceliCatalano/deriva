import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Alert, Container } from 'react-bootstrap';
import '../../assets/styles/App.css'
import { useUserAuth } from '../../context/UserAuthContext';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/homeLogin");
        } catch (err) {
            setError(err.message);
        }
    };
    
    return (
        <>
            <Container className="p-4 box">
                <h2 className="mb-3">Registrarse</h2>
                {error && <Alert variant="danger">{ error }</Alert>}
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Dirección de email" 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button variant="dark" type="submit" value="Iniciar sesión">Iniciar sesión</Button>
                </Form>
                <hr/>
                <Container className="p-2 mt-3 text-center">
                    ¿Ya tenés una cuenta? <Link to="/">Iniciá sesión aquí.</Link>
                </Container>    
            </Container>

        </>
    )
}

export default SignUp;