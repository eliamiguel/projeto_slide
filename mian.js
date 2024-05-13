
const containerItens = document.querySelector("#container-Item")
const containerSlides = document.querySelector('.container-slides')
let id = document.querySelector('#id')


const image= [
  {'id': '1','url': './img/chrono.jpg'},
  {'id': '2','url': './img/inuyasha.jpg'},
  {'id': '3','url': './img/ippo.png'},
  {'id': '4','url': './img/tenchi.jpg'},
  {'id': '5','url': './img/tenjhotenge.jpg'},
  {'id': '6','url': './img/yuyuhakusho.jpg'}
]

const laondImagem = (image, containerItens)=>{
    image.forEach(img =>{
      containerItens.innerHTML += `
    <div class="item"> <img src="${img.url}">
    <span class='ids'>${img.id}</span> 
    </div>
    
    `
  });
}

laondImagem(image, containerItens)
let itens = document.querySelectorAll('.item')
console.log()
const voltar = ()=>{
  const lastItem = itens[itens.length - 1]
  containerItens.insertBefore(lastItem, itens[0])
  itens = document.querySelectorAll('.item')
  id.innerHTML = document.querySelector('.ids').innerText
  
}
const proximo = ()=>{
  containerItens.appendChild(itens[0])
  itens = document.querySelectorAll('.item')
  id.innerHTML = document.querySelector('.ids').innerText
}
document.querySelector("#voltar").addEventListener("click", voltar)
document.querySelector("#proximo").addEventListener("click", proximo)


