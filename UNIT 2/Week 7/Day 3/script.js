const getBooks = function () {
  fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Error')
      }
    })
    .then((bookList) => {
      console.log(bookList)
      for (let i = 0; i < bookList.length; i++) {
        const cardCol = document.createElement('div')
        cardCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-3')
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `<img src="${bookList[i].img}" class="card-img-top w-100" alt="book cover">
        <div class="card-body">
          <h5 class="card-title">${bookList[i].title}</h5>
          <p class="card-text">Price: <span>${bookList[i].price}</span>€</p>
          <a href="#" class="btn btn-danger"><i class="bi bi-trash"></i></a>
        </div>`
        document.getElementById('bookList').appendChild(cardCol)
        cardCol.appendChild(card)
        
        const deleteBtn = document.querySelectorAll('.btn-danger')

        for (let i = 0; i < deleteBtn.length; i++) {
          deleteBtn[i].addEventListener('click', (event) => {
            event.target.closest('.col').remove()
          })
        }

      }
    })
    .catch((error) => {
      console.log(error)
    })
}
getBooks()
