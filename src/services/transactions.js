const BASE_URL = 'http://localhost:3000/transactions/'

export const getTransactions = async () => {
  const response = await fetch(BASE_URL)
  const data = await response.json()
  return data
}

export const getTransaction = async (id) => {
  const response = await fetch(`${BASE_URL}${id}`)
  const data = await response.json()
  return data
}

export const addTransactions = async (body) => {
  const response = await fetch(BASE_URL, { method: 'POST', body })
  const data = await response.json()
  return data
}
export const updateTransactions = async (id, body) => {
  const response = await fetch(`${BASE_URL}${id}`, { method: 'PUT', body })
  const data = await response.json()
  return data
}

export const deleteTransactions = async (id) => {
  const response = await fetch(`${BASE_URL}${id}`, { method: 'DELETE' })
  const data = await response.json()
  return data
}
