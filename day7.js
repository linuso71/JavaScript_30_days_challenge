// Task 1
let book = {
    title:"linus Biography",
    author:"linus",
    year:"1991"
};

console.log(book);

// task 2

console.log(book.title);
console.log(book["author"])

// task 3
book = {
    title:"linus",
    author:"zeus",
    year:"2001",
    combine : function(){
        return this.title + " " + this.author
    }
}

// task 4
book['year'] = 2001;
console.log(book);

// task 5
let library = {
    user1:{
        name:"linus",
        books: ["three man in boat", "linus biography"]
    },
    user2:{
        name:"zeus",
        books: ["four man in boat", "zeus biography"] 
    }
};

console.log(library)
console.log("this is library")

// task 6
for (const lib in library){
    console.log(library[lib].name)
    console.log(library[lib].books)
}

// task 7
console.log(book.combine())

book = {
    title:"linus",
    author:"zeus",
    year:"2001",
    combine : ()=>{
        return this.title + " " + this.year
    }
}

console.log(book.combine())


arr = [1,2]
console.log(arr.map((a)=>{return a+1}))

// task 8
for(const b in book){
    console.log(b+" -> "+book[b])
}

// task 9
console.log(Object.keys(book))
console.log(Object.values(book))

