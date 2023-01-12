import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import getDetail from '../../services/Products';

function ItemDetailContainer() {
  const [detail, setDetail] = useState({ title: "loading", price: "--,--" });

  useEffect(() => {
    getDetail(detail.id)
      .then((respuesta) => {
        setDetail(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <ItemDetail    
      title={detail.title}
      img={detail.img}
      category={detail.category}
      price={detail.price}
    />
  );
}

export default ItemDetailContainer;

