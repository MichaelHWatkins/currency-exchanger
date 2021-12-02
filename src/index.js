import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import ConverterService from './converter-service.js';



$(document).ready(function() {
    $("#currency-form").submit(function(event) {
      event.preventDefault();
      let currency = $('#currency').val();
      let amount = $('#amount').val();
      ConverterService.getCurrency(currency)
      .then(function(response) {
        if(response.conversion_rate >= 0){
          $('#output').text(`Currency rounded to the nearest whole dollar amount: $${Math.round(amount * response.conversion_rate)}`)
        }
        else if(response.message != ''){
          $('.showErrors').text(`Error: ${response.message}`);
        }
        else{
          $('.showErrors').text(`Error: There is no currency with that abbreviation.`);
        }
      })
    })
});