// object to store work hours 9am-5pm
var hour = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
// saves date to this variable
var date;
// empty obj to hold time text value
var hourObj ={};
// function to create date and display on top of page
var currentDate = function () {
    date = moment().format('MMMM Do YYYY');
    $("#currentDay").text(date);
};
currentDate();


// load task text 
var loadTasks = function () {
    hourObj = JSON.parse(localStorage.getItem("text"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!hourObj) {
      hourObj = {};
    }
  

};

// save task text 
var saveText = function () {
    localStorage.setItem("text", JSON.stringify(hourObj[time].val()));
  };

$.each(hour, function (i, time) {
    // create row for each hour block  
    var row = $("<div>").addClass("row time-block");
    // create time div and displays hour plus gives width of 1 column using bootstrap and pass in time to use it for the ojbject 
    var timeDiv = $("<div>").text(time).addClass("hour col-1");
    // create text input and displays hour plus gives wid of 10 column using bootstrap
    var taskText = $("<textarea>").attr("placeholder", "ADD YOUR TASK HERE").addClass(" description col-10");
    // is this right?
    taskText.val(hourObj[time]);
    // adds save button with width of 1 column using bootstrap
    var saveButton = $("<button>").addClass("saveBtn col-1").html("<p>&#128190</p>")
    // append time section input section and save button to the div(row)
    row.append(timeDiv, taskText, saveButton);
   // append the row to the container div 
    $(".container").append(row);
});

// make button listen for click event and run function to save text in local storage
$(".saveBtn").on("click", "button", function(event){
    var target = $(event.target);
    console.log(target);
    
})