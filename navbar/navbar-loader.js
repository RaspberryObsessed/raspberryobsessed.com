const nav = document.querySelector('.navbar')
fetch('/navbar/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})