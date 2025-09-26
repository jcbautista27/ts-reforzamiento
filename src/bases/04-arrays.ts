const myArray: number[] = [1,2,3,4,5,6];

const myArray2 = [...myArray]

for (const data of myArray2) {
    console.log(data + 10)
}

myArray2.push(15)

console.log({myArray, myArray2})