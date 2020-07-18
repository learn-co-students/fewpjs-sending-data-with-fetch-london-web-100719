// import { brotliDecompressSync } from "zlib"

function submitData(userName, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: email
        })
    })
        .then(resp => resp.json())
        .then(function(obj) {
            document.body.innerHTML = obj["id"]
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        })
    }