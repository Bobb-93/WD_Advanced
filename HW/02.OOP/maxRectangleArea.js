/*
                        Task Description
Represent the data, about 5 rectangles with next properties:

      id: r1, width: 40, height: 20
      id: r2, width: 30, height: 30
      id: r3, width: 10, height: 80
      id: r4, width: 90, height: 2
      id: r5, width: 20, height: 20

Write a function which will return the id of the rectangle with biggest area.

Expected output: r2
*/

class Rectangle{
    constructor( id, width, height ){
        // define properties:
        this.id = id;
        this.width = width;
        this.height = height;
    }
    
    // define methods:
    calcArea(){
        return  this.width * this.height; // from ES6
    }  
};

const rectangle1 = new Rectangle("r1", 40, 20);
const rectangle2 = new Rectangle("r2", 30, 30);
const rectangle3 = new Rectangle("r3", 10, 80);
const rectangle4 = new Rectangle("r4", 90, 2);
const rectangle5 = new Rectangle("r5", 20, 20);


//function, which uses an array:
let rectangles = [rectangle1, rectangle2, rectangle3, rectangle4, rectangle5];

function biggestAreaArray(rectangles){
    let maxArea = rectangles[0].calcArea();
    let maxAreaId = rectangles[0].id;

    for (let i = 1; i < rectangles.length; i++) {
        const currentArea = rectangles[i].calcArea();
        const currentAreaId = rectangles[i].id;
        if(currentArea > maxArea){
            maxArea = currentArea;
            maxAreaId = currentAreaId;
        }
    }
    return maxAreaId;
}

console.log(biggestAreaArray(rectangles));

//function, which uses The arguments object
function biggestAreaArguments(){
    let maxArea = arguments[0].calcArea();
    let maxAreaId = arguments[0].id;

    for (let i = 1; i < arguments.length; i++) {
        const currentArea = arguments[i].calcArea();
        const currentAreaId = arguments[i].id;
        if(currentArea > maxArea){
            maxArea = currentArea;
            maxAreaId = currentAreaId;
        }
    }
    return maxAreaId;
}

console.log(biggestAreaArguments(rectangle1, rectangle2, rectangle3, rectangle4, rectangle5));