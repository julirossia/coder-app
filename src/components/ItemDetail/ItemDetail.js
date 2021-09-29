const ItemDetail = ({ detail, category, description, image, producto }) => {
  return (
    <>
    <section className="card">
      <p>descripcion:{description}</p>
      <p>categoría:{category}</p>
      <img src={image}></img>
      </section>
    </>
  );
};

export default ItemDetail;
