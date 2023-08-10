let user = {
    name: "John",
    age:30
};
user.sayHello = function() {
    console.log( "Hello "+ this.name );
};
user.sayHello();