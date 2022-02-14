# Food-Obsession e-commerce

Proyecto final del curso de Reacts JS - Gerardo Gimenez Ponce

https://gergimenezp.github.io/food-obsession/

## Enfoque

Me basé en el catálogo de productos de una empresa de catering cuyo sitio web alguna vez desarrollé en html. Desarrollé una tienda virtual usando React.
El sitio en cuestión no tiene un e-commerce sino que muestra catálogos de productos y listas de precios y las órdenes se envían mediante un formulario de consulta. La idea es poder automatizar el sistema de ventas online.

### Dependencias extra

Para dar estilos decidí no incluir otras dependencias y no usar librerías, sino utilizar hojas de estilo propias. El diseño es simple pero respeta el diseño original de la empresa de catering.

### Detalles de navegabilidad

En la home page se ofrece un detalle del producto insignia y estrella de la empresa, las empanadas. La marca "got empanadas?" es una marca comercial registrada por food-obsession y es por eso que se destaca en el inicio.

En la aplicación desarrollada el usuario puede navegar por las categorías de artículos desde el menú de navegación. Cada una de las categorías agrupa productos que el usuario puede navearen detalle, agregarlos a su carrito de compra, editar los ítems agregados al carrito, eliminarlos y luego finalizar la compra.

### Item - ItemDetail

Cada producto mostrado en las categorías ofrece la posibilidad de ver el detalle del producto, con una descripción más profunda y seleccionar la cantidad de productos del tipo que se quieren agregar al carrito.

Cada uno de esos productos es accesible navegando normalmente pero también al ingresar directamente la ruta del producto en la barra de navegación. Gracias al useParams() se realiza una solicitud a la base de datos del artículo especificado en el ID.

### Cart

El Wwdget del Cart sólo aparece visible si hay elementos en el carrito. En ese caso linkea al carrito de compras en el cual se pueden ven los ítems agregados, el precio individual de los mismos, y el monto total de los ítems agregados. Asimismo se brinda la posibilidad de vaciarlo o de eliminar u editar cada item en particular.

El cart es accesible directamente desde la barra de navegación al tipear /cart. Sin embargo si el carrito está vacío se utiliza renderizado condicional para invitar a realizar una compra.

### Context

El manejo del carro de compra se realiza a través de un context de forma tal de evitar un nesting excesivo y poder manejar de forma simple y práctica la compra del cliente.

Las funcionalidades para agregar elementos al carrito, eliminarlos, vaciar el carrito, controlar los elementos agregados y tods las otras funciones se exportan desde el contexto y son tomadas por los componentes encargados de esos procesos.

### Firebase

Utilizo Firebase-Firestore para acceder al catálogo de los productos y manejar órdenes y stocks. Los objetos están almacenados ahí con propiedades como nombre, stock, Image url, description.

Las órdenes de los clientes también son registradas en Firebase, al hacerlo se registra la hora de la orden, el usario que realizó la orden con sus datos de contacto, los elementos que compró y el monto de la compra.

### Form

A la hora de realizar el check out de la compra solicito los datos al usuario para cargar las orden. La validación de ese formulario se realiza mediante un hook propio para el manejo del formulario. Como las validaciones necesarias no son muchas, evito de este modo incorporar una nueva dependencia para validar los campos del formulario de compra. Con expresiones regulares valido el contenido y con renderizado condicional muestro ausencia de campos o errores en los mismos.

El Formulario de check out es accesible directamente desde la barra de navegación al tipear /form. Sin embargo si el cliente no ha clieckeado todavía en "finalizar compra" se utiliza renderizado condicional para invitar a realizar una compra antes de proceder al check out.

### Proceso de compra

A continuación se muestra un proceso de compra. El happy path, lleval usuario a seleccionar los objetos deseados, completar sus datos y finalizar la compra.

![app-purchase-happy-path](https://github.com/gergimenezp/food-obsession/blob/main/src/assets/img/happy-path.gif)
