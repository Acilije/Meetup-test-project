function Event(obj) {
    this.id = obj.group.id;
    this.name = obj.venue.name;
    this.picture = obj.photo_url;
    this.description = obj.description;
    this.city = obj.venue.city;
    this.street = obj.venue.address_1;
    this.longitude = obj.venue.lon;
    this.latitude = obj.venue.lat;
}

function arrOfEvents(arr) {
    return arr.map(function (el) {
        return new Event(el);
    }).filter(function (el) {
        return el.name == "Belgrade";
    })
}

export default arrOfEvents;

