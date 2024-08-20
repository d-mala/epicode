const pexelsFetch = function (myQuery) {
    fetch('https://api.pexels.com/v1/search?query=' + myQuery, {
      headers: {
        Authorization: 'maDW9i5RJ1NfaYv0f1M8KlkOJ6jRNh4dFr9AT8s3zJIkqCe1LcklMuju',
      },
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore')
        }
      })
      .then((data) => {
        console.log('DATA', data)
        document.querySelectorAll('.card-img-top').forEach((element, index) => {
          element.setAttribute('src', data.photos[index].src.medium)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  document.getElementById('pexelsSearch').addEventListener('submit', (event) => {
    event.preventDefault()
    const query = document.getElementById('pexelsQuery').value
    pexelsFetch(query)
  })