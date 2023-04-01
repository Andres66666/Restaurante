
/*esto hace que inicie el mapa google maps */ 
   var map;
   /*Se inicia una función llamada iniMap*/
   function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -16.5, lng: -68.15 }, /*Coordenadas de La Paz-Bolivia*/
      zoom: 8,
      });
        // Array of locations
      var locations = [
      {lat: -15.14644690326125, lng: -67.0336496164667, name: "Yucumo"},
      {lat: -19.563666990414358, lng: -65.77039264363448, name: "Potosi"},
      {lat: -14.839855542085246, lng: -64.90366341496518, name: "Trinidad"},
      {lat: -17.861068945739532, lng:  -63.24412103933308, name: "Santa Cruz"}
      ];

      /*esnta parte estamos creando los botones del mapa  */
      class CenterControl {
        map_;
        center_;
        constructor(controlDiv, map, center) {
            this.map_ = map;
            // Establecer la propiedad del centro en la construcción
            this.center_ = new google.maps.LatLng(center);
            controlDiv.style.clear = "both";

              const MiubicacionUI = document.createElement("button");
              MiubicacionUI.id = "MiubicacionUI";
              MiubicacionUI.title = "Marcar Mi Ubicacion";
              controlDiv.appendChild(MiubicacionUI);

              const Miubicaciontex = document.createElement("div");
              Miubicaciontex.id = "Miubicaciontex";
              Miubicaciontex.innerHTML = "Mi ubicaion📌";
              MiubicacionUI.appendChild(Miubicaciontex);

              MiubicacionUI.addEventListener("click", () => {
                obtener();
              });
              // creacion del boton mapa 
              // Establecer CSS para el borde de control
              const yucumoUI = document.createElement("button");
              yucumoUI.id = "yucumoUI";
              yucumoUI.title = "Marcar ruta yucumo";
              controlDiv.appendChild(yucumoUI);

              // Establecer CSS para el interior del control
              const yucumotex = document.createElement("div");
              yucumotex.id = "yucumotex";
              yucumotex.innerHTML = "yucumo🥓";
              yucumoUI.appendChild(yucumotex);

              yucumoUI.addEventListener("click", () => {
                calcularRutaYucumo();// estamos llamando a la funcion 
              });

              const TrinidadUI = document.createElement("button");
              TrinidadUI.id = "TrinidadUI";
              TrinidadUI.title = "Marcar ruta Trinidad";
              controlDiv.appendChild(TrinidadUI);

              // Establecer CSS para el interior del control
              const Trinidadtex = document.createElement("div");
              Trinidadtex.id = "Trinidadtex";
              Trinidadtex.innerHTML = "Trinidad🍗";
              TrinidadUI.appendChild(Trinidadtex);

                   // Configure el detector de eventos de clic para 'Mapa central': establezca el centro de
                   // el mapa
              TrinidadUI.addEventListener("click", () => {
              calcularRutaTrinidad();// estamos llamando a la funcion 
              });

              const SantaCruzUI = document.createElement("button");
              SantaCruzUI.id = "SantaCruzUI";
              SantaCruzUI.title = "Marcar Sant Cruz";
              controlDiv.appendChild(SantaCruzUI);

              const SantaCruztex = document.createElement("div");
              SantaCruztex.id = "SantaCruztex";
              SantaCruztex.innerHTML = "Sant Cruz🍖";
              SantaCruzUI.appendChild(SantaCruztex);

              SantaCruzUI.addEventListener("click", () => {
                calcularRutaSantaCruz();
              });

              const PotosiUI = document.createElement("button");
              PotosiUI.id = "PotosiUI";
              PotosiUI.title = "Marcar Potosi";
              controlDiv.appendChild(PotosiUI);

              const Potositex = document.createElement("div");
              Potositex.id = "Potositex";
              Potositex.innerHTML = "Potosi 🥩";
              PotosiUI.appendChild(Potositex);

              PotosiUI.addEventListener("click", () => {
                calcularRutaPotosi();
              });

          }
      }

// Recorra la matriz de ubicaciones y agregue un marcador para cada ubicación
      for (var i = 0; i < locations.length; i++) {
          var marker = new google.maps.Marker({
          position: {lat: locations[i].lat, lng: locations[i].lng},
          map: map,
          title: locations[i].name
          });
      }
   // Crea el DIV para mantener el control y llama al CenterControl()
   // constructor pasando este DIV.
  const centerControlDiv = document.createElement("div");
  const control = new CenterControl(centerControlDiv, map);

  // @ts-ignore    // @ts-ignore
  centerControlDiv.index = 1; /*esto nos muestra el los botones por dentro de l a imagen*/
  centerControlDiv.style.paddingTop = "10px";
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
}
window.initMap = initMap;

   /* esto ya es geo localizacion */
    function iniciar(){
      var boton=document.getElementById('obtener');
      boton.addEventListener('click', obtener, false);
}
function obtener(){
      navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores);
}
function mostrar(posicion){
      var ubicacion=document.getElementById('localizacion');
      var datos='';
      datos+='Latitud: '+posicion.coords.latitude+'<br>';
      datos+='Longitud: '+posicion.coords.longitude+'<br>';
      ubicacion.innerHTML=datos;
      var latLng = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude);

  // Crear un marcador en el mapa
      const image ="http://maps.google.com/mapfiles/kml/paddle/grn-stars.png";      

      var marker = new google.maps.Marker({
         position: latLng,
         map: map,
         title: "Mi ubicación",
         icon: image,
      });
  // Centrar el mapa en la ubicación
      map.setCenter(latLng);
}

// esta funcion nos verifica si el mapa se cargo correctamente sino se cargo el mapa nos mostrara el mesaje de error 
function gestionarErrores(error){
      alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+'a internet y habilite la opción permitir compartir ubicación física');
}

window.addEventListener('load', iniciar, false); 

/* funciones que realizan los marcadores del mapa */ 
function calcularRutaPotosi() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var origen = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var destino = new google.maps.LatLng(-19.563666990414358, -65.77039264363448);
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsDisplay.setOptions({
      suppressMarkers: true 
    });
    var request = {
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING 
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
  });
}
function calcularRutaYucumo() {
   // Get the user's current location
   navigator.geolocation.getCurrentPosition(function(position) {
     // Create a LatLng object with the user's location
     var origen = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     // Create a LatLng object with the destination location
     var destino = new google.maps.LatLng(-15.14644690326125, -67.0336496164667);
     // Create a DirectionsService object to communicate with the Directions API
     var directionsService = new google.maps.DirectionsService();
     // Create a DirectionsRenderer object to display the route on the map
     var directionsDisplay = new google.maps.DirectionsRenderer();
     // Bind the DirectionsRenderer object to the map
     directionsDisplay.setMap(map);
     // Set the options for the DirectionsRenderer object
     directionsDisplay.setOptions({
       suppressMarkers: true // hide the default markers for the start and end points
     });
     // Create a DirectionsRequest object with the origin and destination LatLng objects
     var request = {
       origin: origen,
       destination: destino,
       travelMode: google.maps.TravelMode.DRIVING // set the mode of transportation
     };
     // Call the DirectionsService to get the route
     directionsService.route(request, function(result, status) {
       if (status == google.maps.DirectionsStatus.OK) {
         // If the request was successful, display the route on the map
         directionsDisplay.setDirections(result);
       }
     });
   });
 }
 function calcularRutaPotosi() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var origen = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var destino = new google.maps.LatLng(-19.563666990414358, -65.77039264363448);
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsDisplay.setOptions({
      suppressMarkers: true 
    });
    var request = {
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING 
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
  });
}

function calcularRutaTrinidad() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var origen = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var destino = new google.maps.LatLng(-14.839855542085246,-64.90366341496518);
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsDisplay.setOptions({
      suppressMarkers: true 
    });
    var request = {
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING 
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
  });
}

function calcularRutaSantaCruz() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var origen = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var destino = new google.maps.LatLng(-17.861068945739532, -63.24412103933308);
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsDisplay.setOptions({
      suppressMarkers: true 
    });
    var request = {
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING 
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
  });
}


/*calcular las distancias */


    function distancias (){
      // JSON con la información de las ciudades
var jsonString =
'{"Santa Cruz":{"Position":{"Longitude":-63.24412103933308,"Latitude":-17.861068945739532}},"Yucumo":{"Position":{"Longitude":-67.0336496164667,"Latitude":-15.14644690326125}},"Trinidad":{"Position":{"Longitude":-64.90366341496518,"Latitude":-14.839855542085246}},"Potosi":{"Position":{"Longitude":-65.77039264363448,"Latitude":-19.563666990414358}}}';
var myData = JSON.parse(jsonString);
function error(msg) {
alert("error" + msg);
}
// Obtenemos la posición del usuario y lo manejamos con la función initialize
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(initialize, error, {
maximumAge: 60000,
timeout: 4000
});
} else {
error('Actualiza el navegador web para usar el API de localización');
}
function initialize(position) {
// Inicializamos las opciones del mapa
var mapOptions = {
zoom: 10,
// Establecemos la posición actual como centro
center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
// Este es el estilo proporcionado por Snazzy Maps.
styles: [{
"featureType": "water",
"elementType": "geometry",
"stylers": [{
"color": "#000000"
}, {
"lightness": 17
}]
}, {
"featureType": "landscape",
"elementType": "geometry",
"stylers": [{
"color": "#000000"
}, {
"lightness": 20
}]
}, {
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [{
"color": "#000000"
}, {
"lightness": 17
}]
}, {
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [{
"color": "#000000"
}, {
"lightness": 29
}, {
"weight": 0.2
}]
}, {
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [{
"color": "#000000"
}, {
"lightness": 18
}]
}, {
"featureType": "road.local",
"elementType": "geometry",
"stylers": [{
"color": "#000000"
}, {
"lightness": 16
}]
}, {
"featureType": "poi",
"elementType": "geometry",
"stylers": [{
"color": "#000000"
}, {
"lightness": 21
}]
}, {
"elementType": "labels.text.stroke",
"stylers": [{
"visibility": "on"
}, {
"color": "#000000"
}, {
"lightness": 16
}]
}, {
"elementType": "labels.text.fill",
"stylers": [{
"saturation": 36
}, {
"color": "#000000"
}, {
"lightness": 40
}]
}, {
"elementType": "labels.icon",
"stylers": [{
"visibility": "off"
}]
}, {
"featureType": "transit",
"elementType": "geometry",
"stylers": [{
"color": "#000000"
}, {
"lightness": 19
}]
}, {
"featureType": "administrative",
"elementType": "geometry.fill",
"stylers": [{
"color": "#000000"
}, {
"lightness": 20
}]
}, {
"featureType": "administrative",
"elementType": "geometry.stroke",
"stylers": [{
"color": "#000000"
}, {
"lightness": 17
}, {
"weight": 1.2
}]
}],
disableDefaultUI: true,
};
// Cargamos el mapa en el contenedor html creado.
map = new google.maps.Map(document.getElementById('map-canvas'),
mapOptions);
// Añadimos un marcador a la posición actual
var marker = new google.maps.Marker({
position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
map: map,
title: "Usted está aquí."
});
var distanceObj = [],
i = 0;
var uniLPl =-16.50321;
var uniLPla =-68.12003;

// Calculamos la distancia entre los puntos
$.each(myData, function(a, b) {
distanceObj[i] = {
distance: coordsDistance(uniLPl, uniLPla, b.Position.Longitude, b.Position.Latitude),
location: b,
city: a
};
++i;
});
// Ordenamos los elementos del array por el valor distancia obtenido
distanceObj.sort(function(a, b) {
return parseInt(a.distance) - parseInt(b.distance)
});
// Pintamos cada uno de los lugares
$.each(distanceObj, function(a, b) {
$('#markers ul').append('<li>' + b.city + ': ' + b.distance + 'KM </li>');
var marker = new google.maps.Marker({
position: new google.maps.LatLng(b.location.Position.Longitude, b.location.Position.Latitude),
map: map,
});
marker['infowindow'] = new google.maps.InfoWindow({
content: b.city,
maxWidth: 500,
width: 500
});
google.maps.event.addListener(marker, 'mouseover', function() {
marker['infowindow'].open(map, marker);
});
google.maps.event.addListener(marker, 'mouseout', function() {
marker['infowindow'].close();
});
});
}
// Función que calcula la distancia entre dos coordenadas devuelta en KM
function coordsDistance(meineLongitude, meineLatitude, long1, lat1) {
erdRadius = 6371;
meineLongitude = meineLongitude * (Math.PI / 180);
meineLatitude = meineLatitude * (Math.PI / 180);
long1 = long1 * (Math.PI / 180);
lat1 = lat1 * (Math.PI / 180);
x0 = meineLongitude * erdRadius * Math.cos(meineLatitude);
y0 = meineLatitude * erdRadius;
x1 = long1 * erdRadius * Math.cos(lat1);
y1 = lat1 * erdRadius;
dx = x0 - x1;
dy = y0 - y1;
d = Math.sqrt((dx * dx) + (dy * dy));
return Math.round(d);
};



    }
