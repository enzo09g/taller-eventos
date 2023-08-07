document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('div').addEventListener('click', () => {
        alert('Hola, soy el Div')
    })

    document.getElementById('boton').addEventListener('click', ()=>{
        alert('Hola!');
        event.stopPropagation();
    })
})
