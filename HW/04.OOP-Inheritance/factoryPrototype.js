function carFactory(speed){
	let car = {};
	car.speed = speed;
	console.dir(car.__proto__);// Object
	
	//set __proto__ of car to carFactory.prototype
	car.__proto__ = carFactory.prototype;

	return car;
};
carFactory.prototype.drive = function() {
	console.log(`Drinving with ${this.speed}km/h`);
}

var ford = carFactory(200);
var bmw = carFactory(300);


//TODO: send as HW: We can set each object prototype to be the carFactory.prototype, but thiis is not a good practice. Its better to do it in carFactory function itsel. Can you figure how?
// ford.__proto__ = carFactory.prototype;
// bmw.__proto__ = carFactory.prototype;


ford.drive(); // Drinving with 200km/h.
bmw.drive(); // Drinving with 300km/h.



