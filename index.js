
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ 
        name: name,
        email: email
      })
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      alert(error.message);
      console.log(error.message);
      const errorMessage = document.createElement("div");
      errorMessage.innerHTML = error.message;
      document.body.appendChild(errorMessage);
    });
  }
  
  submitData("Steve", "steve@steve.com");
  