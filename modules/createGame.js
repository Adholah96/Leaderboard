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
    },
  )
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => error);
};

export default createGame;
