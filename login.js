function addUser() {
   J1 = document.getElementById("player1_name_input").value;
   J2 = document.getElementById("player2_name_input").value;
   
      localStorage.setItem("player1Name", J1);
      localStorage.setItem("player2Name", J2);

      window.location = "tela2.html";
  }
  