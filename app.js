function add() {
    // Take value of users input
    var input = document.getElementById("input").value;
    
    // If input is not empty start app
    if (input != "") {
      // Create div
      var list = document.createElement("div");
      document.body.appendChild(list);
      // Make paragraf tag
      var para = document.createElement("p");
      // Add input like text of paragraf
      var node = document.createTextNode(input);
      // Add text(input) to paragraf
      para.appendChild(node);
      // Add paragraf to div
      list.appendChild(para);
    
      
      
      // Make button DONE
      var btn = document.createElement("button");
      // Add text to it
      var btnText = document.createTextNode("√");
      // Add text to button and button to div
      btn.appendChild(btnText);
      list.appendChild(btn);
      
          
      // Make button remove
      var btnR = document.createElement("button");
      // Add text
      var btnRtext = document.createTextNode("X");
      // Add text to button and button to div
      btnR.appendChild(btnRtext);
      list.appendChild(btnR);
      
      
      // Styles
      para.style.display = 'inline';
      // Set id for done button
      btn.id = "doneBtn";
      // Add function for done btn
      btn.addEventListener("click", function(){
          para.style.backgroundColor = "green";
      });
      // Set id for remove botton
      btnR.id = "removeBtn"; 
      // Add function to remove btn
      btnR.addEventListener("click", function(){
          list.remove();
      });
      
      // Clear users input
      function clear () {
          document.getElementById("input").value = "";
      }
      // Activate clear on button click
  document.getElementById("add").addEventListener("click", clear());
      
    }
  }
