const displayData = (leaderboard) => {
  const scores = document.querySelector('.scores')
  scores.innerHTML = ''

  leaderboard.forEach((element) => {
    const singleScore = document.createElement('li')
    singleScore.textContent = `${element.user}:${element.score}`
    scores.appendChild(singleScore)
  })
}

export default displayData
