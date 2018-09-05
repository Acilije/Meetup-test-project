import {createInfoEvent} from './UIModule.js';

console.log(localStorage.getItem('name'), localStorage.getItem('picture'), localStorage.getItem('description'), localStorage.getItem('city'), localStorage.getItem('street'), localStorage.getItem('longitude'), localStorage.getItem('latitude'));

console.log(typeof(localStorage.getItem('description')));



createInfoEvent(localStorage.getItem('name'), localStorage.getItem('picture'), JSON.parse(localStorage.getItem('description')), localStorage.getItem('city'),localStorage.getItem('street'), localStorage.getItem('longitude'), localStorage.getItem('latitude'));