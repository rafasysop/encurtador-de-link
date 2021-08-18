import fazerChamada from './api.js'


const ul = document.createElement('ul')
const input = document.querySelector('#longLink')
const btn = document.querySelector('#btn')

const res = () => fazerChamada(input.value).then(resp => {
  console.log(resp);
  const newLong = resp.long_url.split('/')

  const li = document.createElement('li')
  li.innerHTML = `<a href='${resp.link}' target='_blank'>${resp.link}</a> | ${newLong[2]}/${newLong[3]}.... `
  ul.appendChild(li)
})

btn.addEventListener('click', res)



const body = document.querySelector('body')
body.appendChild(ul)