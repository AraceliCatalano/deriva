import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { useUserAuth } from '../../context/UserAuthContext';

const HomeLogin = () => {
    const {user, logOut} = useUserAuth();
    const navigate = useNavigate();
    console.log(user);
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (err) { 
            console.log(err.message);
        };
    }
    return (
        <>
            <Container className="p-4 box"> 
            Perfil de usuario<br />
            {user && user.email}
            <hr/>
            <Button variant="dark" onClick={handleLogout}>Cerrar sesión</Button>
            </Container>
            
           
        </>
    );
};

export default HomeLogin;