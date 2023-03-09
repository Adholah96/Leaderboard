const postData = (name, score) => {
  fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QKLvYjVExl4PXXpmAVgS/scores/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score: score,
      }),
    }
  )
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(`New score created: ${data.result}`)
    })
    .catch((e) => {
      return e
    })
}

export default postData
