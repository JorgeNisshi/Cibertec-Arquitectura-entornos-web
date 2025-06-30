

class Ropa {
  constructor(name, price,src) {
    this.name = name;
    this.price = price;
    this.src=src
  }


}
// instancia de ropas
const valorPolo1 = new Ropa("MarRe rojo carmesí", "$30","/image/cátalogo/polos/polo-carmin-enV.jpg");
const valorPolo2=new Ropa("Polo marron prada","$20","/image/cátalogo/polos/polo-marron-enV.jpg")
const valorPolo3=new Ropa("Polo negro cuello en V","$23","/image/cátalogo/polos/polo-negro-fit.jpg")

const valorJeans= new Ropa("Jeans casual ajustados", "$32","/image/cátalogo/jeans/jeans azulceñido.jpg");
const valorJeans2= new Ropa("Jeans rasgados ajustados", "$30","/image/cátalogo/jeans/jeans-azulmarino-rasgado.jpg");
const valorJeans3= new Ropa("Jeans rasgados ajustados negro", "$31","/image/cátalogo/jeans/jeans-negro-rasgado.jpg");

const camisa= new Ropa("camisa rayas azules de trabajo", "$20","/image/cátalogo/camisas/camisa-azul-cielo.jpg")
const camisa2= new Ropa("camisa blanca stilizada", "$22","/image/cátalogo/camisas/camisa-blanca.jpg" )
const camisa3= new Ropa("camisa  rosa rayada", "$21","/image/cátalogo/camisas/camisa-rosa.jpg")


const casaca=new Ropa("Casaca de cuero gabardina style", "$70","/image/cátalogo/casacas/casaca-cuero-marron-2stilos.jpg")
const casaca2=new Ropa("Casaca de cuero señido", "$73","/image/cátalogo/casacas/casaca-cuero-primerstilo.jpg")
const casaca3=new Ropa("Casaca de cuero negra", "$75","/image/cátalogo/casacas/casaca-negra-cuero.jpg")


const chaleco=new  Ropa("chaleco sin manga azul marino con capucha","$33","/image/cátalogo/chalecos/chaleco-azul-con capucha-stilizados..jpg")
const chaleco2=new  Ropa("chaleco afelpado shin","$35","/image/cátalogo/chalecos/chaleco-mujer-azul-marino.jpg")
const chaleco3=new  Ropa("chaleco rojo standar","$22","/image/cátalogo/chalecos/chaleco-rojo-polar.jpg")





// datos Polos
const price1= document.querySelector("#price1")
const polo1 = document.querySelector("#polo1");

const price2=document.querySelector("#price2")
const polo2=document.querySelector("#polo2")

const price3=document.querySelector("#price3")
const polo3=document.querySelector("#polo3")

// Dom  Polos
polo1.innerText = valorPolo1.name;
price1.innerText=valorPolo1.price

polo2.innerText=valorPolo2.name
price2.innerText=valorPolo2.price

polo3.innerText= valorPolo3.name
price3.innerText= valorPolo3.price


// datos jeans

const jeansPrice=document.querySelector("#jeansPrice")
const jeans1=document.querySelector("#jeans1")

const jeansPrice2=document.querySelector("#jeansPrice2")
const jeans2=document.querySelector("#jeans2")

const jeansPrice3=document.querySelector("#jeansPrice3")
const jeans3=document.querySelector("#jeans3")

// dom jeans


jeans1.innerText=valorJeans.name
jeansPrice.innerText=valorJeans.price

jeans2.innerText=valorJeans2.name
jeansPrice2.innerText=valorJeans2.price

jeans3.innerText=valorJeans3.name
jeansPrice3.innerText=valorJeans3.price

// datos camisas

const camisas=document.querySelector("#camisa")
const camisasPrice=document.querySelector("#camisaPrice")

const camisas2=document.querySelector("#camisa2")
const camisasPrice2=document.querySelector("#camisaPrice2")

const camisas3=document.querySelector("#camisa3")
const camisasPrice3=document.querySelector("#camisaPrice3")

// doom camisas

camisas.innerText= camisa.name
camisaPrice.innerText= camisa.price

camisas2.innerText= camisa2.name
camisasPrice2.innerText= camisa2.price

camisas3.innerText= camisa3.name
camisasPrice3.innerText= camisa3.price


// datos chalecos 
const chalecos1=document.querySelector("#chalecos")
const chalecosPrice=document.querySelector("#chalecoPrice")
const chalecosPrice2=document.querySelector("#chalecoPrice2")
const chalecosPrice3=document.querySelector("#chalecoPrice3")
const chalecos2=document.querySelector("#chalecos2")
const chalecos3=document.querySelector("#chalecos3")

// dom chalecos

chalecos1.innerText=chaleco.name
chalecos2.innerText=chaleco2.name
chalecos3.innerText=chaleco3.name
chalecosPrice.innerText=chaleco.price
chalecosPrice2.innerText=chaleco2.price
chalecosPrice3.innerText=chaleco3.price

// datos casacas

const casacas=document.querySelector("#casacas")
const casacasPrice=document.querySelector("#casacaPrice")


const casacas2=document.querySelector("#casacas2")
const casacasPrice2=document.querySelector("#casacaPrice2")


const casacas3=document.querySelector("#casacas3")
const casacasPrice3=document.querySelector("#casacaPrice3")

// doom casacas


casacas.innerText=casaca.name
casacasPrice.innerText=casaca.price

casacas2.innerText=casaca2.name
casacasPrice2.innerText=casaca2.price

casacas3.innerText=casaca3.name
casacasPrice3.innerText=casaca3.price

// Accesorios


class Accesorios {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

}
// relojes

const reloj=new Accesorios("Reloj de oro shein ", "$134")
const reloj2=new Accesorios("Reloj de diseño de edición limitada ", "$334")
const reloj3=new Accesorios("Reloj Rolex de oro ", "$434")

const collar= new Accesorios("Collar estilos de mar","$50")
const collar2= new Accesorios("Collar estilos","$22")
const collar3= new Accesorios("Collar constelacion","$25")

const pulsera= new Accesorios("pulse de oro  shein", "$98")
const pulsera2= new Accesorios("pulse de oro  dior", "$120")
const pulsera3= new Accesorios("pulse de oro shein", "$340")

const arete=new Accesorios("Arete de boda","$50")
const arete2=new Accesorios("Arete de edicion ilimitada","$150")
const arete3=new Accesorios("Arete de boda","$50")


// datos aretes

const relojs1=document.querySelector("#reloj1")
const relojPrice=document.querySelector("#relojPrice")

const relojs2=document.querySelector("#reloj2")
const relojPrice2=document.querySelector("#relojPrice2")

const relojs3=document.querySelector("#reloj3")
const relojPric3=document.querySelector("#relojPrice3")

// dom arete

relojs1.innerText=reloj.name
relojPrice.innerText=reloj.price

relojs2.innerText=reloj2.name
relojPrice2.innerText=reloj2.price

relojs3.innerText=reloj3.name
relojPrice3.innerText=reloj3.price


// datos collares


const collares1=document.querySelector("#collares1")
const collaresPrice=document.querySelector("#collaresPrice")

const collares2=document.querySelector("#collares2")
const collaresPrice2=document.querySelector("#collaresPrice2")

const collares3=document.querySelector("#collares3")
const collaresPrice3=document.querySelector("#collaresPrice3")

// dom collares
collares1.innerText= collar.name
collaresPrice.innerText= collar.price

collares2.innerText= collar2.name
collaresPrice2.innerText= collar2.price

collares3.innerText= collar3.name
collaresPrice3.innerText= collar3.price


// data pulseras

const pulseras1=document.querySelector("#pulseras1")
const pulserasPrice=document.querySelector("#pulserasPrice")

const pulseras2=document.querySelector("#pulseras2")
const pulserasPrice2=document.querySelector("#pulserasPrice2")

const pulseras3=document.querySelector("#pulseras3")
const pulserasPrice3=document.querySelector("#pulserasPrice3")


// dom Pulseras
pulseras1.innerText=pulsera.name
pulserasPrice.innerText=pulsera.price

pulseras2.innerText=pulsera2.name
pulserasPrice2.innerText=pulsera2.price

pulseras3.innerText=pulsera3.name
pulserasPrice3.innerText=pulsera3.price


// data aretes 

const aretes1=document.querySelector("#aretes1")
const aretes2=document.querySelector("#aretes2")
const aretes3=document.querySelector("#aretes3")

const aretesPrice1=document.querySelector("#aretesPrice1")
const aretesPrice2=document.querySelector("#aretesPrice2")
const aretesPrice3=document.querySelector("#aretesPrice3")

// dom artes

aretes1.innerText=arete.name
aretesPrice1.innerText=arete.price

aretes2.innerText=arete2.name
aretesPrice2.innerText=arete2.price

aretes3.innerText=arete3.name
aretesPrice3.innerText=arete3.price


const ulLeft=document.querySelector("#quitarAccesorios")
const flex=document.querySelector(".flex")
const verHover=document.querySelector(".verHover")
const cuadradoAbsoluto=document.querySelector(".cuadradoAbsoluto")
const liFlex=document.querySelector(".flex")
const anchorHover=document.querySelector("#hover")
const anchorHover2=document.querySelector("#hover2")
const ulRight=document.querySelector("#quitarInactive")


ulLeft.addEventListener("mouseover",quitarInactive)
  
function quitarInactive(){
   ulLeft.classList.remove("inactive")
}

anchorHover.addEventListener("mouseover",salgaUnaPopUp)
anchorHover2.addEventListener("mouseover",salgaUnaPopUp2)

function salgaUnaPopUp(){
  ulRight.classList.remove("inactive")
}
function salgaUnaPopUp2(){
  ulLeft.classList.remove("inactive")
}

verHover.addEventListener("mouseover",function(){
  cuadradoAbsoluto.classList.remove("inactive")
  cuadradoAbsoluto.style.width="90px"
})

cuadradoAbsoluto.addEventListener("mouseleave",function(){
  cuadradoAbsoluto.classList.add("inactive")
  quitarInactive()
  cuadradoAbsoluto.style.width="90px"
  ulRight.classList.add("inactive")
  ulLeft.classList.add("inactive")
})

flex.addEventListener("mouseover",function(){
  cuadradoAbsoluto.style.width="180px"
})



document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".zoomable");

  image.addEventListener("dblclick", () => {
    image.classList.toggle("zoomed");
  });
});