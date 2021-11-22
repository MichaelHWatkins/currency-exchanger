import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import ConverterService from './converter-service.js';

$(document).ready(function() {
    $("#currency-form").submit(function(event) {
      event.preventDefault();
      //let currency = $('#currency').val();
      //let amount = $('#amount').val();
      ConverterService.getCurrency()
      .then(function(response) {
        console.log(response)
      })
    })
});