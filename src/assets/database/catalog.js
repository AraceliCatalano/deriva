import img1 from "../images/PuertoMadero.png";
import img2 from "../images/CCRecoleta.png";
import img3 from "../images/MHistoricoNac.png";
import PM1 from "../images/PM1.JPG";
import PM2 from "../images/PM2.JPG";
import PM3 from "../images/PM3.JPG";

const Catalog = [
  {
    id: 1,
    name: "Mujeres de Puerto Madero",
    price: 1000,
    description:
      "Un recorrido por el barrio de Puerto Madero a través de la historia de las mujeres que dan nombre a sus calles.",
    mainImage: img1,
    categoryId: "C1",
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Las calles del barrio Puerto Madero tienen desde 1995 nombres de mujeres argentinas. Por medio de la Ordenanza Nº 49.668, la Ciudad de Buenos Aires ese año dertermió nombrar las calles de Puerto Madero con nombres de destacadas personalidades femeninas de diversas disciplinas. Este paseo recorre sus historias."   

  },
  {
    id: 2,
    name: "La arquitectura de Clorindo Testa",
    price: 1500,
    description:
      "Un paseo por Recoleta conectado por las obras del arquitecto Clorindo Testa.",
    mainImage: img2,
    categoryId: "C4",
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Sed ac consectetur purus, sed feugiat augue. Etiam in dui commodo, consectetur mi vitae, malesuada orci. Maecenas dictum risus sit amet porttitor congue. Vivamus diam metus, maximus id ipsum vel, pretium semper risus. Duis viverra ac libero ac interdum. Nulla placerat elementum tortor, vel tincidunt ante pellentesque sit amet. Pellentesque nunc est, mattis sit amet metus id, dignissim venenatis felis. " 
  },
  {
    id: 3,
    name: "Primera fundación de Buenos Aires",
    price: 1000,
    description:
      "Breve viaje incómodo y fascinante hacia las historias de la primera funcdación de Buenos Aires.",
    mainImage: img3,
    categoryId: "C1",
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Sed ac consectetur purus, sed feugiat augue. Etiam in dui commodo, consectetur mi vitae, malesuada orci. Maecenas dictum risus sit amet porttitor congue. Vivamus diam metus, maximus id ipsum vel, pretium semper risus. Duis viverra ac libero ac interdum. Nulla placerat elementum tortor, vel tincidunt ante pellentesque sit amet. Pellentesque nunc est, mattis sit amet metus id, dignissim venenatis felis. " 
  },
  {
    id: 4,
    name: "Segunda fundación de Buenos Aires",
    price: 1000,
    description:
      "Buenos Aires es una de las pocas ciudades en el mundo que fue fundada dos veces. Este paseo recorre las historias de la vez definitiva.",
    mainImage: img3,
    categoryId: "C1",
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Sed ac consectetur purus, sed feugiat augue. Etiam in dui commodo, consectetur mi vitae, malesuada orci. Maecenas dictum risus sit amet porttitor congue. Vivamus diam metus, maximus id ipsum vel, pretium semper risus. Duis viverra ac libero ac interdum. Nulla placerat elementum tortor, vel tincidunt ante pellentesque sit amet. Pellentesque nunc est, mattis sit amet metus id, dignissim venenatis felis. "   

  },
  {
    id: 5,
    name: "Desde el 152",
    price: 1000,
    description:
      "Colección de historias breves para escuchar en el colectivo 152.",
    mainImage: img3,
    categoryId: "C2", 
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Sed ac consectetur purus, sed feugiat augue. Etiam in dui commodo, consectetur mi vitae, malesuada orci. Maecenas dictum risus sit amet porttitor congue. Vivamus diam metus, maximus id ipsum vel, pretium semper risus. Duis viverra ac libero ac interdum. Nulla placerat elementum tortor, vel tincidunt ante pellentesque sit amet. Pellentesque nunc est, mattis sit amet metus id, dignissim venenatis felis. " 
  },
  {
    id: 6,
    name: "Desde el 126",
    price: 0,
    description:
    "Colección de historias breves para escuchar en el colectivo 126.",
    mainImage: img3,
    categoryId: "C2",
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Sed ac consectetur purus, sed feugiat augue. Etiam in dui commodo, consectetur mi vitae, malesuada orci. Maecenas dictum risus sit amet porttitor congue. Vivamus diam metus, maximus id ipsum vel, pretium semper risus. Duis viverra ac libero ac interdum. Nulla placerat elementum tortor, vel tincidunt ante pellentesque sit amet. Pellentesque nunc est, mattis sit amet metus id, dignissim venenatis felis. " 
  },
  {
    id: 7,
    name: "Desde el 130",
    price: 0,
    description:
    "Colección de historias breves para escuchar en el colectivo 130.",
    mainImage: img3,
    categoryId: "C2",
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Sed ac consectetur purus, sed feugiat augue. Etiam in dui commodo, consectetur mi vitae, malesuada orci. Maecenas dictum risus sit amet porttitor congue. Vivamus diam metus, maximus id ipsum vel, pretium semper risus. Duis viverra ac libero ac interdum. Nulla placerat elementum tortor, vel tincidunt ante pellentesque sit amet. Pellentesque nunc est, mattis sit amet metus id, dignissim venenatis felis. " 
  },
  {
    id: 8,
    name: "Buenos Aires por Mario R. Alvarez",
    price: 1000,
    description:
      "Una exploración de la huella cultural e industrial de la ciudad a través de las obras de Alvarez.",
    mainImage: img3,
    categoryId: "C4",
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Sed ac consectetur purus, sed feugiat augue. Etiam in dui commodo, consectetur mi vitae, malesuada orci. Maecenas dictum risus sit amet porttitor congue. Vivamus diam metus, maximus id ipsum vel, pretium semper risus. Duis viverra ac libero ac interdum. Nulla placerat elementum tortor, vel tincidunt ante pellentesque sit amet. Pellentesque nunc est, mattis sit amet metus id, dignissim venenatis felis. " 
  },
  {
    id: 9,
    name: "Mariette Lydis en Buenos Aires",
    price: 1000,
    description: 
      "Conoce la obra de Mariette Lydis en un paseo por sus obras.",
    mainImage: img3,
    categoryId: "C3",
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Sed ac consectetur purus, sed feugiat augue. Etiam in dui commodo, consectetur mi vitae, malesuada orci. Maecenas dictum risus sit amet porttitor congue. Vivamus diam metus, maximus id ipsum vel, pretium semper risus. Duis viverra ac libero ac interdum. Nulla placerat elementum tortor, vel tincidunt ante pellentesque sit amet. Pellentesque nunc est, mattis sit amet metus id, dignissim venenatis felis. " 
  },
  {
    id: 10,
    name: "Por el centro de la ciudad",
    price: 0,
    description:
      "Breve recorrido por los puntos más visitados del centro de Buenos Aires.",
    mainImage: img3,
    categoryId: "C4",
    detailImages: [PM1, PM2, PM3],
    duration: "40 minutos",
    context: "Sed ac consectetur purus, sed feugiat augue. Etiam in dui commodo, consectetur mi vitae, malesuada orci. Maecenas dictum risus sit amet porttitor congue. Vivamus diam metus, maximus id ipsum vel, pretium semper risus. Duis viverra ac libero ac interdum. Nulla placerat elementum tortor, vel tincidunt ante pellentesque sit amet. Pellentesque nunc est, mattis sit amet metus id, dignissim venenatis felis. " 
  },
];

export default Catalog;
