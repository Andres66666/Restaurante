
/* relojos minuteri segundero esto la parte del canvas 6.  Canvas */
function clock(){
    var now = new Date();
    var ctx = document.getElementById('canvas').getContext('2d');
        ctx.save();
        ctx.clearRect(0,0,150,150);
        ctx.translate(75,75); //cambiamos la ubicación de las cordenadas 0,0
        ctx.scale(0.4,0.4);
        ctx.rotate(-Math.PI/2); 
        ctx.strokeStyle = "#F7FE2E"; // propiedad para color 
        ctx.fillStyle = "#01DFD7"; // color de degradado o forma de estilo 
        ctx.lineWidth = 8; // establece el grosor de la s lineas 
        ctx.lineCap = "#01DFD7"; //se utiliza para dobujar los puntos 

             // marcar horas
            ctx.save(); //método save restore para apilado
            for (var i=0;i<12;i++){
                ctx.beginPath();   //es un metodo le decimos al programa que vamos a empezar un nuevo trazado vuelta 
                ctx.rotate(Math.PI/6); //rotación respecto al centro
                ctx.moveTo(100,0);  //comienzo de linea
                ctx.lineTo(120,0); //final de linea
                ctx.stroke();
            }
            ctx.restore();
                // marcar minutos, lo mismo que para marcar horas
            ctx.save();
            ctx.lineWidth = 5;
            for (i=0;i<60;i++){
                if (i%5!=0) {
                    ctx.beginPath(); // metodo 
                    ctx.moveTo(117,0);// metodo 
                    ctx.lineTo(120,0);// metodo 
                    ctx.stroke();// metodo  define el trozo actual osea la vuelta 
                }
                ctx.rotate(Math.PI/30);// metodo 
            }
            ctx.restore();

              var sec = now.getSeconds(); //almacenamos segundos
              var min = now.getMinutes(); //almacenamos minutos
              var hr  = now.getHours();  //almacenamos horas
              hr = hr>=12 ? hr-12 : hr;  // almacenamos un valor de horas, si es mayor que 12, le restamos 12

            ctx.fillStyle = "#01DFD7";
// indicador de hora
            ctx.save(); 
            ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec ) //indicará la hora con la rotación y un cálculo simple
            ctx.lineWidth = 14;
            ctx.beginPath();
            ctx.moveTo(-20,0);
            ctx.lineTo(80,0);
            ctx.stroke();
            ctx.restore();

// minutero , procedimiento parecido al indicador de horas
            ctx.save();
            ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec ) 
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(-28,0);
            ctx.lineTo(112,0);
            ctx.stroke();
            ctx.restore();

// segundero 
            ctx.save();
            ctx.rotate(sec * Math.PI/30);
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(-30,0);
            ctx.lineTo(83,0);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0,0,10,0,Math.PI*2,true); //usamos arc, para dibujar un circulo al centro del reloj
            ctx.fill();
            ctx.beginPath();
            ctx.arc(95,0,10,0,Math.PI*2,true); //arc para dibujar un circulo en la punta del segundero
            ctx.stroke();
            ctx.fillStyle = "rgba(0,0,0,0)";
            ctx.arc(0,0,3,0,Math.PI*2,true);
            ctx.fill();
            ctx.restore();

            ctx.beginPath();
            ctx.lineWidth = 14;
            ctx.strokeStyle = 'red';
            ctx.arc(0,0,142,0,Math.PI*2,true);
            ctx.stroke();

            ctx.restore();

        window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock); //le avisamos al programa que realizaremos una animación usando clock, como referencia
