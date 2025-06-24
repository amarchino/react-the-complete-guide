// Primitives
let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// Arrays and Objects
let hobbies: string[];
hobbies = [ 'Sports', 'Cooking' ];

// Type Aliases
type Person = { name: string, age: number };

let person: Person;
person = { name: 'Max', age: 32 };

let people: Person[];

// Union types
let course: string | number = 'React - The Complete Guide';
course = 12341;

// Functions
function add(a: number, b: number): number {
    return a + b;
}
function printOutput(value: any): void {
    console.log(value)
}
