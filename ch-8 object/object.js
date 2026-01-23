console.log("Object");

/*
syntex : let object = {
        key1 : value1
        key2 : value2
        key N : valueN
        }
*/
// Array
let myUser = [101, "pragna", "pagu@gmail.com", "pagu123", "female", 75000.50, false];

// object
let user = {
    id: 101,
    name: "Pragna",
    email: "pagu@gmail.com",
    password: "pagu123",
    gender: "famale",
    salary: 75000.50,
    ismarried: false,
    leave: ["13-12-2025", "14-12-2025", "15-12-2025"],
    bankDetails: {
        bank_name: "BOB",
        account_no: 2021476521621,
        account_type: "Salary",
        IFSC_CODE: "BOB20336",
    }
};

console.log(user);
console.log(user.id);
console.log(user['bankDetails']);



