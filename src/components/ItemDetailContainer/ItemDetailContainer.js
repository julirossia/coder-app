import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [details, setDetail] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const response = fetch("https://fakestoreapi.com/products?limit=5")
        .then((response) => response.json()
        .then((data) => {
          setDetail(data);
          
        }));
      }, 2000);
    }, []);
    console.log(details)
    return (
      <>
   {details.map((detail) => {
        return <ItemDetail key={detail.id} category={detail.category} image={detail.image} />;
      })} 
    </>
  );
};
export default ItemDetailContainer;
