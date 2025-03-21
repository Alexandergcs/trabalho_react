Catálogo de Filmes 

Aplicação web desenvolvida com React.js para exibir um catálogo de filmes, permitindo a busca e exibição de detalhes dos filmes populares.

---

Demonstração

🖥️ Acesse o projeto rodando localmente em:
```
http://localhost:3000
```

---

Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) - Ambiente para executar JavaScript no backend
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) - Gerenciador de pacotes

---

Instalação e Uso
Clone o repositório

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Instale as dependências

```sh
npm install
```

Configure a API Key da TMDb

1. Crie uma conta na [TMDb](https://www.themoviedb.org/).
2. Gere uma API Key.
3. No arquivo `src/api.js`, substitua `"SUA_API_KEY_AQUI"` pela chave gerada.

```javascript
const API_KEY = "SUA_API_KEY_AQUI";
```

Inicie o projeto
```sh
npm start
```

A aplicação abrirá automaticamente em:
```
http://localhost:3000
```

---

Tecnologias Utilizadas**
React.js - Biblioteca JavaScript para criação de interfaces
TMDb API - Base de dados de filmes e séries
React Router - Gerenciamento de rotas no React
CSS Puro - Estilização da aplicação

---

Estrutura do Projeto

📂 `spa_react_movies/`  
├── 📂 `src/` → Código-fonte principal  
│ ├── 📂 `components/` → Componentes reutilizáveis (Navbar)  
│ ├── 📂 `pages/` → Páginas (Home, MovieDetails)  
│ ├── 📂 `context/` → Gerenciamento de estado  
│ ├── 📂 `hooks/` → Hooks customizados  
│ ├── 📂 `styles/` → Arquivos CSS  
│ ├── 📄 `api.js` → Configuração da API  
│ ├── 📄 `App.js` → Componente principal  
│ ├── 📄 `index.js` → Ponto de entrada da aplicação  
│ ├── 📂 `public/` → Arquivos estáticos (index.html)  

---

Autor

Desenvolvido por [Alexander]  
