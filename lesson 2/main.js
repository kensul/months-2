const array = [
    {
    username: "Jack",
    full_name: "Jack Koin"
    },
    {
        username: "Jack",
        full_name: "Jack Koin"
    },
    {
        username: "Jack",
        full_name: "Jack Koin"
    },
    {
        username: "Jack",
        full_name: "Jack Koin"
    },
    {
        username: "Jack",
        full_name: "Jack Koin"
    },
    {
        username: "Jack",
        full_name: "Jack Koin"
    },
    {
        username: "Jack",
        full_name: "Jack Koin"
    },

]
//
//
// //инкрементация
// let i=0; //i++
// i=i+1
//
// for(let i=0; i<array.length; i++){
//     console.log(array[i])
// }
    // if(i===2){
    //     break;
//     } else {
//         console.log(array[i])
//     }
// }

// for(let user of array){
//     console.log(user)
// }


// const obj = {
//     key1: "b1",
//     key2: "b2",
//     key3: "b3",
//     key4: "b4",
//     key5: "b5",
//     key6: "b6",
// }
//
// for(let key in obj){
//     console.log(obj[key])
// }

const robots = [
    {
        robot: "Nick",
        power: 500
    },
    {
        robot: "Jack",
        power: 2000
    },
    {
        robot: "Dread",
        power: 1500
    },
    {
        robot: "Ron",
        power: 3000
    },
    {
        robot: "Shon",
        power: 2500
    },
]
const filteredRobots = robots.filter(robot => robot.power > 2000)
console.log(filteredRobots)

