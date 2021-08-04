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
const a         = body.querySelectorAll('a')
const rs        = body.querySelectorAll('.rs')

const principal = body.querySelector('.principal')
    const desenfoque= principal.querySelectorAll('.desenfoque')
    const nombre    = principal.querySelector('.nombre')
    const apellido  = principal.querySelector('.apellido')
    const resumen   = principal.querySelector('.par_drc')

const me        = body.querySelector('.me')
    const hello = me.querySelector('.h2_info')
    const info  = me.querySelectorAll('.p_info')

const skills     = body.querySelector('.skills')
    const skillsName = skills.querySelectorAll('.h2_sk')
    const skillsTitle= skills.querySelectorAll('.h3_sk')

const muestrario= body.querySelector('.muestrario')
    const h4        = muestrario.querySelector('.h4_work')
    const grafico   = muestrario.querySelector('.grafico')
        const h2g        = grafico.querySelectorAll('.h2')
    const web       = muestrario.querySelector('.web')
        const h2w        = web.querySelectorAll('.h2')

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

window.addEventListener( onmousewheel,(e)=>{
    console.log(e.deltaY)
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

nombre.addEventListener('mouseover', ()=>{
    desenfoque.forEach((v,i)=>{
        desenfoque[i].classList.add('blanco')
    })
    cursorin()
})
nombre.addEventListener('mouseout', ()=>{
    desenfoque.forEach((v,i)=>{
        desenfoque[i].classList.remove('blanco')
    })
    cursorout()
})
apellido.addEventListener('mouseover', ()=>{
    desenfoque.forEach((v,i)=>{
        desenfoque[i].classList.add('purple')
    })
    cursorin()
})
apellido.addEventListener('mouseout', ()=>{
    desenfoque.forEach((v,i)=>{
        desenfoque[i].classList.remove('purple')
    })
    cursorout()
})

web.addEventListener('mouseover', cursorin)
web.addEventListener('mouseout', cursorout)
web.addEventListener('click', ()=>{
    h2w.forEach((v,i)=>{
        h2w[i].classList.toggle('activo')
        if(h2w[i].classList.contains('activo')){web.classList.add('opacity')}
        else{web.classList.remove('opacity')}
    })
    ven_web.classList.add('activo')
    ventana.classList.add('activo')
    burguer.classList.add('back')
    equis.forEach((v,i)=>{
        equis[i].addEventListener('mouseover', cursorintres)
        equis[i].addEventListener('mouseout', cursorouttres)
    })
})

grafico.addEventListener('mouseover', cursorin)
grafico.addEventListener('mouseout', cursorout)
grafico.addEventListener('click', ()=>{
    h2g.forEach((v,i)=>{
        h2g[i].classList.toggle('activo')
        if(h2g[i].classList.contains('activo')){grafico.classList.add('opacity')}
        else{grafico.classList.remove('opacity')}
    })
    ven_grafico.classList.add('activo')
    ventana.classList.add('activo')
    burguer.classList.add('back')
    equis.forEach((v,i)=>{
        equis[i].addEventListener('mouseover', cursorintres)
        equis[i].addEventListener('mouseout', cursorouttres)
    })
})


equis.forEach((v,i)=>{
    equis[i].addEventListener('click',()=>{
        ventana.classList.remove('activo')
        ven_web.classList.remove('activo')
        web.classList.remove('opacity')
        h2w.forEach((v,j)=>{
            h2w[j].classList.remove('activo')
        })
        ven_grafico.classList.remove('activo')
        grafico.classList.remove('opacity')
        h2g.forEach((v,j)=>{
            h2g[j].classList.remove('activo')
        })
        burguer.classList.remove('back')
    })
})
    
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
                header.classList.add('esconder')}
            else { header.classList.remove('esconder') }

            if( ahora <= 0 ){ antes = 0}
            else{ antes = ahora}

            console.log(antes) 
            console.log(ahora) 
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


efectoScroll(hello, 1.3)
efectoScroll(grafico, 1.2)
efectoScroll(web, 1.2)
efectoScroll(h4, 1.2)
efectoScrollPrincipal(nombre, 10)


info.forEach((v,i)=>{
    efectoScroll(info[i], 1.3)
})

skillsName.forEach((v,i)=>{
    efectoScroll(skillsName[i], 1.2)
})
skillsTitle.forEach((v,i)=>{
    efectoScroll(skillsTitle[i], 1.3)
})

efectoScrollColor(me, 1.5, 'orange')
efectoScrollColor(skills, 1.5, 'turquesa')
efectoScrollColor(muestrario, 1.7, 'gris')
