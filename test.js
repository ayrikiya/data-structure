class User {
    constructor(){
        this.age = 18;
        this.name = 'dada';
    }
    
    name = "Anonymous";

    sayHi() {
      alert(`Hello, ${this.name}!`);
    }
}

var ming = new User();

console.log(ming)