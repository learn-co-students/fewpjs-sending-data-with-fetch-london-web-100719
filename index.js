// Add your code here

function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    };
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    let request = fetch('http://localhost:3000/users', configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let pId = document.createElement('p');
            pId.textContent = object.id;
            document.body.append(pId);
            // console.log(object);
        })
        .catch(function(error) {
            let pError = document.createElement('p');
            pError.textContent = error.message;
            document.body.append(pError);
            console.log(error.message);
        });
    
    return request;
}