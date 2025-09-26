interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
}

interface Address {
    codeZip: string;
    city: string
}

const iroman : Person = {
    firstName: "Thony",
    lastName: "Stark",
    age: 45,
    address: {
        codeZip: "abc123",
        city: "San francisco"
    }
}

const spiderman = structuredClone(iroman)

spiderman.firstName = "Peter"
spiderman.lastName = "Parker"
spiderman.age = 25
spiderman.address.city = "new york"

console.log(iroman, spiderman)