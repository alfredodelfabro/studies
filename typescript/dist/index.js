"use strict";
// Basic Types
let id = 5;
let company = 'Vetor Editora';
let isPublished = true;
let x = 'Hello';
x = true;
let age;
let arr = [1, 2, 3];
let arr2 = [1, true, 'Hello'];
// Tuple
let person = [1, 'Alfredo', true];
// Tuple Array
let employee;
employee = [
    [1, 'Alfredo'],
    [2, 'Maria'],
    [3, 'João']
];
// Union
let pid = 12;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Alfredo'
};
// Type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Alfredo'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// Generics
function getArray(items) {
    return new Array().concat(items);
}
