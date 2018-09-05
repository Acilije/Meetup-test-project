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
        if (el.picture == undefined) {
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
                localStorage.setItem('description', JSON.stringify(divCards[i].dataset.description));
                localStorage.setItem('city', divCards[i].dataset.city);
                localStorage.setItem('street', divCards[i].dataset.street);
                localStorage.setItem('longitude', divCards[i].dataset.longitude);
                localStorage.setItem('latitude', divCards[i].dataset.latitude);
            })
        })(i)
    }
}

function createInfoEvent(name, picture, description, city, street, longitude, latitude) {
    var body = document.querySelector('body');
    var header = document.createElement('header');
    var headerText = document.createTextNode(name);
    header.appendChild(headerText);
    body.appendChild(header);
    var city1 = document.createElement('h5');
    var cityText = document.createTextNode(city)
    city1.appendChild(cityText)
    body.appendChild(city1);
    var street1 = document.createElement('h5');
    var streetText = document.createTextNode(street)
    street1.appendChild(streetText)
    body.appendChild(street1);
    var image = document.createElement('img');
    if (picture == 'undefined') {
        image.setAttribute('src', './meetup.jpg');
    } else {
        image.setAttribute('src', picture);
    }
    body.appendChild(image);

    var description1 = document.createElement('p');
    description1.innerHTML = description;
    body.appendChild(description1);

    var footer = document.createElement('footer');
    var footerText = document.createTextNode('Copyright &copy Aleksandar Miloradovic');
    footer.appendChild(footerText);
    body.appendChild(footer);

}

export {
    createEventCards,
    clickOnDiv,
    createInfoEvent
};
