/* codigo formulario validado 3*JQuery*/
'use strict'  
window.addEventListener('load',function(){  
    console.log("DOM cargado");  
       var formulario=document.querySelector("#formulario");  
       var box_dashed=document.querySelector(".dashed");  
       box_dashed.style.display="none";  
       formulario.addEventListener('submit',function(){  
        console.log("Evento submit capturado"); 

            var nombre=document.querySelector('#nombre').value; 
            var apellidos=document.querySelector('#apellidos').value;  
            var edad=parseInt(document.querySelector('#edad').value); 
            var fecha=document.querySelector('#fecha').value; 
            var hora=document.querySelector('#hora').value; 
            var mesa=document.querySelector('#mesa').value; 
            var direccion=document.querySelector('#direccion').value; 
            var correo=document.querySelector('#correo').value; 
            var numcelular=document.querySelector('#numcelular').value; 

            var error_nombre=document.querySelector('#error_nombre');
            var error_apellidos=document.querySelector('#error_apellidos');
            var error_edad=document.querySelector('#error_edad');             
            var error_fecha=document.querySelector('#error_fecha');
            var error_hora=document.querySelector('#error_hora');
            var error_mesa=document.querySelector('#error_mesa');
            var error_direccion=document.querySelector('#error_direccion');
            var error_correo=document.querySelector('#error_correo');
            var error_numcelular=document.querySelector('#error_numcelular');

                    if(nombre.trim()==null || nombre.trim().length==0){  
                        alert("El nombre no es válido");  
                            error_nombre.innerHTML="<span id='error_nombre'> Error⚠</span>";  
                            error_nombre.style.color="red";  
                            return false;  
                    }else{  
                        error_nombre.innerHTML="<span id='error_nombre'></span>";  
                    }  
                    if(apellidos.trim()==null || apellidos.trim().length==0){  
                        alert("Los apellidos no son válidos");  
                            error_apellidos.innerHTML="<span id='error_apellidos'> Error⚠</span>";  
                            error_apellidos.style.color="red";  
                            return false;  
                    }else{  
                        error_apellidos.innerHTML="<span id='error_apellidos'></span>";  
                    }  

                    if(edad<=18 || edad>99 || isNaN(edad)){  
                        alert("La edad no es válida");  
                        error_edad.innerHTML="<span id='error_edad'> Error⚠</span>";
                        error_edad.style.color="red";  
                        return false;  
                    }else{  
                        error_edad.innerHTML="<span id='error_edad'></span>";  
                    }  
                    if(fecha.trim() === ''){  
                        alert("fecha no es válida");  
                        error_fecha.innerHTML="<span id='error_fecha'> Error⚠</span>";
                        error_fecha.style.color="red";  
                        return false;  
                    }else{  
                        error_fecha.innerHTML="<span id='error_fecha'></span>";  
                    }  
                    if(hora.trim() === ''){  
                        alert("La hora no es válida");  
                        error_hora.innerHTML="<span id='error_hora'> Error⚠</span>";
                        error_hora.style.color="red";  
                        return false;  
                    }else{  
                        error_hora.innerHTML="<span id='error_hora'></span>";  
                    }  
                    if(mesa.trim() === 'Mesa0'){  
                        alert("Seleccione una mesa");  
                        error_mesa.innerHTML="<span id='error_mesa'> Error⚠</span>";
                        error_mesa.style.color="red";  
                        return false;  
                    }else{  
                        error_mesa.innerHTML="<span id='error_mesa'></span>";  
                    } 
                    if(direccion.trim() === ''){  
                        alert("coloca una direccion");   
                        error_direccion.innerHTML="<span id='error_direccion'> Error⚠</span>";
                        error_direccion.style.color="red";  
                        return false;  
                    }else{  
                        error_direccion.innerHTML="<span id='error_direccion'></span>";  
                    }

                    var correoRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if (!correoRegex.test(correo)) {
                        alert("El correo electrónico no es válido.");
                        error_correo.innerHTML="<span id='error_correo'> Error⚠</span>";
                        error_correo.style.color="red";  
                        return false;
                    } else {
                        error_correo.innerHTML="<span id='error_correo'></span>";  
                    }

                    if (numcelular.trim() === '') {
                        alert("El campo de número de celular no puede estar vacío.");
                        error_numcelular.innerHTML="<span id='error_numcelular'> Error⚠</span>";
                        error_numcelular.style.color="red";  
                        return false;  
                    } else if (numcelular.length !== 8 || isNaN(numcelular)) {
                        alert("El número de celular no es válido. Debe tener 8 dígitos.");
                        error_numcelular.innerHTML="<span id='error_numcelular'>Error⚠</span>";
                        error_numcelular.style.color= "red";
                        return false;
                    } else {
                        error_numcelular.innerHTML="<span id='error_numcelular'></span>";
                    }
                    
                    box_dashed.style.display="block";  
                    console.log(nombre,apellidos,edad,fecha,hora,mesa,direccion,correo,numcelular);  
                    var p_nombre = document.querySelector('#p_nombre span');  
                    var p_apellidos = document.querySelector('#p_apellidos span');  
                    var p_edad = document.querySelector('#p_edad span'); 
                    var p_fecha = document.querySelector('#p_fecha span');
                    var p_hora =document.querySelector('#p_hora span');
                    var p_mesa =document.querySelector('#p_mesa span');
                    var p_direccion =document.querySelector('#p_direccion span');
                    var p_correo =document.querySelector('#p_correo span');
                    var p_numcelular =document.querySelector('#p_numcelular span');
                    

                    p_nombre.innerHTML=nombre;  
                    p_apellidos.innerHTML=apellidos;  
                    p_edad.innerHTML=edad;
                    p_fecha.innerHTML=fecha;
                    p_hora.innerHTML=hora;
                    p_mesa.innerHTML=mesa;
                    p_direccion.innerHTML=direccion;
                    p_correo.innerHTML=correo;
                    p_numcelular.innerHTML=numcelular;
                    
        });  
    });  


