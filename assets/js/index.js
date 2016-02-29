$(function() {
    'use strict';
    var storage = new Object();
    var editStorage = new Object();

    console.log(localStorage);

    var storageValues = JSON.parse(localStorage.getItem('storage'));
    var editStorageValues = JSON.parse(localStorage.getItem('editStorage'));


    $('.save-button').on("click", function() {
        storage.title = $('.input-title').val();
        storage.street = $('.input-address').val();
        storage.city = $('.input-city').val();
        storage.date = $('.input-date').val();
        storage.time = $('.input-time').val();

        localStorage.setItem('storage', JSON.stringify(storage));
    });

    $('.appt-details').append("<div class='details-time'>Today at <span class ='appt-stats-time'>" + editStorageValues.time + "</span></div><div class='details-location'>" + editStorageValues.city + "</div> <span> <i class='fa spec fa-location fa-map-marker fa-3x'></i></span><img class='maps-image' src='assets/images/mapsss.png'>")



    $('.appointments-holder').append("<a href='indexAppointmentStats.html'><div class='mockup-appointment-holder'><div class='left-col'><div class='appt-time'>" + storageValues.time + "</div><i class='fa fa-sun-o'></i></div><div class='right-col'><div class='appt-title'>" + "&nbsp;" + storageValues.title + "</div><span class='city-state'>" + "&nbsp;" + storageValues.city + "</span></div><div class = 'invisStreet'>" + storageValues.street + "</div><div class = 'invisDate'>" + storageValues.date + "</div></div> </a>")

    $('.delete-button').on('click', function() {
      $('.modal-container').addClass('showing');
    });

    $('.save-edit-button').on('click', function() {
      storage.title = $('.edit-input-title').val();
      storage.street = $('.edit-input-address').val();
      storage.city = $('.edit-input-city').val();
      storage.date = $('.edit-input-date').val();
      storage.time = $('.edit-input-time').val();

      localStorage.setItem('storage', JSON.stringify(storage));
    });


    $('.modal-yes').on('click', function() {
      localStorage.clear();
    });

    $('.modal-no').on('click', function() {
      return
    });



    $('.mockup-appointment-holder').on("click", function() {
      editStorage.title = ($(this).find('.appt-title')[0].innerText);
      editStorage.street = ($(this).find('.invisStreet')[0].innerText);
      editStorage.city = ($(this).find('.city-state')[0].innerText);
      editStorage.date = ($(this).find('.invisDate')[0].innerText);
      editStorage.time = ($(this).find('.appt-time')[0].innerText);
      localStorage.setItem('editStorage', JSON.stringify(editStorage));
    });



    $('.edit-input-title')[0].placeholder = editStorageValues.title;
    $('.edit-input-address')[0].placeholder = editStorageValues.street;
    $('.edit-input-city')[0].placeholder = editStorageValues.city;
    $('.edit-input-date')[0].placeholder = editStorageValues.date;
    $('.edit-input-time')[0].placeholder = editStorageValues.time;


});
