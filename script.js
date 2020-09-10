$(document).ready(function() {

    // Display the current day at the top of the calendar
    var currentDayEl = $("#currentDay");
    var today = moment().format("dddd, MMMM, Do");
    currentDayEl.text(today);
    
});

//  Timeblocks for standard business hours
// for loop where i is the hour.  This loop creates a new row and adds the time to each one.
for (var i = 9; i <=17; i++) {
    let hourIndex = i;
    console.log(hourIndex);

    var hour = 0;

    if (hourIndex < 12) {
        hour = hourIndex + "am"
        console.log(hour);
    }
    else if (hourIndex == 12) {
        hour = hourIndex + "pm"
        console.log(hour);
    }
    else if (hourIndex > 12) {
        hour = (hourIndex - 12) + "pm";
        console.log(hour);
    }

    let timeDisplay = $("#time-display");
    timeDisplay.text(hour);

    $("#time-text-save").clone().removeClass("hide").appendTo("#repeat-rows");

    console.log("repeat row");
}

// TODO: WHEN I view the timeblocks for that day, each timeblock is color coded to indicate whether it is in the past, present, or future
// let currentHour = moment().format('H');
// console.log(currentHour);

// TODO: WHEN I click into a timeblock, I can enter an event

// TODO: WHEN I click the save button for that timeblock, the text for that event is saved in local storage

// TODO: WHEN I refresh the page, the saved events persist