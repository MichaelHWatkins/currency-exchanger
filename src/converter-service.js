export default class ConverterService {
  static getCurrency(unit){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${unit}`)
    .then(function(response) {
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error){
      return error;
    })
  }
}