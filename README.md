Este projeto foi desenvolvido com o objetivo de praticar e consolidar conhecimentos sobre roteamento em aplicações React, utilizando o React Router em conjunto com o React.

A aplicação simula um website simples com múltiplas páginas, implementando navegação entre rotas, componentes de layout reutilizáveis, lazy loading para melhoria de performance, tratamento de rotas inválidas e uso de parâmetros dinâmicos na URL.

🎯 Objetivo da Atividade

Configurar o React Router

Criar múltiplas páginas

Trabalhar com componentes de layout

Implementar lazy loading

Tratar rotas inválidas (404)

Utilizar parâmetros de URL

🧠 Funcionalidades Implementadas
✅ Configuração do React Router

Instalação e configuração do react-router-dom

Uso do BrowserRouter

Organização das rotas no App.jsx

✅ Páginas Criadas

A aplicação possui as seguintes páginas:

🏠 Home

ℹ️ About

📞 Contact

👤 User (rota dinâmica)

❌ NotFound (404)

Cada página possui conteúdo básico e navegação entre elas.

✅ Rotas Implementadas
Rota Descrição
/ Página Home
/about Página About
/contact Página Contact
/user/:id Página dinâmica baseada no ID

- Página 404 para rotas inválidas
  ✅ Parâmetros de URL

Foi implementada uma rota dinâmica:

/user/:id

Utilizando o hook:

useParams()

Exemplo de uso:

/user/1
/user/25

A página exibe conteúdo dinâmico com base no ID informado.

✅ Layout Compartilhado

O projeto utiliza componentes reutilizáveis para melhorar a organização:

📌 Header

📌 Footer

(Opcional) Sidebar

Esses componentes aparecem em todas as páginas, mantendo a estrutura consistente da aplicação.

✅ Melhoria de Performance

Foi utilizado Lazy Loading com:

React.lazy()
React.Suspense

Isso permite que as páginas sejam carregadas sob demanda, reduzindo o tamanho do carregamento inicial da aplicação.

🛠️ Tecnologias Utilizadas

⚛️ React

🔀 React Router

⚡ Vite

💻 JavaScript (ES6+)

🎨 CSS

📁 Estrutura do Projeto
src/
│
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ └── Sidebar.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── User.jsx
│ └── NotFound.jsx
│
├── App.jsx
└── main.jsx
⚙️ Como Executar o Projeto

1️⃣ Clone o repositório:

git clone https://github.com/jvpventura/exercicios-react-02.git

2️⃣ Acesse a pasta do projeto:

cd exercicios-react-02

3️⃣ Instale as dependências:

npm install

4️⃣ Execute o projeto:

npm run dev

A aplicação estará disponível em:

http://localhost:5173
📚 Aprendizados

Com este projeto foi possível aprender:

Como configurar e organizar rotas em React

Como criar rotas dinâmicas com parâmetros

Como estruturar layouts reutilizáveis

Como tratar páginas não encontradas (404)

Como melhorar performance utilizando lazy loading

## 🎥 Demonstração

<p align="center">
  <img src="./docs/animacao.gif" alt="Demonstração da aplicação" width="800"/>
</p>

📌 Autor

Desenvolvido por João Ventura
