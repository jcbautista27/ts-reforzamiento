interface Person {
    name: string;
    age: number;
    key: string;
    rank?: string
}

const person: Person = {
    name: "thony",
    age: 45,
    key: 'ironman'
}

const { name, age, key } = person

console.log({ name, age, key })