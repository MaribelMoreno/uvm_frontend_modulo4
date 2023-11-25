const axios = require("axios");

const getCiudad = async (pais) => {
  const response = await axios
    .get("https://restcountries.com/v3.1/name/" + pais)
    .then( result => 
    {
      // console.log(result.data[0].capital[0])
      result.data[0].capital[0];
    }
    )

    return response
}; 

module.exports = {
  getCiudad
};
