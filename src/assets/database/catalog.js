import img1 from "../images/PuertoMadero.png";
import img2 from "../images/CCRecoleta.png";
import img3 from "../images/MHistoricoNac.png";

const Catalog = [
  {
    id: 1,
    name: "Mujeres de Puerto Madero",
    price: 1000,
    description:
      "Un recorrido por el barrio de Puerto Madero a través de la historia de las mujeres que dan nombre a sus calles.",
    image: img1,
    category: ["Historia"]
  },
  {
    id: 2,
    name: "La arquitectura de Clorindo Testa",
    price: 1500,
    description:
      "Un paseo por Recoleta conectado por las obras del arquitecto Clorindo Testa.",
    image: img2,
    category: ["Arquitectura"],
  },
  {
    id: 3,
    name: "Primera fundación de Buenos Aires",
    price: 1000,
    description:
      "Breve viaje incómodo y fascinante hacia las historias de la primera funcdación de Buenos Aires.",
    image: img3,
    category: ["Historia"]
  },
  {
    id: 4,
    name: "Segunda fundación de Buenos Aires",
    price: 1000,
    description:
      "Buenos Aires es una de las pocas ciudades en el mundo que fue fundada dos veces. Este paseo recorre las historias de la vez definitiva.",
    image: img3,
    category: ["Historia"]
  },
  {
    id: 5,
    name: "Desde el 152",
    price: 1000,
    description:
      "Colección de historias breves para escuchar en el colectivo 152.",
    image: img3,
    category: ["Historias en bondi", "Gratis"]
  },
  {
    id: 6,
    name: "Desde el 126",
    price: 0,
    description:
    "Colección de historias breves para escuchar en el colectivo 126.",
    image: img3,
    category: ["Historias en bondi", "Gratis"]
  },
  {
    id: 7,
    name: "Desde el 130",
    price: 0,
    description:
    "Colección de historias breves para escuchar en el colectivo 130.",
    image: img3,
    category: ["Historias en bondi", "Gratis"]
  },
  {
    id: 8,
    name: "Buenos Aires por Mario R. Alvarez",
    price: 1000,
    description:
      "Una exploración de la huella cultural e industrial de la ciudad a través de las obras de Alvarez.",
    image: img3,
    category: ["Arquitectura"]
  },
  {
    id: 9,
    name: "Mariette Lydis en Buenos Aires",
    price: 1000,
    description: 
      "Conoce la obra de Mariette Lydis en un paseo por sus obras.",
    image: img3,
    category: ["Arte"]
  },
  {
    id: 10,
    name: "Por el centro de la ciudad",
    price: 0,
    description:
      "Breve recorrido por los puntos más visitados del centro de Buenos Aires.",
    image: img3,
    category: ["Gratis"]
  },
];

export default Catalog;
