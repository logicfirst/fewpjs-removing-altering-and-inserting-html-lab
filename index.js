// Write your code here!

function removeMain(){
  let elmain = document.querySelector('#main')
  elmain.remove()
}

removeMain()

function newHead(){
  let newHeader = document.createElement('h1')
  newHeader.setAttribute('id', 'victory')
  document.body.appendChild(newHeader)
  newHeader.innerText = "Scott is the champion"
}

newHead()