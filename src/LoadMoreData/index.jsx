import React, { useEffect, useState ,nano} from "react";
import "./style.css";
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      alert("Error while fetching the data");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisabledButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disabledButton}
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Load More
        </button>
        {disabledButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
