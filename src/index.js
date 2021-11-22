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
      ConverterService.getCurrency()
      .then(function(response) {
        let rates = response.conversion_rates;
        let rateEntries = Object.entries(rates);
        rateEntries.forEach(function(entry){
          if(entry[0] === currency){
            $('#output').text(`Currency rounded to the nearest whole dollar amount: $${Math.round(amount/entry[1])}`)
          }
          else{
            $("#output").text("I'm sorry, there isn't a currency with the abbreviation you specified.")
          }
        })
      })
    })
});