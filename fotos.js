
async function imagem(){
    const image = fetch('https://source.unsplash.com/random').then(data => data.url).catch(e => console.log(e))
    const img = document.getElementById('imagem')

    img.src = await image
}

imagem()

const meuBotao = document.getElementById('botao')

async function evento() {
    meuBotao.addEventListener("click", await imagem())
}


