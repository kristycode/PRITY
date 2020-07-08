const axios = require("axios");

module.exports = { getProducts : (req,res) => {
  
    const makeupURL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${req.params.brand}&product_type=${req.params.productType}`;
    // console.log("getproducts called");
    axios
      .get(makeupURL)
      .then((response) => {
        res.json(response.data)
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch((error) => {
          console.log(this.state);
          res.status(422).send(error);
      });
  }
}
