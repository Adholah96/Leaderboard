const createGame = (gameName) => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: gameName,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log('New game created:', data.result)
    })
    .catch((error) => {
      console.error('Error creating game:', error)
    })
}

export default createGame
