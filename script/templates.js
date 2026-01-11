function getTheBooks(index){
    return `
    <div class="books_sec">
    <header class="book_title"><h3>${books[index].name}</h3></header>
    <div class="sep_div"></div>
    <div class="img_book">
    <img class="book_img" src="./assets/img/book-161117_1280.png">
    </div>
    <div class="sep_div"></div>
    <div class="info_sec">
    <div class="price_likes">
    <div>
    <p class="price_ptag">${books[index].price}</p></div>
    <div class="likes_liked">
    <p id="likes-${index}" class="likes_count">${books[index].likes}</p>
    <img id="heart-${index}" onclick="likedOrDisliked(${index})" class="heart"src="./assets/book.svg">
    </div>
    </div>
    <div class="tabel_div">
    <table>
    <tr>
    <td>Autor</td>
    <td>:${books[index].author}</td>
  </tr>
  <tr>
    <td>ErscheinungsJahr</td>
    <td>:${books[index].publishedYear}</td>
    </tr>
    <tr>
    <td>Genre</td>
    <td>:${books[index].genre}</td>
  </tr>
</table>
</div>
    </div>
    <div class="sep_div"></div>
    <p class="kommentare_ptag"><strong>Kommentare:</strong></p>
   <div id="comment_content" class="comment_content">
   
   ${renderComments(index)}
    </div>
    <footer class="comment_form">
    <form action="">
        <textarea id="text_input_${index}" class="text_area" placeholder="Schreibe einen Kommentar..."></textarea>
        <button onclick="addComent(${index})" type="button">
        <img class="send_comments" src="./assets/icons/assets_icons_search.svg">
    </button>
    </form>
    </footer>
    </div>`
    ;

}

function getTheComments(index, commentsIndex){
  return ` <div class="single_comment">
    <p class="comment_name"><strong>${books[index].comments[commentsIndex].name}:</strong>
    </p>
    <div class="comment_text">
    <p id="comment_text_${index}">${books[index].comments[commentsIndex].comment}</P>
    </div>
    </div>`
}