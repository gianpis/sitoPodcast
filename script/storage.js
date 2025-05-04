function defaultTema(){
    let tema = localStorage.getItem("tema")
    if(tema == null){
        cambiaTema()
    }else{
        setTema(tema)
    }
}


function cambiaTema(){
    let tema = localStorage.getItem("tema")
    if(tema == "light"){
        tema = "dark"
    }else if(tema == "dark"){
        tema = "light"
    }else{
        tema = window.matchMedia("(prefers-color-scheme: dark)")
            ? "dark"
            : "light"
    }
    localStorage.setItem("tema",tema)

    setTema(tema)
}

function setTema(tema){
    let body = document.body
    body.classList.remove("dark", "light")
    body.classList.add(tema)
}

function scegliFont(){
    
}