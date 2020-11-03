// function to create date and display on top of page
var currentDate = function() {
    var date = moment().format('MMMM Do YYYY');
    $("#currentDay").text(date);
};
currentDate();

