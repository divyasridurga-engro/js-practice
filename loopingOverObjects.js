// looping through objects
let obj={
    name:'divya',
    age:24,
    gender:'female',
    marital_status:false,
    additional_information:{
        stay:'beeramguda',
        work_place:'hitech city',
        siblings:'no',
        single:'yes'
    }
}

// console.log(Object.keys(obj))
for(var item of Object.keys(obj)){
    // console.log(obj[item])
}

// console.log(Object.values(obj))

// console.log(Object.entries(obj))

//  Object.keys(obj)   Object.values(obj) returns values in an array

let arr=[
    {
        "id": "2070704",
        "source": "",
        "author": "",
        "title": " Big Boss 17: Priyanka Chopra की मां ने Manara Chopra को किया सपोर्ट, वीडियो में कह दी ऐसी बात",
        "timestamp": "2024-01-21 17:09:01",
        "created": "1705837141",
        "changed": "1705837141",
    },
    {
        "id": "2070704",
        "source": "",
        "author": "",
        "title": " Big Boss 17: Priyanka Chopra की मां ने Manara Chopra को किया सपोर्ट, वीडियो में कह दी ऐसी बात",
        "timestamp": "2024-01-21 17:09:01",
        "created": "1705837141",
        "changed": "1705837141",
    },
    {
        "id": "2070704",
        "source": "",
        "author": "",
        "title": " Big Boss 17: Priyanka Chopra की मां ने Manara Chopra को किया सपोर्ट, वीडियो में कह दी ऐसी बात",
        "timestamp": "2024-01-21 17:09:01",
        "created": "1705837141",
        "changed": "1705837141",
    },
    {
        "id": "2070704",
        "source": "",
        "author": "",
        "title": " Big Boss 17: Priyanka Chopra की मां ने Manara Chopra को किया सपोर्ट, वीडियो में कह दी ऐसी बात",
        "timestamp": "2024-01-21 17:09:01",
        "created": "1705837141",
        "changed": "1705837141",
    },
    {
        "id": "2070704",
        "source": "",
        "author": "",
        "title": " Big Boss 17: Priyanka Chopra की मां ने Manara Chopra को किया सपोर्ट, वीडियो में कह दी ऐसी बात",
        "timestamp": "2024-01-21 17:09:01",
        "created": "1705837141",
        "changed": "1705837141",
    },
    
]
// another way of destructuring 
let output= arr.length>0 ? arr.map(({id:number=0,timestamp:time='', title:name=''})=>{
    return  {number, time, name}
}):"empty array";

console.log(output)

