import axios from "axios"

async function getQuestions(estado,category){
  const url = `https://the-trivia-api.com/api/questions?categories=${category}&limit=1`
  const response = await axios.get(url)
  await estado(response.data) 
}

async function getTags(estado) {
  const url = 'https://the-trivia-api.com/api/metadata'
  const response = await axios.get(url)
  await estado(response.data.byCategory)
  console.log(response.data.byCategory)
}

export{
  getQuestions,
  getTags
}
