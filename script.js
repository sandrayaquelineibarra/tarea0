

  const estilo1 = document.getElementById("estilo1");
  const estiloAltoContraste = document.getElementById("estiloAltoContraste");
  const estilos = document.getElementById("estilos");

  estilo1.addEventListener("click",()=>{
    estilos.href = "estilo1.css";
    estiloAltoContraste.disabled = false;
    estilo1.disabled = true;
  });

  estiloAltoContraste.addEventListener("click",()=>{
    estilos.href = "estiloAltoContraste.css";
    estilo1.disabled = false;
    estiloAltoContraste.disabled = true;
  });

