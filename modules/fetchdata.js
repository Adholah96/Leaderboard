const fetchData = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QKLvYjVExl4PXXpmAVgS/scores/'
    )
    const data = await response.json()
    return data.result
  } catch (error) {
    return error
  }
}

export default fetchData
