// object to store work hours 9am-5pm
var hour = [
    { time: "9", text: "",val:9 },
    { time: "10", text: "" ,val:10 },
    { time: "11", text: "" ,val:11 },
    { time: "12", text: "" ,val:12 },
    { time: "13", text: "" ,val:13},
    { time: "14", text: "" ,val:14 },
    { time: "15", text: "" ,val:15},
    { time: "16", text: "" ,val:16},
    { time: "17", text: "" ,val:17},
];
// saves date to this variable
var date = moment().format('MMMM Do YYYY');
// displays time on page
$("#currentDay").text(date);
// set current time to check past/present/future
var currentT = moment().format('H');


// load text 

$(document).ready(function () {
    $("textarea").each(function () {
        var userText = $(this)
        for (var i = 0; i<window.localStorage.length; i++){
            var keyName = window.localStorage.key([i])
            var time = $(this).siblings("div").attr("id");

            // console.log(keyName)
            if (keyName == time ){
                userText.val(localStorage.getItem(keyName));
    
                // userText = localStorage.getItem(keyName)
                console.log(keyName)
            }

        }
 
        // console.log(time)
        // userText = localStorage.getItem(keyName)
       
    })
})


$.each(hour, function (index, item) {
    // create row for each hour block  
    var row = $("<div>").addClass("row time-block");
    // create time div and displays hour plus gives width of 1 column using bootstrap and pass in time to use it for the ojbject 
    var timeDiv = $("<div>").text(item.time).addClass("hour col-1").attr("id", item.time);
    // create text input and displays hour plus gives width of 10 column using bootstrap
    var taskText = $("<textarea>").attr("placeholder", "ADD YOUR TASK HERE").addClass(" description col-10");
    // adds save button with width of 1 column using bootstrap
    var saveButton = $("<button>").addClass("saveBtn col-1").html("<p>&#128190</p>")
    // append time section input section and save button to the div(row)
    row.append(timeDiv, taskText, saveButton);
    // append the row to the container div 
    $(".container").append(row);
    // checks if timeblock hour is greater,equal, or less than current time to assign background color
    if (item.val > currentT) {
        taskText.addClass("future");
    } else if (item.val == currentT) {
        taskText.addClass("present");
    } else {
        taskText.addClass("past");
    }


});

for (i = 0; i < hour.length; i++) {
    var rowValue = hour[i].time;
}

// make button listen for click event and run function to save text in local storage
$(".saveBtn").each(function (index, item) {

    $(this).on("click", function () {
        var userText = $(this).siblings("textarea").val();
        var time = $(this).siblings("div").attr("id");

        // save to local storage
        localStorage.setItem(time, JSON.stringify(userText));
    })


})