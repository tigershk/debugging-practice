const start = 10;
const end = 15;

for(let i = start; i < end; i++){
  console.log(i);
}

function sayWorld(){
  console.log("World");
}

function sayHello(){
  console.log("Hello");
  sayWorld();
}

sayHello();

const x = 27;
