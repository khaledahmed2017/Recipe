var httpReq = new XMLHttpRequest()
var searchitem = document.getElementById('searchitem')
var searchbtn = document.getElementById('search')
var arra = []
function getdata(q) {
    arra=[]
    httpReq.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${q}`)
    httpReq.send()
    httpReq.addEventListener('readystatechange', function () {
        if (httpReq.readyState == 4)
            arra = JSON.parse(httpReq.response).recipes
        console.log(arra)
        display()
    })
}
getdata('salad')
function display() {
    var box = ``
    for (var i = 0; i < arra.length; i++) {
        box += `<div class="col-md-3 my-3">
        <div class="item text-center">
            <img height='250' src="${arra[i].image_url}" class="w-100" alt="">
            <h2>${arra[i].publisher}</h2>
            <p>${arra[i].title}</p>
        </div>
    </div>`
    }
    document.getElementById('count').innerHTML = box
}
searchbtn.addEventListener('click', function () {
getdata(searchitem.value)
})

