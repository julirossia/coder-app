import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const productosServer = [
  {
    id: 1,
    productName: "IdeaPad 5G, y la nueva funcionalidad modo visualización de Amazon Alexa",
    price: 150.000,
    categoria: "1",
    image:"https://www.infobae.com/new-resizer/lOUihoKvEZiFy3xCraRskhjT7WA=/768x512/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/GTFWR4ZED5HIRJYUND45LK6D2A.jpg",
    descripcion:"La IdeaPad 5G, de 14 pulgadas, ofrece conectividad 4G LTE, velocidades 5G (soporta frecuencias por debajo de 6 Ghz) y wifi. Su batería alcanza hasta las 20 horas de reproducción continua de vídeo.",
  },
  {
    id: 2,
    productName: "IdeaPad 5I Pro E IdeaPad 5 Pro",
    price: 170.000,
    categoria: "1",
    image:"https://www.infobae.com/new-resizer/-NMK2DRlJCH-1xSIRbbybkE9rfE=/768x512/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/K2BM5U3PZVHKVAJ4Q74XWRI5EY.jpg",
    descripcion: "El IdeaPad 5i Pro está disponible en 14 pulgadas (1,45kg) y 16 pulgadas (2kg), y ofrece funcionalidades inteligentes como una cámara de infrarrojos con Windows Hello para mejorar la protección mientras el usuario se conecta en modo manos libres.",
  },
  {
    id: 3,
    productName: "Smartphone Motorola Moto G60 128GB Gris",
    price: 30.0,
    categoria: "2",
    image:"https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00084002322058l.jpg",
    descripcion: "Pantalla 6.78, Batería 6,000 mah, Cámara trasera: 108 + 8 + 2 mp",
  },
  {
    id: 4,
    productName: "VIRGIN SAMSUNG GALAXY A12 64GB ROJO",
    price: 50.0,
    categoria: "2",
    image:"https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/b5555ec1-1c23-4123-b974-c55d98f82900.f3eefe20281af16889d36b509f489ed3.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    descripcion: "El Samsung Galaxy A12 llega con una pantalla HD+ de 6.5 pulgadas y potenciado por un procesador de ocho núcleos, 4GB RAM con 64GB de almacenamiento expandible mediante ranura microSD. La cámara posterior del Galaxy A12 es cuádruple, con lentes de 48MP, 5MP, 2MP y 2MP, mientras que la cámara frontal para selfies es de 8 megapíxeles. Completando las características del Samsung Galaxy A12 encontramos una batería de 5000 mAh de carga rápida, lector de huellas montado de lado, y Android 10 a bordo.",
  },
];

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const time = new Promise((resolver) => {
      setTimeout(() => {
        resolver(productosServer);
      }, 2000);
    });
    time.then((productos) => {
      const producto = productos.find((producto) => producto.id == id);
      setProducto(producto);
    });
  });
  return <ItemDetail key={id} producto={producto} />;
};
export default ItemDetailContainer;
