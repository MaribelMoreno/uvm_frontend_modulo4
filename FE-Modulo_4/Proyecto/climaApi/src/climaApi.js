const axios = require("axios");

const getClima = async (ciudad) => {
 const response = await axios
    .get(
      "http://api.weatherstack.com/current?access_key=8eb12441a8dcbf48a849105062549a63&query=" +
        ciudad
    )
    .then((resultClima) => {
     resultClima.data.current;
      
    }); 
    return response
};

module.exports = {
  getClima,
};
