var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡El aprendizaje constante impulsa nuevos comienzos!')
    .pauseFor(2500)
    //Numero de caracteres que se van a borrar
    .deleteChars(25)
    .typeString('<strong> abre puertas al éxito!</strong>')
    .pauseFor(2500)
    .start();