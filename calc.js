/*
 * Implement all your JavaScript in this file!
 */
 var op ='+';
 var digit ='';
 var acu = 0;
 var lastDigit= '';
 var pantalla=''


  
$("button").click(function pulsarOperaciones(){
  	var digit=$(this).html();
  	if(digit==String.fromCharCode(247)){
  		digit='/';
  	}

  	if(/\d/.test(digit)){//caso cuando el digito es un numero.
  		if(/\d/.test(lastDigit)==false){//si el ultimo digito no fue un numero se coloca el digito si concatenar.
  			pantalla=digit;

  		}else{//si fue un numero la se concatena.
  			pantalla+=digit;
  		}
  		lastDigit=digit;
  		$('input').val(pantalla);
  	}else if(/-|\*|\+|\//.test(digit)){//caso cuando el digito es una operacion de suma, resta, multiplicacion o division.
  		console.log(digit)
  		if(/\d/.test(lastDigit)){//si el digito anterior a la operacion fue un numero.
  			condicionales();
  			lastDigit=digit;
  			pantalla=acu;
  			
  		}else if(lastDigit=='='){//si el digito anterior a la operacion fue igual '='.
  			pantalla=acu;
  		}
  		op=digit;
  		$('input').val(pantalla);
  	}else if(digit=='='){//caso cuando el digito es la de igual '='.
  		if(/\d|=/.test(lastDigit)){//si el digito anterior fue un numero o '='
  			condicionales();
  			lastDigit='=';
  			$('input').val(acu);
  		}
  	}else if(digit=='C'){//caso cuando el digito es reset 'C'.
  		op ='+';
 		digit ='';
    	acu = 0;
  		lastDigit= '';
  		pantalla=''
  		$('input').val('');
  	}
});
function condicionales(){
  	if(op=='+'){
  		acu+=Number(pantalla);
  	}else if(op=='-'){
  		acu-=Number(pantalla);
  	}else if(op=='*'){
  		acu*=Number(pantalla);
  	}else if(op=='/'){
  		acu/=Number(pantalla);
  	}
  }