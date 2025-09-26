interface User {
    uid: string;
    username: string
}

function greet(name: string): string {
    return `Hola ${name}`
}

const greet2 = (name: string) => `Hola ${name}`


const message = greet("Juan")
const message2 = greet2("Carlos")

console.log(message, message2)


function getUser(): User {
    return {
        uid: "ABC-123",
        username: 'El_Papi23'
    }
}

const getUser2 = (): User =>
({
    uid: 'CBA-321',
    username: 'El_Man32'
})


const user = getUser();
const user2 = getUser2()
console.log(user, user2)

const myNumbers: number[] = [1, 2, 3, 4, 5, 6]

myNumbers.forEach((value) => {
    console.log({ value })
})

myNumbers.forEach(console.log)