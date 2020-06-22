var busqueda = "";
var campoBusqueda = document.getElementById("busqueda");
var filtrado;
var canciones;
var top3;
var expresionRegular;

function realizarBusqueda(){
    busqueda = campoBusqueda.value.trim();
    expresionRegular = new RegExp('^'+busqueda+'');
    $(document).ready(function(){
        $.ajax({
            url: "datos.json"
        }).done(function (resultado) {
            //Seleccionamos las canciones
            canciones = resultado.canciones;

            filtrado = canciones.filter(function(x){
                return expresionRegular.test(x.nombre) == true
            })

            //Creamos un string para colocar las canciones en el dom
            var html = ""

            //Recorre el arreglo y concatena el HTML para cada evento
            for(var j = 0; j < filtrado.length; j++){
                html += `
                        <div class="p-2 bd-highlight text-center p-0 my-4 mx-1 border">
                            <img class="img-fluid w-50" src="./imagenes/icon_${filtrado[j].icono}.svg" alt="">
                            <hr class="my-4">
                            <h2>${filtrado[j].nombre}</h2>
                            <audio src="./canciones/${filtrado[j].ruta}" controls></audio>
                        </div>
                        `
            }
        
            //Modifica el DOM agregando el html generado
            document.getElementById("mostrarCanciones").innerHTML = html
        });
    });
}

realizarBusqueda();
campoBusqueda.addEventListener('keyup',realizarBusqueda);
campoBusqueda.addEventListener('keydown',realizarBusqueda);