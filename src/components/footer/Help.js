import React from 'react';
import '../../assets/styles/App.css';
import { Container } from 'react-bootstrap';


function Help() {
  return (
    <>
      <Container className="mainPageContainer">
        <h2>Ayuda</h2>
        <p className="warning">Advertencia: La página se encuentra en desarrollo y algunas de las funcionalidades podrían no estar disponibles.</p>
        <p>Deriva es una aplicación de paseos autoguiados basada en audios activados por geolocalización.</p>
        <p>Para iniciar, buscá algún paseo desde la lista principal. Los más próximos a tu ubicación se mostrarán primero en la lista. Cuando encuentres alguno de tu interés, podés seleccionarlo y comenzar. Si el paseo tiene un costo, deberás pasar primero por el proceso de pago. Los audios se reproducirán por streaming utilizando tu conexión móvil.  Por eso, si preferís ahorrar datos, podés bajar el contenido antes de empezar. </p>
        <p>Una vez que hayas iniciado tu paseo, podrás ver tu ubicación marcada en el mapa. Al ingresar en una zona marcada, se activará el audio correspondiente a esa parada del itinerario. </p>
        <p>Podés activar los audios manualmente desactivando la opción de reproducción automática.</p>
        <p>Te recomendamos planear tu ruta antes de iniciar el paseo y guardar el teléfono mientras transitás el paseo para tener una experiencia optimizada y más segura. Recorrer la ciudad con la atención puesta en el teléfono conlleva algunos peligros.</p>
        <p>Si tenés algún problema, escribinos a ayuda@deriva.com.ar</p>
      </Container>
    </>
  );

}

export default Help;