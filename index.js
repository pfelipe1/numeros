function mostrarNumeros(){

    let numero = 1

    while(numero <= 500){
        div_numbers.innerHTML = `
         <spam> ${numero} </spam> <br>
         `

         numero += 1;
    }
}