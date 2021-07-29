const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
let prev = ""
let state = false;
btn_toggle.onclick = () => {
  // your code here
  if (state == false) {
    prev = author.innerText
    const w = author.innerText.split(' ')
    let v = parseInt(w[0]) + parseInt(length.value)
    author.innerText = v
    state = true
  }
  else {
    author.innerText = prev
    state = false
  }
}

// more codes for Search and Reset buttons here

const search = document.getElementById('search')
const reset = document.getElementById('reset')
const text = document.getElementById('text')

let org = text.innerText
let s = false

search.onclick = () => {
  let arr  = text.innerText.split(' ')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= length.value) {
      arr[i] = "<span style=\"color:" + color.value + ";\">" + arr[i] + "</span>"
    }
  } 

  const t = arr.join(' ')

  text.innerHTML = t

  s = true
}

color.oninput = () => {
  if (s == true) {
    let arr  = text.innerText.split(' ')

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= length.value) {
        arr[i] = "<span style=\"color:" + color.value + ";\">" + arr[i] + "</span>"
      }
    } 

    const t = arr.join(' ')

    text.innerHTML = t
  }

}

reset.onclick = () => {
  text.innerHTML = org
}
