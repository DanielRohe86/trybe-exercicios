let statusSelecao;

switch (statusSelecao) {
    case "notaDesafio >= 80":
      console.log("aprovada");
      break;
    
    case "notaDesafio < 80 && notaDesafio >= 60":
      console.log("lista");
      break;
    
    case "notaDesafio < 60":
      console.log("reprovada");
      break;

    default:
      console.log("não se aplica");
}




