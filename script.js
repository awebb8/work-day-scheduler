$(document).ready(function () {

  // Display the current day at the top of the calendar
  var currentDayEl = $("#currentDay");
  var today = moment().format("dddd, MMMM, Do");
  currentDayEl.text(today);

  //  Timeblocks for standard business hours
  // for loop where i is the hour.  This loop creates a new row and adds the time to each one.
  for (var i = 9; i <= 17; i++) {
    var hourIndex = i;

    var hour = 0;
    // Add AM or PM to each hour
    if (hourIndex < 12) {
      hour = hourIndex + "AM";
    } else if (hourIndex == 12) {
      hour = hourIndex + "PM";
    } else if (hourIndex > 12) {
      hour = hourIndex - 12 + "PM";
    }

    // Create timeblock rows
    var newRowDiv = $('<div class="row time-block">');
    // Create a div to display the time from 9am-5pm
    var timeDisplayDiv = $('<div class="col-sm-1 hour">');
    // When a timeblock is clicked, text can be entered by using <textarea>
    var textAreaColumn = $('<textarea class="col-sm-10">');
    // Create a Save button
    var buttonColumn = $('<button class="col-sm-1 btn saveBtn">');
    // Add class to display the lock image in the Save button
    var buttonLock = $('<i class="fas fa-lock">');

    // Display the hour for each timeblock
    timeDisplayDiv.text(hour);

    // get local storage (for the text in <textarea>)
    textAreaColumn.text(localStorage.getItem(JSON.stringify(i)));

    // Add a unique id to each button
    buttonColumn.attr("id", i);

    // Color code each timeblock to indicate whether it is in the past, present, or future
    // Set the current hour
    var currentHour = moment().hour();
   
    if (i < currentHour) {
        textAreaColumn.addClass("past");
    } 
    else if (i === currentHour) {
        textAreaColumn.addClass("present");
    } 
    else if (i > currentHour) {
        textAreaColumn.addClass("future");
    }

    // Append timeblock rows to the repeat rows div
    $("#repeat-rows").append(newRowDiv);
    newRowDiv.append(timeDisplayDiv);
    newRowDiv.append(textAreaColumn);
    buttonColumn.html(buttonLock);
    newRowDiv.append(buttonColumn);

  }

  // When the save button for a timeblock is clicked, the text for that event is saved in local storage
  // When the page is refreshed, the saved events persist
  $(".saveBtn").on("click", function () {
      console.log(this.id);
      console.log($(this).prev().val());

      // set local storage
      localStorage.setItem(this.id, $(this).prev().val());
    
   });
});