let statoMenu=false;
let modalitaGiorno=true;

function cambiaStatoMenu() {
    const barra=document.getElementById("barraTop");
    const menu=document.getElementById("menuLaterale");
    const simbolo=document.getElementById("menu");
    if (!statoMenu) {
        menu.className="menuAperto";
        barra.className="barraCorta";
        if (modalitaGiorno) {
            simbolo.src="media/x.png";
        } else {
            simbolo.src="media/xNotte.png";
        }
        simbolo.style.height="50%";
        statoMenu=true;
    } else {
        menu.className="menuChiuso";
        barra.className="barraLunga";
        if (modalitaGiorno) {
            simbolo.src="media/menu.png";
        } else {
            simbolo.src="media/menuNotte.png";
        }
        simbolo.style.height="30%";
        statoMenu=false;
    }
}

function cambiaStatoModalita() {
    let srcMenu="media/menu";
    if (statoMenu) {
        srcMenu="media/x"
    }

    let srcModalita="media/simboloModalita"

    let titoli=document.getElementsByTagName("h4");
    let coloreTitoli="#e3caeb";

    if (modalitaGiorno) {
        document.getElementById("bod").style.backgroundColor="#302c2a";
        document.getElementById("barraTop").style.backgroundColor="#737373";
        document.getElementById("barraTop").style.borderBottomColor="#282422";
        document.getElementById("menuLaterale").style.backgroundColor="#737373";
        document.getElementById("menuLaterale").style.borderRightColor="#282422";
        document.getElementById("menu").src=srcMenu+"Notte.png";
        document.getElementById("sole").src=srcModalita+"Notte.png";
        document.getElementById("homeImg").src="media/homeNotte.png";
        document.getElementById("riga").src="media/rigaNotte.png";
        modalitaGiorno=false;
    } else {
        document.getElementById("bod").style.backgroundColor="#f4f4f4";
        document.getElementById("barraTop").style.backgroundColor="white";
        document.getElementById("barraTop").style.borderBottomColor="#ebebeb";
        document.getElementById("menuLaterale").style.backgroundColor="white"
        document.getElementById("menuLaterale").style.borderRightColor="#ebebeb";
        document.getElementById("menu").src=srcMenu+".png";
        document.getElementById("sole").src=srcModalita+".png";
        document.getElementById("homeImg").src="media/home.png";
        document.getElementById("riga").src="media/riga.png";
        coloreTitoli="#77288d";
        modalitaGiorno=true;
    }

    for (let i=0; i<titoli.length; i++) {
        titoli[i].style.color=coloreTitoli;
    }
}