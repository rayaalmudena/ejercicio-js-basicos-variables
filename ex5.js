/**
 * CUAN VIEJO/A VOY A SER?
 *
 * Completa el script para que, estableciendo tu año de nacimiento, el programa muestre por pantalla el próximo mensaje, en función de tu edad de nacimiento. Es decir, si yo he nacido en 1982. el mensaje debería ser el siguiente:
 * 
 * "En el año {futureYear} yo voy a tener 68 o 69 años"
 * 
 * 
 */

 let futureYear = 2050;
 let birthYear = 1982;
 let años = futureYear - birthYear;


 /**
  * Notar que al usar el oeprador '+' para dos valores numero + string, lo que ocurre es que "transforma" el número en un string
  * 
  * Notar también que usamos los paréntesis, al igual que en matemáticas, para priorizar que la expresión evalue primero (años + 1); y luego, concatene el resultado al resto del string.
  * 
  */
 let message = "En el año " + futureYear + " yo voy a tener " + años +  " años o " +  (años + 1) + " años.";

 console.log(message);
 

