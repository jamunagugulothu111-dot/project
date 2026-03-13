// synchronous js
console.log("Eat Breakfast");
console.log("Talk to a frind");
for(let x = 1;x<3000;x++){
    console.log("Talked to friend")
}
console.log("Write an email");
console.log("Meet manager");
for( let x=0;x<5000;x++){
    console.log("Meeting completed with manager")
}
console.log("Fix a bug");

// Asynchronus 
console.log("Eat Breakfast");
console.log("Talk to a frind");
setTimeout(() => {
    console.log("Talked to friend")
}, 4000);
console.log("Write an email");
console.log("Meet manager");
setTimeout(() => {
    console.log("meeting completed with manager")
}, 5000);
console.log("Fix a bug");
