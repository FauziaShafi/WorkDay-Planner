// var time = moment();
var box = $('.container');
var saveBtn = $(".saveBtn");
var timeDisplayEl = $('#currentDay');
 var currentTime = moment().format('HH');

var hrDiv = $('.time-block'); //
// var hrDiv = $('.hour');

compare();

displayTime();



function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    timeDisplayEl.text(rightNow);
  }


 function compare() {
  console.log("compare function is running");
  for (var i=0; i<hrDiv.length; i++) {

    var newValue = hrDiv[i].id.split('-');   
           
    var attdataValue =hrDiv[i].dataset.value;
   console.log("currentTime---" , currentTime)
   console.log(" attarvalue",attdataValue)
    // console.log("plannerTime---",plannerTime);

    if(currentTime == attdataValue) {
      $(hrDiv[i]).addClass("present");
      console.log(hrDiv[i]);
      console.log("present")
    } else if(currentTime > 12   && attdataValue < 11) {
             
      $(hrDiv[i]).addClass("past");


    } else {
      $(hrDiv[i]).addClass("future");

    }



     }

  



}


 saveBtn.on("click", function(event) {
     event.preventDefault();    
    var time = $(this).parent().attr("id"); 
    var text = $(this).siblings(".description").val();
    console.log(time);
    console.log(text);

    localStorage.setItem(time ,text);
  
   
    });
      
  
   



