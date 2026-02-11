window.addEventListener("load", () => {
    clock();
    function clock() {

      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
  
      //add '0' to hour, minute & second when they are less 10
      let hour = hours % 12;
      if(hour === 0){
        hour =12;
      }
      const minute = minutes < 10 ? "0" + minutes : minutes;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? "AM" : "PM";
  
      
      //get current time
      const time = hourTime + ":" + minute + ampm;
  
      //combine current date and time
      const Time = time;
  
      //print current date and time to the DOM
      document.getElementById("time").innerHTML = Time;
      setTimeout(clock, 1000);
    }
  });

window.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu");
  const sideMenu = document.getElementById("side-menu");
  const colorButtons = document.querySelectorAll(".color-btn");
  const main = document.querySelector("main");

  if (!menuToggle || !sideMenu || !main) return;

  // Toggle menu
  menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
  });

  // Change gradient colors
  colorButtons.forEach(button => {
    button.addEventListener("click", () => {
      main.style.setProperty("--c1", button.dataset.c1);
      main.style.setProperty("--c2", button.dataset.c2);
      main.style.setProperty("--c3", button.dataset.c3);
      main.style.setProperty("--c4", button.dataset.c4);
    });
  });
});