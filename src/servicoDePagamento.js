export default class ServicoDePagamento {
  #pagamentos;
  
  constructor() {
    this.#pagamentos = [];
  }
  
  realizarPagamento(codigoBarra, empresa, valor) {
    
    this.#pagamentos.push({
      CodigoBarra: codigoBarra,
      Empresa: empresa,
      valor: valor,
      categoria: valor > 100.0 ? 'cara' : 'padrão'
    });
  }

  
  consultarUltimoPagamento() {
    
    if (this.#pagamentos.length === 0) {
        return null;
    }
    // Retorna apenas o último item do array
    return this.#pagamentos[this.#pagamentos.length - 1];
  }
}