import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// CLIENTES
const cliFernando = new Cliente("Fernando",21332312323);
const cliBeatriz = new Cliente("Beatriz",67667667667);

// CONTA CORRENTE
const ccFernando = new ContaCorrente(6565,cliFernando,0);
const ccBeatriz = new ContaCorrente(2121,cliBeatriz,0);

// CONTA POUPANÇA
const cpFernando = new ContaPoupanca(6005,cliFernando,100);

// AÇÕES
ccFernando.depositar(100);
ccFernando.sacar(50);
cpFernando.sacar(30);

// CONSULTAS
console.log(cpFernando);
console.log(ccFernando);