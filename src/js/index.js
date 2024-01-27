function insert (x){
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + x;
}

function Limp(){
    document.getElementById('resultado').innerHTML = "";
}

function volta (){
    var result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0, result.length -1);
}

function Calc(){
    var result = document.getElementById('resultado').innerHTML;
    
    if(result){
        var t = document.getElementById('resultado').innerHTML = eval(result);

        document.getElementById('resultado').innerHTML = Math.trunc(t);
    }
    
    if(result == 0){
        document.getElementById('resultado').innerHTML = "?😐";

        setTimeout(function(){
            Limp();
        }, 600);
    }
}
//------------ escuro -----------------
const chk = document.getElementById('chk');

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})

// -------------------------Arrastavel----------------------------

const arrastavel = document.querySelector(".janela"),
h = arrastavel.querySelector("#resultado");// serve em qualquer elemento

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(arrastavel);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    
    arrastavel.style.left = `${leftVal + movementX}px`;
    arrastavel.style.top = `${topVal + movementY}px`;  
}

arrastavel.addEventListener("mousedown", ()=>{
    h.classList.add("active");
    arrastavel.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", ()=>{
    h.classList.remove("active");
    arrastavel.removeEventListener("mousemove", onDrag);
});

// --------------Teclado----------------
document.addEventListener("keydown", teclaDw)

function teclaDw() {

    const tecla = event.keyCode;
    // console.log(tecla);

    if (tecla == 96 || tecla == 48) {// 0
        insert(0);
    }
    if (tecla == 97 || tecla == 49) {// 1
        insert(1);
    }
    if (tecla == 98 || tecla == 50) {// 2
        insert(2);
    }
    if (tecla == 99 || tecla == 51) {// 3
        insert(3);
    }
    if (tecla == 100 || tecla == 52) {// 4
        insert(4);
    }
    if (tecla == 101 || tecla == 53) {// 5
        insert(5);
    }
    if (tecla == 102 || tecla ==54) {// 6
        insert(6);
    }
    if (tecla == 103 || tecla == 55) {// 7
        insert(7);
    }
    if (tecla == 104 || tecla == 56) {// 8
        insert(8);
    }
    if (tecla == 105 || tecla == 57) {// 9
        insert(9);
    }
    // ---- operação ----

    switch (tecla) {
        case 8:
            volta();
            break;
        case 46:
            Limp();
            break;
        case 13:
            Calc();
            break;
        case 110:
            insert('.');
            break;
        case 109:
            insert('-');
            break;
        case 106:
            insert('*');
            break;
        case 111:
            insert('/');
            break;
        case 107:
            insert('+');
            break;
    
        default:
            break;
    }


}

// --------------------------------

// document.getElementById('tit').innerHTML = num + x;
