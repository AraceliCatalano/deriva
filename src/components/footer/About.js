import React from "react";
import "../../assets/styles/App.css";
import { Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Container className="mainPageContainer">
        <h2 className="about-title">Sobre Deriva</h2>
        <p>
          Deriva es un sitio desde el cual explorar el espacio urbano en la
          Ciudad de Buenos Aires.
        </p>
        <p>
          Tomando en cuenta que el caminar facilita enfocar la atención en la escucha, usamos audios activados por geolocalización para guiarte por ciudad acompañándote con su historia y arquitectura.
        </p>
        <p>
          El caminar representa un modo de uso del espacio público que condiciona nuestra percepción de la ciudad. Recorrer los espacios urbanos a pie habilita a su vez un modo particular de tránsito por el pensamiento. Con base en esta idea, nos proponemos organizar expediciones urbanas que abran perspectivas y exploren lugares, historias, conceptos e ideas desde el espacio individual que se crea entre los auriculares pero proyectándose en un espacio colectivo.
        </p>
        <p>Creemos que este tipo de experiencias ayudan a romper barreras y aportan a construir una visión más amplia del espacio que habitamos, todo lo cual contribuye a la producción conjunta del ambiente urbano.</p>
        <p>Te invitamos a elegir uno de nuestros paseos y divertirte recorriendo la ciudad.. y ojalá, aprender algo nuevo. Todos nuestros paseos son el resultado de una investigación sobre el tema que tratan y están relatados por habitantes de la Ciudad de Buenos Aires. </p>
      </Container>
    </>
  );
}

export default About;
