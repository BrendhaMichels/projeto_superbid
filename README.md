📂 Estrutura do Projeto

cypress
/e2e    
consultar_evento.cy.js  # Testes de busca e filtros
/pages
LoginPage.js  # Page Object do login
ConsultarEventoPage.js  # Page Object da busca de produtos
/ screenshots  # Pasta onde ficam os screenshots dos testes
/ reports  # Pasta onde ficam os relatórios gerados
cypress.config.js  # Configuração do Cypress
package.json  # Dependências do projeto
README.md  # Documentação do projeto

Como Configurar o Projeto

Instalar Dependências:

Certifique-se de ter o Node.js instalado. Em seguida, instale as dependências do projeto:
npm install

Configurar Variáveis de Ambiente:
Para rodar os testes de login, é necessário configurar variáveis de ambiente no cypress.env.json:
{
  "username": "seu_usuario",
  "password": "sua_senha"
}

🧪 Executando os Testes:
Rodar Testes no Modo Interativo (GUI)
npx cypress open

Rodar Testes no Modo Headless (Terminal)
npx cypress run --reporter mochawesome

Rodar Testes e Gerar Relatório (Terminal)
npx cypress run

📸 Evidências e Relatórios

📂 Screenshots
Durante a execução dos testes, capturas de tela são salvas na pasta:
cypress/screenshots

📂 Relatórios
Os relatórios dos testes podem ser encontrados na pasta:
cypress/reports

🛠 Tecnologias Utilizadas
Cypress (Framework de Testes)
Mocha e Chai (Assertions)
JavaScript (Linguagem principal)


📌 Desenvolvido por Brendha Michels Ramos
