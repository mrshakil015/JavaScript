// task--1: console log the secondary school location of Sophia
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: "ABC Primary School"},
                    { location: "Dhaka"}
                ]
            },
            {
                secondary: [
                    { school_name: "ABC Secondary School"},
                    { location: "Dhanmondi"}
                ]
            }
        ]
    }
}

console.log(data.Sophia.study[1].secondary[1])

//task-2: console log output: Petersburg
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK",
        }
    }
}

// task -3: 