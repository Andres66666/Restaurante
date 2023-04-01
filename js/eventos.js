function alertas() {
    document.getElementById("myForm").reset();
}
function alertas(){
    swal({
        title:"¡Esta seguro!",
        text:"Se borrara el pedido",
        icon:"warning",
        buttons:true,
        dangerMode:true,
    })
    .then((willDate)=>{
        if(willDate){
            swal("Se borro el pedido",{
                icon:"success",
            });
        }else{
            swal("Tu pedido no se borro ");
        }
    })
    
}

// Alert some text when the form is reset
function eviar(){
    swal({
        title:"¡Esta seguro!",
        text:"Se eviara su pedido",
        icon:"warning",
        buttons:true,
        dangerMode:true,
    })
    .then((willDate)=>{
        if(willDate){
            swal("Se envio su pedido",{
                icon:"success",
            });
        }else{
            swal("Tu pedido no se borro ");
        } 
    })
}
