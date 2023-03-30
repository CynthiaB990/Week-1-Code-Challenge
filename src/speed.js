// Calculating the speed
function checkSpeed() {
    const speed = document.getElementById("speed").value;
  
    if (speed < 70) {
      document.getElementById("results").innerHTML = "Ok";
    } else {
      const points = Math.floor((speed - 70) / 5);
      if (points >= 12) {
        document.getElementById("results").innerHTML = "License suspended";
      } else {
        document.getElementById("results").innerHTML = `Points: ${points}`;
      }
    };

    //Adding an event listener
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault()
    });
    console.log(form);
}
