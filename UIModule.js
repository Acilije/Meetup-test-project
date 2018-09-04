function createEventCards(arr) {
    var container = document.querySelector('.container');
    arr.forEach(function (el) {
        var div = document.createElement('div');
        div.dataset.store = `${el}`;
        var a = document.createElement('a');
        a.setAttribute('href', './info.html');
        var p = document.createElement('p');
        var pText = document.createTextNode(el.name);
        p.appendChild(pText);
        a.appendChild(p);
        var img = document.createElement('img');
        img.setAttribute('src', el.picture);
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
                localStorage.setItem('eventObj', divCards[i].dataset.store);
            })
        })(i)
    }
}

export { createEventCards,
        clickOnDiv };
