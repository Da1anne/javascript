function redirecionar(){
    window.open("https://globallabs.academy/");
}
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
   //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2
}
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;

    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("qual a sua idade:");
console.log(validaIdade(idade));

/*
alert(soma(5, 10));
alert(setReplace("vai Japão", "Japão", "Brasil"));

/*
var d = new Date();
alert(d.getMonth()+1);

/*
var count;
for(count = 1; count <= 5; count++){
    alert(count);
};


/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);


/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
alert(fruta.nome);

var nome = "Daianne Souza";
var idade = 30;
var idade2 = 20;
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log("Japão é o melhor time do mundo")
*/
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
