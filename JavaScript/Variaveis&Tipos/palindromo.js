//solução 1 - palavra simples sem o espaço
function verificaPalindromo(string) {
  if (!string) return "string está vazia";

  return string.split("").reverse().join("") === string; // esta separando todas as letras,está revertendo as letras, e com o join uni novamente as string.
}

//console.log(verificaPalindromo("ama"));
//////////////////////////////////////////////////////////////////////////////
//Solução 2
function verificaPalindromo2(string) {
  if (!string) return "string está vazia";

  for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]){

            return false
        }
  }

  return true
}

//console.log(verificaPalindromo2("abba"))



