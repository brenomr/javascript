import { Cliente } from "./Cliente.js";
// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const cliFernando = new Cliente("Fernando",213323123,123);
const diretor = new Diretor("Rodrigo", 10101100, 2000);
const gerente = new Gerente("Bernardo", 303030303, 1000);
diretor.cadastrarSenha(1234);
gerente.cadastrarSenha(1234);

const clienteLogado = SistemaDeAutenticacao.login(cliFernando,123);
const gerenteLogado = SistemaDeAutenticacao.login(gerente, "12434");
const diretorLogado = SistemaDeAutenticacao.login(diretor, "1234");

console.log(clienteLogado, gerenteLogado, diretorLogado);

// CLIENTES & CONTAS
// const cliFernando = new Cliente("Fernando",21332312323);
// const ccFernando = new ContaCorrente(6565,cliFernando,0);
// const cpFernando = new ContaPoupanca(6005,cliFernando,100);

// AÇÕES
// ccFernando.depositar(100);

// CONSULTAS
//console.log(ccFernando);