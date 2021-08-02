// Criar objeto USUARIO
const usuario = {

    nome: "Thomas",
    salario: 800,
    saldo: 1500.00,
    despesaLuz: 450.00,
    despesaAgua: 250.00,
    despesaML: 109.15,
    despesaVP: 51.39,
    despesaCC: 52.14,
    gastos: 200,

    totalDespesas: function () {

        this.gastos = this.despesaAgua + this.despesaLuz + this.despesaML + this.despesaCC + this.despesaVP
        console.log("Total: " + this.totalDespesas)

    },

    chekUp: function () {
        console.log("Usuario:")
        console.log(this.nome)
        console.log(this.salario)
        console.log(this.saldo)
    },

    showSaldo: function () {
        alert("O saldo da conta é de: R$" + this.saldo)
    },

    showSalario: function () {
        alert("O salário da conta é de: R$" + this.salario)
    },

    saudeFinanceira: function () {

        if (this.gastos >= this.salario) {
            sf.innerText = "Você gasta mais do que ganha!!"
        } else {
            sf.innerHTML = "<p>Saúde financeira está OK! &#9989</p>"
        }

    }

}

var nm = document.getElementById('nome')
nm.innerText = usuario.nome

var sd = document.getElementById('saldo')
sd.innerText = "R$ " + usuario.saldo

var dp = document.getElementById("despesa")
dp.innerText = "R$" + usuario.gastos

var sf = document.getElementById('saude-financeira')
