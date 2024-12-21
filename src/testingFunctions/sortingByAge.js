const users = [
    {name: "Rohan", age: 23},
    {name: "Rohit", age: 24},
    {name: "Karan", age: 25},
    {name: "Varun", age: 28},
    {name: "Archit", age: 23}
]

const sortByAge = () => {
    const data = users.sort((a,b) => a.age-b.age);
    return data;
}

export default sortByAge;