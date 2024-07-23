let arrProductos=["Pantalon1", "Pantalon2", "Pantalon3", "Pantalon4", "Pantalon5", "Pantalon6"]
let arrPrecios=[25, 22, 15000, 17000, 19000, 22000]
let arrCantidad = [4, 3, 3, 3, 3, 3]

document.querySelector("div button").addEventListener("click", ()=>{
    let cantidad = document.querySelector("div input").value;
    cantidad = Number(cantidad);
    if(cantidad > 0 && (arrCantidad[0] - cantidad) > 0){
        comprar(cantidad);
    }else{
        alert("Ingrese una cantidad menor")
    }
});

function comprar(cantidad){
    document.getElementById("total").innerText = cantidad * arrPrecios[productos];
}
