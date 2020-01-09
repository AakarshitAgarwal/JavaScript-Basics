const s1 = "Hello";
//console.log(s1.toUpperCase()); // javascript add a wrapper in it
//  console.log(typeof s1)       //data type of s1 i.e string
 
// let str = new String("hello");
// console.log(typeof str);            //object

//  console.log(window.navigator);          //window properties
// console.log(navigator.appVersion);        //specific window properties

//Creating Object Literals

const Book1={
    title:'My Life My Mistake',
    author:'Anand Stephan',
    year:'2019',
    getSummary:function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

// console.log(Book1.getSummary());
// console.log(typeof Book1.title);
console.log(Object.values(Book1));   //gives value of variables
console.log(Object.keys(Book1));     //gives the key of the variable....ex-title,author,year