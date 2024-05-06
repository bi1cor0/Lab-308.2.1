const radius = 5;
const pi = 3.1415;
const area = pi * radius * radius;
let plants = 20;
const plantSpace = 0.8;
const startingSpace = plants * plantSpace;
let spaceWeek1 = plants * 2 * plantSpace;
let spaceWeek2 = plants * 4 * plantSpace;
let spaceWeek3 = plants * 8 * plantSpace;

if(spaceWeek1 > (area * 0.8)){
    console.log(`Week 1 plants need to be pruned. The area has exceeded to ${spaceWeek1} sq ft.`)
} else if(spaceWeek1 < (area *0.5)){
    console.log(`Week 1 plants need to be planted. The area has not grown, and is at ${spaceWeek1} sq ft.`)
} else {
    console.log(`Week 1 plants are going at an acceptable rate. The are is currently at ${spaceWeek1} sq ft.`)
}

if(spaceWeek2 > (area * 0.8)){
    console.log(`Week 2 plants need to be pruned. The area has exceeded to ${spaceWeek2} sq ft.`)
} else if(spaceWeek1 < (area *0.5)){
    console.log(`Week 2 plants need to be planted. The area has not grown, and is at ${spaceWeek2} sq ft.`)
} else {
    console.log(`Week 2 plants are going at an acceptable rate. The are is currently at ${spaceWeek2} sq ft.`)
}

if(spaceWeek3 > (area * 0.8)){
    console.log(`Week 3 plants need to be pruned. The area has exceeded to ${spaceWeek3} sq ft.`)
} else if(spaceWeek1 < (area *0.5)){
    console.log(`Week 3 plants need to be planted. The area has not grown, and is at ${spaceWeek3} sq ft.`)
} else {
    console.log(`Week 3 plants are going at an acceptable rate. The are is currently at ${spaceWeek3} sq ft.`)
}

{
    plants = 100;
    let spaceWeek10 = plants * 2**10 * plantSpace;
    let newRadius = Math.sqrt(spaceWeek10 / pi);
    console.log(`After 10 weeks of no pruning, the area for 100 plants would need to be: ${spaceWeek10} sq ft. With a new starting radius of ${newRadius} sq ft.`);
}

