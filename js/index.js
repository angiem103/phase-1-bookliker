document.addEventListener("DOMContentLoaded", function() {
    const booksURL = 'http://localhost:3000/books'

    fetch(booksURL)
    .then(res => res.json())
    .then(renderAllBooks)

    function renderAllBooks(books) {
        books.forEach(book => renderOneBook(book))
    }

    function renderOneBook(book){
        const li = document.createElement('li')
        li.innerHTML = `${book.title}`
        ul = document.getElementById('list')
        ul.append(li)
        li.addEventListener('click', () => (showBookDetails(book)))
    }

    function showBookDetails(book){
        const bookDisplay = document.querySelector('#show-panel')
        bookDisplay.innerHTML = `
        <img src=${book.img_url}>
        <h3>${book.title}</h3>
        <h3>${book.subtitle}</h3>
        <h3>${book.author}</h3>
        <p>${book.description}</p>
        <ul id=user-likes> </ul>
        <button> LIKE </button>
        `
        book.users.forEach(user => {
            const userLi = document.createElement('li')
            userLi.innerText = `${user.username}`
            
            const likesUl = document.querySelector('#user-likes')
            likesUl.appendChild(userLi)

        })
    }


});
