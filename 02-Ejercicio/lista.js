let nombre = 'Alejandro'
let edad = 18
let Desarrollador = false
let birthday = new Date('December 30 2003')

const libroFavorito = {
    Titulo: 'Oculto en la sangre: Un thriller frenético e implacable ',
    Autor: "Marcos Nieto Pallarés ",
    Fecha: '16 Septiembre 2020 ',
    Url: 'https://www.amazon.com/Marcos-Nieto-Pallarés-ebook/dp/B08JCVJFTT/ref=sr_1_1_sspa '
}

const listaEjercicio = ['Tu nombre: ' + nombre, 'Tu edad: ' + edad, '¿Eres desarrollador? ' + Desarrollador, 'Tu fecha de nacimiento: ' + birthday, libroFavorito]

console.log(listaEjercicio)