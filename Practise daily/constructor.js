function Details(username, age){
    this.username = username;
    this.age = age;
    return this;
}

const result = new Details("Hiren", 22)
const result2 = new Details("Mayank", 25)
console.log(result);
console.log(result2);

