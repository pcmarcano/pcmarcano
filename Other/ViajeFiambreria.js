/*
Viaje a la fiambrería
Si quisiera ir a comprar 150 gramos de queso a mi fiambrería de confianza,
tendría que tener en cuenta las siguientes variables —no pensemos en ellas solo
como factores externos, sino como valores de lo cotidiano a tener en cuenta—.
Primero tenemos que ver la temperatura en el exterior, eso nos va a determinar
la ropa.
1. Temperatura (número)
También deberíamos prestar atención a si llueve o no llueve.
2. ¿Está lloviendo? (booleano)
Cuando salga de mi casa, si vivo en un edificio en algún piso, tendré que ver en
qué piso se encuentra el ascensor. Si vivo en una casa, esta variable no es
necesaria.
3. Piso del ascensor (número)
Pensándolo bien, antes de salir a la calle, deberíamos saber si la fiambrería va a
estar abierta.
4. Hora actual (número)

5. Hora de apertura de la fiambrería (número)
6. Hora de cierre de la fiambrería (número)
Ahora sí, teniendo todo esto en cuenta, voy hasta la fiambrería. Mónica —mi
fiambrera de confianza— sabe que siempre llevo 100 gr. de Queso Dambo
—aunque, entre nosotros, sabemos que nunca es mucho queso—.
7. Cantidad de queso (número)
Deberemos pagarle. Sin embargo, ¡nos olvidamos la plata antes de salir! Por
suerte, tenemos confianza y nos fía.
8. Deuda con Mónica (número)
Ya podemos volver a casa a disfrutar de nuestro tentempié.
Ahora ustedes
Ahora les toca pensar a ustedes. Piensen dos situaciones de la vida cotidiana e
identifiquen las variables que conllevan.
Luego de pensar todas esas variables con sus respectivos valores, deberán
escribirlas en un archivo .js que esté correctamente guardado en la carpeta de
trabajo que hayan armado —si no lo hicieron, deberán armar una—. Piensen
dentro de estas variables qué valores pueden ingresar ustedes en el archivo
directamente y cuáles podría ingresar un usuario. Por ejemplo, en el caso de un
verificador de precios donde queremos compararlo con algún valor específico,
querremos guardar ese valor en nuestro archivo. Los precios, en cambio, sería
ideal que los ingrese el usuario —utilicen prompt para cumplir con esta
consigna—.
Desafío extra:
Supongamos que estás acomodando tu casa y guardaste las remeras en el cajón
de los pantalones ¡Un horror! ¿Cómo haríamos para invertirlos?
Pensá con qué código podrías invertir el contenido de las variables de cajones.
*/

let GramosComprar = 150 ;
let Temperatura = 21 ;
let Lloviendo = 0 ;
let Piso = 0 ;
let HoraActual = 1500 ;
let HoraApertura = 8000 ;
let HoraCierre = 1800 ;
let Fiambrera = "Monica" ;
let Gramos = 100 ;
let TipoQueso = "Dambo" ;
let CantidadQueso = 100 ;




console.log("La diferencia entre ejemplo dos y ejemplo tres es que en el ejemplo dos se imprime una cadena de caracteres y el ejemplo tres se imprime el condenitenido de una variable")


/*
Desafío extra:
Supongamos que estás acomodando tu casa y guardaste las remeras en el cajón
de los pantalones ¡Un horror! ¿Cómo haríamos para invertirlos?
Pensá con qué código podrías invertir el contenido de las variables de cajones.
*/
console.log("")

var cajonremera = "pantalones";
var cajonpantalones = "remera";
var cama = "";
console.log("Cajon Remera: " + cajonremera + " .Cajon Pantalones: " + cajonpantalones);

var cama = cajonremera;
var cajonremera = cajonpantalones;
var cajonpantalones = cama;
console.log("Cajon Remera: " + cajonremera + " .Cajon Pantalones: " + cajonpantalones);

