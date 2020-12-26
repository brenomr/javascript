import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// ========  CLIENTES ========  

const cliFernando = new Cliente();
cliFernando.nome = "Fernando";
cliFernando.cpf = 12312312332;

const cliBarbara = new Cliente();
cliBarbara.nome = "Barbara";
cliBarbara.cpf = 32112332124;

// =========  CONTAS =========  

const ccFernando = new ContaCorrente();
ccFernando.agencia = 1001;
ccFernando.cliente = cliFernando;
console.log(`Saldo após deposito: R$ ${ccFernando.depositar(1000)}.`);    // Efetuando depósito

const ccBarbara = new ContaCorrente();
ccBarbara.agencia = 6565;
ccBarbara.cliente = cliBarbara;
console.log(`Saldo após depósito: R$ ${ccBarbara.depositar(100)}`);

console.log(ccFernando.transferir(100,ccBarbara))
console.log(ccBarbara.consultarSaldo());


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