var jogador = 'x';
var jogada = 0;
var ptX = 0;
var ptO = 0;

function hideR(){
    document.getElementById("wl").style.visibility = 'hidden';
    location.reload();
}

function jogar(id){
    var x = document.getElementById(id).className;
    var classID = getID(id);

    if(x == "ox-e"){
        jogada++;
        
        if(jogador == "x"){
            document.getElementById(id).classList.add('x');
            jogador = "o";
        }else if(jogador =="o"){
            document.getElementById(id).classList.add('o');
            jogador = "x";
        }
        
        if(checkWin()){
            if(jogador == "o"){ 
                jogador = "X";
                ptX++;
            }else if(jogador == "x"){
                jogador = "O";
                ptO++;
            }
            console.log('Fim do jogo!\n Vitória do '+ jogador);
            document.getElementById("winlose").classList.remove('box-placar');
            document.getElementById("winlose").classList.add('result');
            document.getElementById("pO").innerHTML = " ";
            document.getElementById("pX").innerHTML = " ";
            document.getElementById("wl").innerHTML = "<br><br><br><font style='font-size: 23pt; color:#32CD32;'>"+ jogador +" ganhou!</font><br><br><br><br>Clique aqui para continuar jogando...";
        }
        
        if(jogada >= 9){
			document.getElementById("winlose").classList.add('result');
            document.getElementById("pO").innerHTML = " ";
            document.getElementById("pX").innerHTML = " ";
            document.getElementById("wl").innerHTML = "<br><br><font style='font-size: 23pt; color:#cc0000;'>Ops! Empatou!</font><br><br><br><br>Clique aqui para continuar jogando...";
		    
        }
    }
}

function getID(id){
    var classID = document.getElementById(id).className;
    return classID;
}

/*
1 2 3
4 5 6
7 8 9
*/
function checkWin(){
    if((getID('1') == getID('2')) && (getID('1') == getID('3')) && (getID('1') != "ox-e")){
       return true;
    }
    if((getID('4') == getID('5')) && (getID('4') == getID('6')) && (getID('4') != "ox-e")){
       return true;
    }
    if((getID('7') == getID('8')) && (getID('7') == getID('9')) && (getID('7') != "ox-e")){
       return true;
    }
    if((getID('1') == getID('4')) && (getID('1') == getID('7')) && (getID('1') != "ox-e")){
       return true;
    }
    if((getID('2') == getID('5')) && (getID('2') == getID('8')) && (getID('2') != "ox-e")){
       return true;
    }
    if((getID('3') == getID('6')) && (getID('3') == getID('9')) && (getID('3') != "ox-e")){
       return true;
    }
    if((getID('1') == getID('5')) && (getID('1') == getID('9')) && (getID('1') != "ox-e")){
       return true;
    }
    if((getID('3') == getID('5')) && (getID('3') == getID('7')) && (getID('3') != "ox-e")){
       return true;
    }
    
}