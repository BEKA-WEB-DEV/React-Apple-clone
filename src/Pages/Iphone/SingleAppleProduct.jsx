import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./ProductPage.css";
import Four04 from "../Four04/Four04";
import React from "react";

const SingleAppleProduct = () => {
  const [products, setProducts] = useState([]);
  const { pID } = useParams(); // Retrieve product ID from URL parameters

  // Function to fetch data from the backend
  const fetchData = () => {
    fetch("http://localhost:1234/iphones") // Replace with actual URL
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products || []; // Use fallback empty array
        const singleProduct = productList.filter(
          (product) => product.product_id === pID
        );
        setProducts(singleProduct); // Set state to the filtered product
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  };

  useEffect(() => {
    fetchData();
  }, [pID]); // Only run when pID changes

  // Check if product exists; if not, render the Four04 component
  if (products.length === 0) {
    return <Four04 />;
  }

  // Render product details if products array is not empty
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          {products.map((product) => {
            const {
              product_id: id,
              product_name: title,
              product_img: img,
              product_brief_description: Brief,
              starting_price: StartPrice,
              price_range: PriceRange,
              product_description: details,
            } = product;

            return (
              <div key={id}>
                <div className="row justify-content-center text-center">
                  <div className="col-12 mt-5">
                    <div className="title-wrapper font-weight-bold">
                      {title}
                    </div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className="col-sm-12 col-md-6 my-auto">
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{details}</div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className="product-image">
                      <img src={img} alt={title} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SingleAppleProduct;








// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// import { Link } from 'react-router-dom';

// const SingleAppleProduct = () => {
//     const { pID } = useParams();
//     const [products, setProducts] = useState(null);

//    useEffect(() => {
//     // Fetch data from the backend
//     const fetchData = () => {
//       fetch("http://localhost:1234/iPhones") // Replace with actual URL
//         .then((res) => res.json())
//         .then((data) => {
//           const productList = data.products || []; // Use fallback empty array
//           const singleProduct = productList.filter(
//             (product) => product.product_id === pID
//           );
//           setProducts(singleProduct); // Set state to the filtered product
//         })
//         .catch(() => console.log("Error: unable to fetch!!"));
//     };

//     fetchData();
//   }, [pID]); // Only run when pID changes
    

//     if (!products) return <div>Loading...</div>;
    
//     let order = 1;
//     return (
//     <div>

//         {products?.map((product) => {
//             let id = product.product_url;
//             let title = product.product_name;
//             let img = product.product_img;
//             let Brief = product.product_brief_description;
//             let StartPrice = product.starting_price;
//             let PriceRange = product.price_range;
//             // let productPage = "get-product/" + product.product_id;
//             let order1 = 1;
//             let order2 = 2;
//             if (order !== 1) {
//               order1 = 2;
//               order2 = 1;
//               order--;
//             } else {
//               order++;
//             }
//             let productDiv = (
//               <div
//                 key={id}
//                 className="row justify-content-center text-center product-holder h-100"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-title">{title}</div>
//                   <div className="product-brief">{Brief}</div>
//                   <div className="starting-price">
//                     {`Starting at ${StartPrice}`}
//                   </div>
//                   <div className="monthly-price">{PriceRange}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={`/iphone/${product.product_id}`}>Learn more</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="product-image">
//                     <img src={img} alt="product" />
//                   </div>
//                 </div>
//               </div>
//             );
//             return productDiv;
//           })}
      
        
//           {/* {products.map((product) => {
//             const {
//               product_id: id,
//               product_name: title,
//               product_img: img,
//               product_brief_description: Brief,
//               starting_price: StartPrice,
//               price_range: PriceRange,
//               product_description: details,
//             } = product;

//             return ( */}
// {/*                 
//                 // <div key={id}>
//                 //     <div className="product-details">
//                 //         <h1>{product.title}</h1>
//                 //         <p>{product.details}</p>
//                 //         <p>Price: ${product.price}</p>
//                 //     </div>
//                 // </div>
//             );
//           })} */}
//         </div>
      
    
//   );
    
// };

// export default SingleAppleProduct;
