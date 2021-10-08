function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
	}finally{
        console.log('Numeros dentro do array: ' + arr)
    }
}

console.log(validaArrays([1, 2, 3], 3));// elemento,correto tamanho do array,e tipo number
console.log(validaArrays([1], 5)); // erro tamanho,do array.
console.log(validaArrays([1,2],"b"));//Erro numero,não selecionado no array

//console.log(testeArray([1,2,3],0))
//console.log(testeArray([1, 2, 3]));
//console.log(testeArray([1],1))
/*
function validaArray(arr, tamanho) {
    try {
      if (!arr.length || arr.length !== tamanho) throw new RangeError("O tamanho do array é inválido");
  
      return arr;
    } catch(e) {
      if (e instanceof RangeError) {
        return console.log(e.message);
      } else {
        return e;
      }
    }
  } 
  
  validaArray();*/