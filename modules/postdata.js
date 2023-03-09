const postData = (name, score) => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QKLvYjVExl4PXXpmAVgS/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    },
  )
    .then((res) => res.json())
    .then((data) => data.result)
    .catch((e) => e);
};

export default postData;
