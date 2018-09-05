import {createInfoEvent} from './UIModule.js';


createInfoEvent(localStorage.getItem('name'), localStorage.getItem('picture'), JSON.parse(localStorage.getItem('description')), localStorage.getItem('city'),localStorage.getItem('street'), localStorage.getItem('longitude'), localStorage.getItem('latitude'));