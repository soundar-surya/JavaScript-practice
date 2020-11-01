function showName(){ 
    console.log(this.name);
}
const name = "surya";
const obj1 = {
    name: "arya stark",
    display: showName
};
showName();
obj1.display();
