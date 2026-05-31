import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'assert';

describe('Validar serviço de pagamento ', function () {
  it('deve registrar um pagamento e categorizar como padrão quando valor <= 100.00', function () {
    const servicoDePagamento = new ServicoDePagamento();
    servicoDePagamento.realizarPagamento('12345', 'Empresa A', 100.0);
    const resultado = servicoDePagamento.consultarUltimoPagamento();

    assert.equal(resultado.CodigoBarra, '12345');
    assert.equal(resultado.Empresa, 'Empresa A');
    assert.equal(resultado.valor, 100.0);
    assert.equal(resultado.categoria, 'padrão');
  });

  it('deve registrar um pagamento e categorizar como cara quando valor > 100.00', function () {
    const servicoDePagamento = new ServicoDePagamento();
    servicoDePagamento.realizarPagamento('54321', 'Empresa B', 150.5);
    const resultado = servicoDePagamento.consultarUltimoPagamento();

    assert.equal(resultado.CodigoBarra, '54321');
    assert.equal(resultado.Empresa, 'Empresa B');
    assert.equal(resultado.valor, 150.5);
    assert.equal(resultado.categoria, 'cara');
  });

  it('deve retornar o último pagamento realizado', function () {
    const servicoDePagamento = new ServicoDePagamento();
    servicoDePagamento.realizarPagamento('10001', 'Empresa X', 20.0);
    servicoDePagamento.realizarPagamento('10002', 'Empresa Y', 120.0);

    const resultado = servicoDePagamento.consultarUltimoPagamento();
        
    assert.equal(resultado.Empresa, 'Empresa Y');
    assert.equal(resultado.valor, 120.0);
    assert.equal(resultado.categoria, 'cara');
  });
});