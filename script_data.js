var xhr = new XMLHttpRequest();
var regOk = new RegExp(/^2\d{2}/); // 2xx
xhr.open("GET", "data.json"); // make request to get data from data.json
xhr.send(); // send request

//onload  handles the completed request. 4
xhr.onload = function () {
    // 2 is succeceded
  if (String(xhr.status).match(regOk)) {
    //JSON string into a JavaScript object to be able deal with it
    var data = JSON.parse(xhr.responseText);
    var selected = document.getElementById("select1");

   //create options dynamically
    data.forEach(person => {
      var option = document.createElement("option");
      option.value = person.name;
      option.textContent = person.name;
      // append the option to the dropdown
      selected.appendChild(option);
    });

    selected.addEventListener("change", function () {
      //check if name in dropdown === name fetched in data
      var person = data.find(p => p.name === this.value);
      if (person) {
        //to show data in html along side span with its id
        document.getElementById("name").textContent = person.name;
        document.getElementById("age").textContent = person.age;
        document.getElementById("email").textContent = person.email;
       
      }
    });
  } else {
    console.error("Error fetching data:", xhr.statusText);
  }
};



