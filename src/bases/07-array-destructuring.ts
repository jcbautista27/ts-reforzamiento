const characterNames = ["Goku", "Vegeta", "Trunk"]

const [, , trunk] = characterNames

console.log({ trunk })

const returnArrayFn = () => {
    return ['abc', 123] as const
}

const [letter, number] = returnArrayFn()

console.log({ letter, number })


const useState = (value: string) => {
    return [value, (newValue: string) => {
        return console.log(newValue)
    }] as const
}

const [name, setName] = useState("JC")

console.log(name);
setName("BA")