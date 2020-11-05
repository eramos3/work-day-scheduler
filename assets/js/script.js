// object to store work hours 9am-5pm
var hour = [
    { time: "9", text: "" },
    { time: "10", text: "" },
    { time: "11", text: "" },
    { time: "12", text: "" },
    { time: "13", text: "" },
    { time: "14", text: "" },
    { time: "15", text: "" },
    { time: "16", text: "" },
    { time: "17", text: "" },
];
// saves date to this variable
var date = moment().format('MMMM Do YYYY');
// displays time on page
$("#currentDay").text(date);
// set current time to check past/present/future
var currentT = moment().format('H');
console.log(currentT)


// load task text 
var loadTasks = function () {
    hour.text = JSON.parse(localStorage.getItem("text"));

    // if nothing in localStorage, create a new object to track all task status arrays
        if (!hour.text) {
            hour.text = "";
        }
    // // loop over object properties
    // $.each(hourObj, function (time) {
    //   // then loop over sub-array
    //   arr.forEach(function (task) {
    //     createTask(task.text, task.date, list);
    //   });
    // });
};

// save task text 
var saveText = function () {
};

$.each(hour, function (index, item) {
    // create row for each hour block  
    var row = $("<div>").addClass("row time-block");
    // create time div and displays hour plus gives width of 1 column using bootstrap and pass in time to use it for the ojbject 
    var timeDiv = $("<div>").text(moment(item.time, "h:a")).addClass("hour col-1");
    // create text input and displays hour plus gives width of 10 column using bootstrap
    var taskText = $("<textarea>").attr("placeholder", "ADD YOUR TASK HERE").addClass(" description col-10");
    // adds save button with width of 1 column using bootstrap
    var saveButton = $("<button>").addClass("saveBtn col-1").html("<p>&#128190</p>")
    // append time section input section and save button to the div(row)
    row.append(timeDiv, taskText, saveButton);
    // append the row to the container div 
    $(".container").append(row);

    if (item.time > currentT){
        taskText.addClass("past");
    } else if (item.time == currentT) {
        taskText.addClass("present");
    } else {
        taskText.addClass("future");
    }

});

// make button listen for click event and run function to save text in local storage
$(".saveBtn").on("click", function (event) {
    $.each(hour, function(index,item){
        if (item.time == $(this).siblings("div").val())
        console.log("it worked")
    })
    // finds index of object array
    // var index = $(this).siblings("div").index();
    // console.log(index);
    // saves value of user input to empty text property 
    hour.text = $(this).siblings("textarea").val();
    console.log(hour.text)

    // save to local storage
    localStorage.setItem("text", JSON.stringify(hour.text));
})