let arr = [5, 2, 4, 1, 15, 8, 3];
function calcAverageHumanAge(ages) {
    // 1
    let humanAge = ages.map((age) => {
        if (age <= 2) {
            return 2 * age
        } else {
            return 16 + age * 4
        }
    });
    // 2
    let filteredData = humanAge.filter((key) => {
        return key > 18
    })
    // 3 calc avg
    let total = filteredData.reduce((acc, item) => {
        return acc += item
    }, 0)/filteredData.length
    // another mthod for calculating array
    let total_1 = filteredData.reduce((acc, item, index, array) => {
        return acc += item/array.length
    }, 0)
    console.log(total_1);

}

calcAverageHumanAge(arr)