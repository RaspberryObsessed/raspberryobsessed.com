const nav = document.querySelector('.navbar')
fetch('/navbar/navbar.txt')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML+=data
})