var masEscuchadas = [];
var canciones;
var top3;

$(document).ready(function(){
    $.ajax({
        url: "datos.json"
      }).done(function (resultado) {
         //Seleccionamos las canciones
         canciones = resultado.canciones;

         //buscamos las que tengan mas reproducciones y las guardamos
        for(var i = 0; i < canciones.length; i++){
            if (canciones[i].reproducciones > 60){
                masEscuchadas.push(canciones[i]);
            }
        }

        //Ordenamos las canciones de mayor a menor escuchadas
        masEscuchadas =masEscuchadas.sort(function(x,y){
            if (x.reproducciones < y.reproducciones){
              return 1;
            }
            return -1;
        });

        //Creamos un string para colocar las canciones en el dom
        var html = ""

        //Recorre el arreglo y concatena el HTML para cada evento
        for(var j = 0; j < masEscuchadas.length; j++){
            html += `
                    <tr>
                    <td>${masEscuchadas[j].nombre}</td>
                    <td><audio src="./canciones/${masEscuchadas[j].ruta}" controls></audio></td>
                    </tr>
                    `
        }
    
        //Modifica el DOM agregando el html generado
        document.getElementById("topCanciones").innerHTML = html
    });
});