const url = "http://localhost:3000/users"

let formData = {}

function submitData(username, email) {
  formData.name = username
  formData.email = email

  const configObj = {
    method: "POST",
    headers: {
      'content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  return fetch(url, configObj)
  .then(resp => resp.json())
  .then(obj => document.body.innerHTML = obj[ "id" ])
  .catch(error => {
    alert(`${error.message}`)
    document.body.innerHTML = error.message
    })
}

// .then(function(response) {
//   return response.json();
// })
// .then(function(object) {
//   console.log(object);
// })
// .catch(function(error) {
//   alert("Bad things! Ragnarők!");
//   console.log(error.message);
// });


submitData("Alex", "a@alex.com")