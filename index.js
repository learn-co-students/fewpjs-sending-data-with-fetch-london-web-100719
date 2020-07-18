

function submitData(name, email) {

    let formData = {

        name: name,
        email: email

    };

    let configObj = {

        method: "POST",
        headers: {

            "Content-Type": "application/json",
            "Accept": "application/json"

        },
        body: JSON.stringify(formData)

    };

    return fetch("http://localhost:3000/users", configObj)

        .then(res => res.json())
        .then(res => {

            let item = document.createElement('p');
            item.textContent = res.id;
            document.body.appendChild(item);

        })

        .catch(error => {

            let item = document.createElement('p');
            item.textContent = error.message;
            document.body.appendChild(item);

        })

}

//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });