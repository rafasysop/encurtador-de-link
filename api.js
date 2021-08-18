const baseURL = 'https://api-ssl.bitly.com/v4/shorten'

const token = '5588e9e7f2408db1aa415f98f200b2de51fee7ee'

const data = {
  long_url: "https://rafasysop.github.io/"  
}

async function fazerChamada(urlLong = data.long_url) {

  data.long_url = urlLong

  const response = await fetch(baseURL, 
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
  })
    
  const res = await response.json()
  return res
}

export default fazerChamada
