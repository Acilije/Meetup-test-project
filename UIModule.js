function createEventCards(arr) {
    var container = document.querySelector('.container');
    arr.forEach(function (el) {
        var div = document.createElement('div');
        div.dataset.name = el.name;
        div.dataset.picture = el.picture;
        div.dataset.description = el.description;
        div.dataset.city = el.city;
        div.dataset.street = el.street;
        div.dataset.longitude = el.longitude;
        div.dataset.latitude = el.latitude;
        var a = document.createElement('a');
        a.setAttribute('href', './info.html');
        var p = document.createElement('p');
        var pText = document.createTextNode(el.name);
        p.appendChild(pText);
        a.appendChild(p);
        var img = document.createElement('img');
        img.setAttribute('src', el.picture);
        if (el.picture == undefined){
            img.setAttribute('src', './meetup.jpg');
        }
        
        a.appendChild(img);
        div.appendChild(a);
        container.appendChild(div);
    })
}

function clickOnDiv() {
    var divCards = document.querySelectorAll('.container div');
    for (var i = 0; i < divCards.length; i++) {
        (function (i) {
            divCards[i].addEventListener('click', function () {
                localStorage.setItem('name', divCards[i].dataset.name);
                localStorage.setItem('picture', divCards[i].dataset.picture);
                localStorage.setItem('description', divCards[i].dataset.description);
                localStorage.setItem('city', divCards[i].dataset.city);
                localStorage.setItem('street', divCards[i].dataset.street);
                localStorage.setItem('longitude', divCards[i].dataset.longitude);
                localStorage.setItem('latitude', divCards[i].dataset.latitude);
            })
        })(i)
    }
}

export { createEventCards,
        clickOnDiv };
