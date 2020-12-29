import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// ========  CLIENTES ========  

const cliFernando = new Cliente("Fernando",12312312323);
const cliBarbara = new Cliente("Barbara",32112332124);
//console.log(cliFernando);

// Como ficaria sem o construtor declarado na classe
// const cliBarbara = new Cliente();
// cliBarbara.nome = "Barbara";
// cliBarbara.cpf = 32112332124; <---- Ainda exigiria um set para o cpf



// =========  CONTAS =========  

const ccBarbara = new ContaCorrente(2002,cliBarbara);
const ccFernando = new ContaCorrente(1001,cliFernando);

// =======  OPERAÇÕES ========  

console.log(ccFernando.sacar(200));
ccFernando.depositar(1000);
console.log(ccFernando.sacar(200));
ccFernando.transferir(100,ccBarbara);
console.log(`Sr(a). ${ccFernando.cliente.nome}, seu saldo é de R$ ${ccFernando.saldo}.`);
console.log(`=====================================\nNúmero total de contas cadastradas: ${ContaCorrente.numeroDeContas}\n=====================================`);


/* ============ OBSERVAÇÕES MODULOS ============
Resumo: Ao trabalhar com modulos é necessário que
os arquivos sejam salvos como *.mjs ou então um
package.json seja configurado.

Configurando: npm init para iniciar a config do
package.json, em seguida preencher os campos, e
após adicionar o campo "type": "module"***

*** Esse campo type é solicitado na tela de erro
ao tentar executar os arquivos *.js sem que sejam
vistos como módulo. */

// UTILIDADES: Removido do código para simplificação
// console.log(`Sacado: R$ ${ccFernando.sacar(50)}.`);                     // Efetuando saque
// console.log(`Seu saldo é de: R$ ${ccFernando.consultarSaldo()}`);       // Efetuando consulta de saldo