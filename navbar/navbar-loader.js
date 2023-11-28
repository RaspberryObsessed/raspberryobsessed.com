const nav = document.querySelector('.navbar')
fetch('/navbar/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML+=data
})
//some info about this script at ../README.md or just /navbar/README.md