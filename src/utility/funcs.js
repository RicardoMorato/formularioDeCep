import axios from 'axios';

/**
 * @param {string} zipCode A string representing the zipcode, for example 51025160
 */
const axiosGet = async (zipCode) => {
  const mainUrl = `https://viacep.com.br/ws/${zipCode}/json/`;
  const res = await axios.get(mainUrl);
  return res;
};

export default axiosGet;
