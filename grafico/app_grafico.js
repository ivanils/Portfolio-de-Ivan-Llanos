'use strict'
const body      = document.querySelector('body')

const cursorpack= body.querySelector('.cursorpack')
    const cursor   = cursorpack.querySelector('.cursor')
    const fancy    = cursorpack.querySelector('.fancy')

const ventana   = body.querySelector('.ventana')
    const linea         = ventana.querySelector('.scrolling')
    const ven_web       = ventana.querySelector('.ven_web')
    const ven_grafico   = ventana.querySelector('.ven_grafico')
    const equis         = ventana.querySelectorAll('.equis')
    const burguer       = ventana.querySelector('.burguer')
    const menu          = ventana.querySelector('.menu_responsive')
    const secciones     = ventana.querySelectorAll('.li_responsive')

const header    = body.querySelector('.header')

const logo      = body.querySelector('.logo a')
const a         = body.querySelectorAll('.a')
const rs        = body.querySelectorAll('.rs')

const principal = body.querySelector('.principal')
    const desenfoque= principal.querySelectorAll('.desenfoque')

const muestrario= body.querySelector('.muestrario')
    const h4_mues   = muestrario.querySelector('.h4_mues')
    const rama      = muestrario.querySelectorAll('.mues')

const trabajo   = body.querySelectorAll('.trabajo')
    const muestra   = body.querySelectorAll('.muestra')

const img_graf  = body.querySelectorAll('.img_graf')
const img           = document.querySelectorAll('.img')
const lightbox    = document.querySelector('.lightbox')
const grande        = document.querySelector('.grande')
const button        = document.querySelector('.button')
const izquierda     = document.querySelector('.flizquierda')
const derecha       = document.querySelector('.flderecha')
const overlay       = document.querySelector('.overlay')


// Deteccion navegador

let cual = navigator.userAgent.toLowerCase()
    if (cual.indexOf('safari') != -1) { 
    if (cual.indexOf('chrome') > -1) {
        fancy.classList.remove('safari')
    } else {
        fancy.classList.add('safari')}
}


// CURSOR

let cursorin = ()=>{
    cursorpack.classList.add('activo')
} 
let cursorindos = ()=>{
    cursorpack.classList.add('activo_dos')
} 
let cursorintres = ()=>{
    cursorpack.classList.add('activo_tres')
} 
let cursorout = () => {
    cursorpack.classList.remove('activo')
}
let cursoroutdos = () => {
    cursorpack.classList.remove('activo_dos')
}
let cursorouttres = () => {
    cursorpack.classList.remove('activo_tres')
}

window.addEventListener('mousemove', (e)=>{
    // console.log(e)
    let x = e.pageX
    let y = e.pageY
    cursor.style.transform =`translateX(${x}px)` + `translateY(${y}px)`
    cursorpack.style.opacity = `1`

    if(e.pageX > 2530 ||e.pageX < 1 ||e.pageY < 5){ cursor.style.opacity = `0`}
    else{cursor.style.opacity = `1`}
    fancy.style.transform =`translateX(${x}px)` + `translateY(${y}px)`
    if(e.pageX > 2530 ||e.pageX < 1 ||e.pageY < 5){ fancy.style.opacity = `0`}
    else{fancy.style.opacity = `1`}
})


a.forEach((v,i)=>{
    a[i].addEventListener('mouseover', cursorintres)
    a[i].addEventListener('mouseout', cursorouttres)
})
logo.addEventListener('mouseover', cursorintres)
logo.addEventListener('mouseout', cursorouttres)
rs.forEach((v,i)=>{
    rs[i].addEventListener('mouseover', cursorintres)
    rs[i].addEventListener('mouseout', cursorouttres)
})
izquierda.addEventListener('mouseover', cursorintres)
izquierda.addEventListener('mouseout', cursorouttres)

derecha.addEventListener('mouseover', cursorintres)
derecha.addEventListener('mouseout', cursorouttres)

button.addEventListener('mouseover', cursorintres)
button.addEventListener('mouseout', cursorouttres)
// MENU RESPONSIVE

burguer.addEventListener('click', () => {
    burguer.classList.toggle('activo')
    menu.classList.toggle('activo')
    ventana.classList.toggle('activo')
})
secciones.forEach((v,i)=>{
    secciones[i].addEventListener('click', ()=>{
        burguer.classList.remove('activo')
        menu.classList.remove('activo')
        ventana.classList.remove('activo')
    })
})

// Dirección del SCROLL

    // Declarar las variables para el scroll de ANTES y el scroll de AHORA
    
    // Listener de scroll con el parametro e para 'window':
    // Variable AHORA es el PageYOffset(cantidad de px que se hace scroll) de 'window'.
    // Condicional en la que 
    // si ANTES(= 0) es menor que AHORA(valor del PageYOffset)
    // --entonces-->  P.Ej { Console.log('scroll hacia abajo')} 
    // --si no se cumple--> P.Ej { Console.log('scroll hacia arriba')}
    
    // Para se cumpla el 'scroll hacia arriba' hay hacer otro condicional para cambiar el valor de ANTES
    
    // En este condicional
    // Si AHORA(pageYOffset) es menor o igual que 0
    // --entonces--> ANTES es igual a 0 (se igualan las variables)
    // --si no se cumple--> ANTES se iguala a AHORA (ANTES pasaría a tener el valor del pageYOffset en el último momento del scroll hacia abajo entonces al volver a ejecutar scroll, en este caso hacia arriba, ANTES seria > AHORA y se cumplirí la condicion ELSE del primer condicional)
    

    // let antes = 0
    // let ahora = 0
    
    // window.addEventListener('scroll', (e) => {
    //     ahora = window.pageYOffset
    //         if (antes < ahora){
    //             console.log('Hacia abajo')}
    //         else { console.log('Hacia arriba') }

    //         if( ahora <= 0 ){ antes = 0}
    //         else{ antes = ahora}

    //         console.log(antes) 
    //         console.log(ahora) 
    // })


    let antes = 0
    let ahora = 0
    
    window.addEventListener('scroll', (e) => {
        ahora = window.pageYOffset
            if (antes < ahora){
                header.classList.add('esconder')
                burguer.classList.add('esconder')
            }else{
                header.classList.remove('esconder')
                burguer.classList.remove('esconder')
            }

            if( ahora <= 0 ){ antes = 0}
            else{ antes = ahora}

            // console.log(antes) 
            // console.log(ahora) 
    })

// Efectos de SCROLL

let efectoScroll = ( elemento , altura) => {
    window.addEventListener('scroll', ()=>{

        let pixel           = window.scrollY
        let alturaVentana   = window.innerHeight

        // console.log(elemento.offsetTop)
        
        if( pixel >= elemento.offsetTop){
            elemento.classList.remove('entrar')
        }else if (pixel >= ( elemento.offsetTop - (alturaVentana/ altura) )){
            elemento.classList.add('entrar')
        }else{
            elemento.classList.remove('entrar')
        }
    })
}
let efectoScrollPrincipal = ( elemento , altura) => {
    window.addEventListener('scroll', ()=>{

        let pixel           = window.scrollY
        let alturaVentana   = window.innerHeight

        // console.log(elemento.offsetTop)
        
        if (pixel >= ( elemento.offsetTop - (alturaVentana/ altura) )){
            elemento.classList.remove('entrar')
        }else{
            elemento.classList.add('entrar')
        }
    })
}
let efectoScrollColor = ( elemento , altura, color) => {
    window.addEventListener('scroll', ()=>{

        let pixel           = window.scrollY
        let alturaVentana   = window.innerHeight
    
        // if( pixel >= elemento.offsetTop){
        //     desenfoque.forEach((v,i)=>{
        //         desenfoque[i].classList.remove(color)
        //     })
        // }else
        if (pixel >= ( elemento.offsetTop - (alturaVentana/ altura) )){
            desenfoque.forEach((v,i)=>{
                desenfoque[i].classList.add(color)
            })
        }else{
            desenfoque.forEach((v,i)=>{
                desenfoque[i].classList.remove(color)
            })
        }
    })
}


rama.forEach((v,i)=>{
    efectoScroll(rama[i], 1.2)
    rama[i].addEventListener('mouseover', cursorin)
    rama[i].addEventListener('mouseout', cursorout)
})
trabajo.forEach((v,i)=>{
    efectoScroll(trabajo[i], 1.2)
})
muestra.forEach((v,i)=>{
    efectoScroll(muestra[i], 1.5)
    muestra[i].addEventListener('mouseover', cursorin)
    muestra[i].addEventListener('mouseout', cursorout)
    // let moverImagen = (event)=>{
    //     let anchoElemento       = img_graf[i].offsetWidth
    //     let alturaElemento      = img_graf[i].offsetHeight
    //     let medioX  = img_graf[i].offsetLeft + (anchoElemento/2)
    //     let medioY  = img_graf[i].offsetTop + (alturaElemento/2) 
    //     // console.log(medioX, medioY)    
    //     let cursorX = event.clientY - medioX
    //     let cursorY = event.clientY - medioY
    //     console.log(cursorX, cursorY)
    //     let rotarY  = 25*cursorY/(alturaElemento/2)
    //     let rotarX  = 25*cursorX/(anchoElemento/2)

    //     img_graf[i].style.transform = `perspective(1000px) rotateX(${rotarX}deg) rotateY(${rotarY}deg)`
    // }
    // img_graf[i].addEventListener('mousemove', moverImagen)
})

efectoScrollColor(muestrario, 1.7, 'gris')

// Efecto mover imagen

// Lightbox


let foto            = 0
let cerrar          = ()=>{
    lightbox.classList.remove('activo')
    overlay.classList.remove('activo')
}
let cambiarSource   = ()=>{
    grande.src = img[foto].src
}
// LIGHTBOX
img.forEach((v,i)=>{
    img[i].addEventListener('click', ()=>{
        foto = i
        lightbox.classList.add('activo')
        overlay.classList.add('activo')
        cambiarSource()
    })
})
button.addEventListener('click', cerrar)
// FLECHAS
derecha.addEventListener('click', ()=>{
    foto++
    if(foto>=img.length){foto=0}
    cambiarSource()
    console.log(foto)    
})

izquierda.addEventListener('click', ()=>{
    foto--
    if(foto<0){foto=img.length - 1}
    cambiarSource()
    console.log(foto)
})
