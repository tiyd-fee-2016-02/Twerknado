$(function() {
    'use strict';
    var storage = new Object();

$('.save-button').on("click", function() {
    storage.title = $('.input-title').val();
    storage.street = $('.input-address').val();
    storage.city = $('.input-city').val();
    storage.date = $('.input-date').val();
    storage.time = $('.input-time').val();

    // console.log(storage);
    localStorage.setItem('storage', JSON.stringify(storage));
});
//     function returnStorageValue() {
//     var returnStorage = JSON.parse(localStorage).getItem('storage');
//     console.log(returnStorage);
// }
});
