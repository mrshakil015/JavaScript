class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
}

const rohim = new Person('Mr. Rohim', 32);
console.log(rohim);
rohim.sleep();

const korim = new Person(`Md. Korim`, 23);
korim.sleep()