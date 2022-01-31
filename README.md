# Food-Obsession e-commerce

Proyecto final del curso de Reacts JS - Gerardo Gimenez Ponce

https://gergimenezp.github.io/food-obsession/

## Enfoque

Me basé en el catálogo de productos de una empresa de catering cuyo sitio web alguna vez desarrollé en html. Desarrollé una tienda virtual usando React.
El sitio en cuestión no tiene un e-commerce sino que muestra catálogos de productos y listas de precios y las órdenes se envían mediante un formulario de consulta. La idea es poder automatizar el sistema de ventas online.

### Detalles de navegabilidad

En la aplicación desarrollada el usuario puede navegar por las categorías de artículos, agregarlos a su carrito de compra, editar los ítems agregados al carrito, eliminarlos.

El manejo del carro de compra se realiza a través de un context de forma tal de evitar un nesting excesivo y poder manejar de forma simple y práctica la compra del cliente.

### Dependencias extra

Para dar estilos decidí no incluir otras dependencias y no usar librerías, sino utilizar hojas de estilo propias. El diseño es simple pero respeta el diseño original de la empresa de catering.

Utilizo firebase para acceder al catálogo de los productos y manejar órdenes y stocks.

A la hora de validar el formulario de compra utilizo un hook propio para el manejo del formulario. Como las validaciones necesarias no son muchas, evito de este modo incorporar una nueva dependencia para validar los campos del formulario de compra.

### Proceso de compra

A continuación se muestra un proceso de compra. El happy path, lleval usuario a seleccionar los objetos deseados, completar sus datos y finalizar la compra.

![app-purchase-happy-path](https://github.com/gergimenezp/food-obsession/blob/main/src/assets/img/happy-path.gif)
