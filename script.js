function ProcessGBSBookInfo(booksInfo) {
 for (var isbn in booksInfo) {
  var element = document.getElementById(isbn);
  var bookInfo = booksInfo[isbn];
  if (bookInfo) {
   var coverImg = document.createElement('img');
   coverImg.src = bookInfo.thumbnail_url;
   element.appendChild(coverImg);
  }
 }
}

var books = [
  {
    title: 'Scar Island',
    isbn: '1338053868',
    tags: ['chapter', 'adventure']
  },
  {
    title:'Real Friends',
    isbn: '1250164168',
    tags: ['graphic_novel', 'realistic', 'middle_school']
  },
  {
   title: 'Short',
   isbn: '1407178946',
   tags: ['chapter', 'summer']
  }
];

var views = {
 tagSelected: function(tag) {
  console.log(tag);
  var containerDiv = document.getElementById('booksContainer');
  var bookDivs = '';
  //containerDiv.innerHTML = '<p>' + tag + '</p>'
  books.forEach(function(book) {
   if (SearchArray(book.tags, tag)) {
    console.log(book);
    bookDivs += '<p>Title: ' + book.title + '</p>'
   }

  })
  containerDiv.innerHTML = bookDivs;
 }
}

function SearchArray(array, searchTerm) {
 for ( var i = 0; i < array.length; i++) {
  if (array[i] === searchTerm) {
   return true;
  }
 }
 return false;
}