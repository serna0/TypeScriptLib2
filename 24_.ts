//Funcionamientos de los módulos

/*
<!DOCTYPE html>
<html lang="ES">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Introducción a Webpack</title>
        <link rel="stylesheet" href="">
    </head>
    <body>
        <!-- carga del script -->
        <script type="text/javascript" src="script.js" charset="utf-8"></script>
    </body>
</html>

JS.s
var mensaje = "Hola, qué tal?"
exports.saludo = mensaje

var mensajes = require('./mensajes.js')
document.write(mensajes.saludo)

*/

//browserify

var Persona = function(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    
    var self = this;
    
    return {
        saludar: function() {
            alert("Hola, mi nombre es " + self.nombre);
        },
        presentar: function() {
            alert("Tengo " + self.edad + " años.");
        }
    };
}
    
module.exports = Persona;


/*
    Modulo dos app.main.js
    
    var $ = require('jquery');
    var persona = require('./app.persona');
    
    $('h1').html('Hola Browserify');
    
    var carlos = new persona("Carlos", 30);
    carlos.saludar();
    carlos.presentar();

*/

//Tipos de modulos
//Global

var a = 123;
var b=a; //perimitido

import {a} from "./a";
var b = a; // Permitido, ahora si encontraria el valor


// módulo sin emplear declare
declare module "a" {
    // Contenido de la clase
    export var a:number; /*sample*/
}
declare var hello = 'Hello world';

import var a = require("./a");
var b = a;
