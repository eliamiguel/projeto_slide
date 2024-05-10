
const containerItens = document.querySelector("#container-Item")



const image= [
  {'id': '1','url': './img/chrono.jpg'},
  {'id': '2','url': './img/inuyasha.jpg'},
  {'id': '3','url': './img/ippo.png'},
  {'id': '4','url': './img/tenchi.jpg'},
  {'id': '5','url': './img/tenjhotenge.jpg'},
  {'id': '6','url': './img/yuyuhakusho.jpg'}
]



const carregarImagens = (image, containerItens)=>{
  image.forEach(img =>{
    containerItens.innerHTML += `<div class="item">
    <img src='${img.url}'>
    </div>
    `
  })
}


carregarImagens(image, containerItens)


let itens = document.querySelectorAll('.item')


const voltar= ()=>{
  containerItens.appendChild(itens[0])
  itens = document.querySelectorAll('.item')
}

const proximo= ()=>{
  const lastItem = itens[itens.length -1]
  containerItens.insertBefore(lastItem, itens[0])
  itens = document.querySelectorAll('.item')
}

document.querySelector('#voltar').addEventListener('click', voltar)
document.querySelector('#proximo').addEventListener('click', proximo)

/*
const carregarImagens = (image, containerItens)=>{
image.forEach(image =>{
  containerItens.innerHTML +=`
<div class='item'> 
<img src='${image.url}'> 
</div>
`});
}


carregarImagens(image, containerItens)


document.querySelector("#voltar").addEventListener("click", voltar)
document.querySelector("#proximo").addEventListener("click", proximo)
let item = document.querySelectorAll('.item')



function voltar (){
  containerItens.appendChild(item[0])
  item = document.querySelectorAll(".item")
}
function proximo() {
  const lastItem = item[item.length -1]
  containerItens.insertBefore(lastItem, item[0]) 
  item = document.querySelectorAll(".item")
  
}

*/


/*const carregar= (img,containerItens )=>{ 
   img.forEach(image => {
    containerItens.innerHTML += `<div class="item">
   <img src="${image.url}">
   </div>`
  })
}
carregar(img,containerItens)
let item = document.querySelectorAll(".item")
document.querySelector("#voltar").addEventListener('click', voltar)
document.querySelector("#proximo").addEventListener('click', next)

function voltar() {
  containerItens.appendChild(item[0])
  item = document.querySelectorAll(".item")
 
}

function next() {
  const lastItem= item[item.length -1]
  containerItens.insertBefore(lastItem, item[0])
  item = document.querySelectorAll(".item")
}

*/