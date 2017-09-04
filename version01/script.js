function ProcessGBSBookInfo(booksInfo) {
        for (var isbn in booksInfo) {
         var element = document.getElementById(isbn);
         var bookInfo = booksInfo[isbn];
         if (bookInfo) {
          element.src = bookInfo.thumbnail_url;
         }
       }
    }
    