import arrOfEvents from './dataModule.js';
import { createEventCards, clickOnDiv } from './UIModule.js';

var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://cors-anywhere.herokuapp.com/api.meetup.com/2/concierge?country=rs&offset=0&city=Belgrade&photo-host=public&page=500&sig_id=262525333&sig=9afb2345691a7494413f14bb4e6f70921c06206e');
httpRequest.send();
httpRequest.addEventListener('load', function () {

        var parseObj = JSON.parse(httpRequest.responseText);
        
        createEventCards(arrOfEvents(parseObj.results));
        clickOnDiv();
    
});

