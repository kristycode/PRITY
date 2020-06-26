// import React from "react";
// import axios from "axios";

// class createLookApi extends React.Component {
//   state = {
//     products: [],
//     isLoading: true,
//   };

//   componentDidMount() {
//     this.getProducts();
//   }

//   getProducts() {
//     axios
//       .get(
//         "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick"
//       )
//       .then((response) =>
//         response.map((product) => ({
//           name: `${product.name}`,
//           colors: `${product.product_colors.colour_name}`,
//         }))
//       )
//       // Let's make sure to change the loading state to display the data
//       .then((products) => {
//         this.setState({
//           products,
//           isLoading: false,
//         });
//       })
//       // We can still use the `.catch()` method since axios is promise-based
//       .catch((error) => this.setState({ error, isLoading: false }));
//   }

//   render() {
//     const { products, isLoading } = this.state;

//     return (
//       <React.Fragment>
//         <h1>Product Results</h1>
//         <div>
//           {!isLoading ? (
//             products.map((product) => {
//               const { name, color } = product;
//               return (
//                 <div key={name}>
//                   <p>{name}</p>
//                   {/* <div> */}
//                   {/* <img src={image} alt={name} /> */}
//                   {/* </div> */}
//                   <p>{color}</p>
//                   <hr />
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default createLookApi;
