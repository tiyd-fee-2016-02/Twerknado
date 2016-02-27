$(function() {
    'use strict';
    var storage = new Object();
    var editStorage = new Object();

    console.log(localStorage);

    var storageValues = JSON.parse(localStorage.getItem('storage'));
    var editStorageValues = JSON.parse(localStorage.getItem('editStorage'));

    // console.log(storageValues);

    // var test = storageValues.title;
    // console.log(test);

    $('.appointments-holder').append("<a href='indexEditAppointment.html'><div class='mockup-appointment-holder'><div class='left-col'><div class='appt-time'>" + storageValues.time + "</div><i class='fa fa-sun-o'></i></div><div class='right-col'><div class='appt-title'>" + "&nbsp;" + storageValues.title + "</div><span class='city-state'>" + "&nbsp;" + storageValues.city + "</span></div></div> </a>")




    $('.save-button').on("click", function() {
        storage.title = $('.input-title').val();
        storage.street = $('.input-address').val();
        storage.city = $('.input-city').val();
        storage.date = $('.input-date').val();
        storage.time = $('.input-time').val();

        // console.log(storage);
        localStorage.setItem('storage', JSON.stringify(storage));
    });



    $('.mockup-appointment-holder').on("click", function() {
      console.log($(this).find('.appt-title')[0].innerHTML);
      editStorage.title = ($(this).find('.appt-title')[0].innerHTML);
      editStorage.street = ($(this).find('.street')[0].innerHTML);
      editStorage.city = ($(this).find('.city-state')[0].innerHTML);
      editStorage.date = ($(this).find('.appt-date')[0].innerHTML);
      editStorage.time = ($(this).find('.appt-time')[0].innerHTML);

      console.log(editStorage);
      localStorage.setItem('editStorage', JSON.stringify(editStorage));

    });

    //
    //
    // for(var i=0; i<localStorage.length; i++){
    //   if (localStorage.length === 0){
    //     localStorage.setItem('storage', JSON.stringify(storage));
    //   }
    //   else {
    //    storage[i] = storage;
    //    localStorage.setItem('storage[i]', JSON.stringify(storage[i]));
    //    console.log(localStorage);
    //   }
    // }
    //


});
