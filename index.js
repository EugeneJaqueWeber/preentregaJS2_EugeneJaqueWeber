// array con 3 objetos de opcion para poder elegir y finalmente sumar el precio final de un "viaje"

const lugaresAViajar = [

    { pais: "argentina", ciudad: "buenos aires", precio: 800},
    { pais: "mexico", ciudad: "ciudad de mexico", precio: 650 },
    { pais: "colombia", ciudad: "medellin", precio: 700 },

]

// 1 - pide datos acerca de lo que el usuario busca, los datos buscados seran registrados y buscadas entre las opciones 

let lugarElegidoPorElUsuario = prompt ( " elija un destino para viajar " )


const buscandoDestino = lugaresAViajar.find ( destino => destino.pais === lugarElegidoPorElUsuario )
let destinoPrecio = buscandoDestino.precio

console.log ("unico destino encontrado en " ,lugarElegidoPorElUsuario ,": " + buscandoDestino.ciudad)
console.log ("el precio del viaje: " + destinoPrecio,"USD")


const hoteles = [

    { hotel: "5 estrellas", precio: 70  },
    { hotel: "4 estrellas", precio: 50  },
    { hotel: "3 estrellas", precio: 45  },

]


// 2 - pide datos acerca de lo que el usuario busca, las siguientes opciones se sumaran y daran un valor que se sumara con el lugar elegido a viajar por el usuario

let hotelElegidoPorElUsuario = prompt ( " elija la valoracion de estrellas de hotel en la que quiera quedarse en su visita a " + buscandoDestino.ciudad )

const eleccionDeHotel = hoteles.find ( direccion => direccion.hotel === hotelElegidoPorElUsuario )

let precioHotel = eleccionDeHotel.precio

const deseaSeguirConElHotelElegido = prompt ( " decide si deseas seguir con el hotel elegido: USD" + precioHotel )


function cantidadDeDiasPrecioTotal ( eleccionDeValoracionDeEstrellas, cantidadDediasTotales ) {

    precioDelOspedaje = eleccionDeValoracionDeEstrellas * cantidadDediasTotales

    return precioDelOspedaje

}





// aqui el usuario tiene opcion de elejir una valoracion diferente si lo desea

if ( deseaSeguirConElHotelElegido === "si" ) {

    let cantidadDeDIas = prompt ( " elija la cantida de dias " )

    cantidadDeDiasPrecioTotal ( precioHotel, cantidadDeDIas )

    console.log ( " precio del ospedaje " + precioDelOspedaje, "USD" )


} else {

    hotelElegidoPorElUsuario = prompt ( " elija la valoracion de estrellas de hotel en la que quiera quedarse en su visita a " + buscandoDestino.ciudad )

    const eleccionDeHotel = hoteles.find ( direccion => direccion.hotel === hotelElegidoPorElUsuario )

    let precioHotel = eleccionDeHotel.precio

    let cantidadDeDIas = prompt ( " elija la cantida de dias " )

    cantidadDeDiasPrecioTotal ( precioHotel, cantidadDeDIas )

    console.log ( " precio del ospedaje " + precioDelOspedaje, "USD" )

}


// suma de el viaje y el ospedaje 

function sumar ( precioDelViajeElegidoPorElUsuario, precioDelHotelElegidoPorElUsuario ) {

    resultadoFinalDelViaje = precioDelViajeElegidoPorElUsuario + precioDelHotelElegidoPorElUsuario

    return resultadoFinalDelViaje

}

sumar ( destinoPrecio, precioDelOspedaje )


console.log ( " el resultado del viaje es: " + resultadoFinalDelViaje ,"UDS" )
alert ( " el resultado del viaje es: " + resultadoFinalDelViaje ,"USD" )