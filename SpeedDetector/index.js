function checkSpeed() {
    const speed = document.getElementById("speed").value;
  
    if (speed < 70) {
      document.getElementById("result").innerHTML = "Ok";
    } else {
      const points = Math.floor((speed - 70) / 5);
      if (points >= 12) {
        document.getElementById("result").innerHTML = "License suspended";
      } else {
        document.getElementById("result").innerHTML = `Points: ${points}`;
      }
    }
  }
  
