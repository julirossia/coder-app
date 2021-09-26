import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [details, setDetail] = useState([]);

  useEffect(() => {
    getDetail();
  }, []);
  console.log(details);

  const getDetail = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const { image, id } = await response.json();
    console.log(image);
    console.log(id);

    for (let detail of id) {
      const response = await fetch(detail.url);
      const data = await response.json();
      console.log(data);
      detail.push(data);
    }
    setDetail(detailArr);
  };
  return (
    <>
      <ul>
        {details.map((detail) => (
          <ItemDetail
            id={detail.id}
            key={detail.id}
            category={detail.category}
            image={detail.image}
          />
        ))}
      </ul>
    </>
  );
};
export default ItemDetailContainer;
