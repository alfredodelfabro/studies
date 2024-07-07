// Basic Types
let id:number = 5;
let company:string = 'Vetor Editora';
let isPublished:boolean = true;
let x:any = 'Hello';
x = true;
let age:number;

let arr: number[] = [1, 2, 3];
let arr2:any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Alfredo', true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'Alfredo'],
  [2, 'Maria'],
  [3, 'João']
]

// Union
let pid: string | number = 12;
pid = '22';

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Alfredo'
}

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
let customerId2 = cid as number;

// Functions
function addNum(x:number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Alfredo'
}

interface MathFunc {
  (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x + y;
const sub: MathFunc = (x:number, y:number): number => x - y;

interface PersonInterface {
  id: number
  name: string
  register(): string
}


// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}