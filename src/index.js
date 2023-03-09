import './style.css'
import postData from '../modules/postdata'
import fetchData from '../modules/fetchdata'
import displayData from '../modules/displayData'

const refreshBtn = document.querySelector('.refreshbtn')
const form = document.querySelector('.form')
const nameInput = form.elements.name
const scoreInput = form.elements.score

refreshBtn.addEventListener('click', async () => {
  console.log('clicked')
  displayData(await fetchData())
})

const addScore = async (e) => {
  e.preventDefault()

  const result = await postData(nameInput.value, scoreInput.value)

  if (result) {
    nameInput.value = ''
    scoreInput.value = ''

    displayData(await fetchData())
  }
}
const init = async () => {
  const data = await fetchData()
  if (data) {
    displayData(data)
  }

  if (form) {
    form.addEventListener('submit', addScore)
    nameInput.value = ''
    scoreInput.value = ''
  }

  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      console.log('refresh button clicked')
      const data = await fetchData()
      if (data) {
        displayData(data)
      }
    })
  }
}

init()
