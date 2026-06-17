# pagamentos
Trabalho de Conclusão da Disciplina -  Integração Contínua para Automação de Testes

Objetivo:

Demonstrar a implementação de uma pipeline CI capaz de:

Executar testes automaticamente a cada push no repositório
Permitir execução manual da pipeline
Executar testes de forma agendada
Gerar relatórios de testes automatizados
Armazenar relatórios como artefatos no GitHub Actions

Tecnologias utilizadas:
Node.js
Yarn
Jest (testes unitários)
Playwright (testes E2E)
GitHub Actions (CI/CD)


Estrutura da Pipeline:

A pipeline é executada no GitHub Actions e contém os seguintes gatilhos:

Execução por Push:

A pipeline é executada automaticamente sempre que há um push na branch principal (main).

Execução Manual:

A execução pode ser iniciada manualmente através do GitHub Actions usando workflow_dispatch.

Execução Agendada:

A pipeline é executada automaticamente em horários definidos via cron (em UTC), permitindo execuções periódicas.


A pipeline gera e armazena automaticamente os relatórios:

Relatório de cobertura (Jest)
Local: reports/coverage

Relatório de testes E2E (Playwright)
Local: playwright-report

Esses arquivos são enviados como Artifacts no GitHub Actions, permitindo download e análise posterior.


A execução agendada utiliza padrão UTC:

cron: '0 8 * * 1-5'

Isso significa:

Segunda a sexta-feira
08:00 UTC