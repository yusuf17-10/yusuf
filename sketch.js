var database,timetable,homepage;
var form,user;
var userCount=0;
var gameState=0;
var writeProgress;



var flag2=0;
var allUsers=[],flag=0;

function preload() {
   alertSound = loadSound("alarm.mp3");
}



function setup() {
  createCanvas(1500,750);
  database=firebase.database();

  game= new Game();

  game.start();
}

function draw() {
   clear();
   

   if(gameState===1){
      game.signup();
   }

   if(gameState===2){
      game.home();
      if(flag2===0){
         flag2=1;
         getTime();
      }
      
   }

   async function getTime(){

      var response =  await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
      var responseJSON=await response.json();
      var hour = responseJSON.datetime.slice(11,13);
      var day = responseJSON.day_of_week;
      console.log(hour);
  
      for(var i=0;i<10;i++){
         if(parseInt(hour)==user.time[i]){
            alert("study time for "+user.answer[(day+7*i)-1]);
            console.log((day+7*i)-1);
           alarmSound = playSound('alarm.mp3');
        }
      }

     


 


      }
}