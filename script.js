$(document).ready(function() {

    // Display the current day at the top of the calendar
    var currentDayEl = $("#currentDay");
    var today = moment().format("dddd, MMMM, Do");
    currentDayEl.text(today);
    
});

// TODO: WHEN I scroll down, I am presented with timeblocks for standard business hours

// TODO: WHEN I view the timeblocks for that day, each timeblock is color coded to indicate whether it is in the past, present, or future

// TODO: WHEN I click into a timeblock, I can enter an event

// TODO: WHEN I click the save button for that timeblock, the text for that event is saved in local storage

// TODO: WHEN I refresh the page, the saved events persist