//JavaScript boolean toSource() method returns a string representing the source code of the object.
function book(title, publisher, price) {
  this.title = title;
  this.publisher = publisher;
  this.price = price;
}
var newBook = new book("Perl", "Leo", 200);
console.log(newBook.toSource());
