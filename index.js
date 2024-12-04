class My{
    name = "MN"; // this called class fields
    age = 23;
    passion = "Actress";
    myLove = "Nk Motivation MN"
    // creatong a function in class
    myDream(){
        console.log("Nk💙 MN")
        console.log(this.myLove)
    }
}

// creating a object for My class
let my = new My();
// accessing the class flieds in outer class
console.log(my.name)
console.log(my.age);
console.log(my.passion)
my.myDream();