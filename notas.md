# Algunas notas de SASS

Tengo que ir anotando todo para poder ordenar la información y comenzar a aprender.
Proyectos reales al mundo real.

## Variables en CSS

Lo primero que hay que hacer es definir el nombre de la variable despues del símbolos "$".
"$nombre-variable: CARACTERISTICA CSS"

Como se muestra a continuación:

$green: #0eb582;
$light-green: #f0fdfa;
$light-color: #777;
$light-white: #eee;
$black: #444;
$white: #fff;
$border: 0.1rem solid $green;
$box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

Para llamar a las variables, se colocan. En lugar de colocar cada características llamamos a la variable.

box-shadow: $box-shadow;

## Sobre los Mixin
