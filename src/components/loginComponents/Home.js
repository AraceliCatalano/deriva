import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div className="p-4 box mt-3 text-center"> Bienvenido</div>
            <div className="d-grid gap-2">
                <Button variant="dark">Cerrar sesión</Button>
            </div>
        </>
    )
}

export default Home;