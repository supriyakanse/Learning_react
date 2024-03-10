import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Create from "./Create";

function Gallery() {
  let [loaded, setload] = useState(true);
  let [prodData, setprodData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 1000);

    fetch("https://fakestoreapi.com/products?")
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setprodData(jsonData);
      });
  }, []);

  function deleteProd(id){
    let filteredProd=prodData.filter((prod)=>(prod.id!=id))
    setprodData(filteredProd)
  }
  return (
    <>

    {
    loaded ? <h2 id="head">loading...</h2> : 
      <div>
        <Create/>
        <h1>All PRODUCTS</h1>
     <div className="product-container">
        {  prodData &&
          prodData.map((prod) => (
            <div key={prod.id} className="product">
              <h2>{prod.title}</h2>
              <h4>{prod.price}</h4>
              <h5>{prod.category}</h5>
              <img src={prod.image} className="img-container" />
              <button className="prodDeleteBtn" onClick={()=>deleteProd(prod.id)}>delete</button>
            </div>
          )) }
      </div>
      </div>

      }
      
    </>
  );
}

export default Gallery;
