import "./Iphone.css";

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Iphone = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:1234/iphones')
//             .then(response => setProducts(response.data))
//             .catch(error => console.error('Error fetching products:', error));
//     }, []);

//     return (
//         <div className="iphone-list">
//             <h1>iPhone Products</h1>
//             <div className="product-grid">
//                 {products.map(product => (
//                     <div key={product.pid} className="product-card">
//                         <h2>{product.name}</h2>
//                         <p>{product.description}</p>
//                         <Link to={`/iphone/${product.pid}`}>Learn More</Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Iphone;


import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Iphone = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:1234/iphones")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
      });
  }, []);
  console.log(data);
  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wrapper font-weight-bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {data?.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            // let productPage = "get-product/" + product.product_id;
            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }
            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product.product_id}`}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={img} alt="product" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
};

export default Iphone;
