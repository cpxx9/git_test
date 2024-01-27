function Book(title, author, pages, hasRead) {
  this.title = title;  
  this.author = author;  
  this.pages = pages;  
  this.hasRead = hasRead;
  this.info = function() {
    return `${this.title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())} by ${this.author.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}, ${this.pages} pages, ${this.hasRead ? "has been read" : "not read yet"}`;
  };
}