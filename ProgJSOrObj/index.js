import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

/* 
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente ("Lucas", 11232345425);

const contaCorrente = new ContaCorrente (cliente1, 1001);
const contaPoupanca = new ContaPoupanca (50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

contaSalario.depositar(100);
contaSalario.sacar (10);

console.log (contaSalario);
*/

const diretor = new Diretor("Lucas", 10000, 12345677890);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Andreza", 5000, 52698411357);
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Koda", 15206398745, "321");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "321");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);