function init(){
    getFromLocalStorage()
    renderBook();
}


function renderBook(){
    let contenContainer = document.getElementById('our_books');
    contenContainer.innerHTML = "";
    
    for (let index = 0; index < books.length; index++) {
        contenContainer.innerHTML += getTheBooks(index)  
    }
}

function renderComments(index){
    let commentsHTML = "";

   for (let commentsIndex = 0; commentsIndex < books[index].comments.length; commentsIndex++) {
    commentsHTML += getTheComments(index, commentsIndex)  
   }
 return commentsHTML;
 
}

function likedOrDisliked(bookId){
    let book = books[bookId]
    let heart = document.getElementById(`heart-${bookId}`);
    let wasLiked = book.liked
    book.liked = !book.liked

   if(wasLiked === true)
     book.likes -= 1;
   else
    book.likes += 1;

    if(book.liked){
        heart.classList.add("liked")
    }else{
        heart.classList.remove("liked")
    }
    document.getElementById(`likes-${bookId}`).innerHTML = book.likes;
}

function addComent(index){
    let textCommentRef = document.getElementById(`text_input_${index}`)
    let textComment = textCommentRef.value;
   
 
    if (textComment.trim() === "") return 
        books[index].comments.unshift({
            name: "du",
            comment: textComment        
        });

  saveFromLocalStorage() 
   renderBook();
   textCommentRef.value = "";    
}

function getFromLocalStorage(){
    let myArray = JSON.parse(localStorage.getItem("books"));
    
    if (myArray !== null)
        books = myArray;

}

function saveFromLocalStorage(){
    localStorage.setItem("books", JSON.stringify(books))
}