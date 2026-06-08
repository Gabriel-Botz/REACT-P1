# 🔐 TelaLogin — Sistema de Autenticação em React

Projeto desenvolvido durante a residência **SerratTec** como parte dos estudos de React. Implementa um sistema completo de autenticação com cadastro, login, validações e controle de tentativas.

---

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS Modules

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.module.css
│   ├── InputField/
│   │   ├── InputField.jsx
│   │   └── InputField.module.css
│   └── Modal/
│       ├── Modal.jsx
│       └── Modal.module.css
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.module.css
│   ├── Login/
│   │   ├── Login.jsx
│   │   └── Login.module.css
│   └── Register/
│       ├── Register.jsx
│       └── Register.module.css
├── App.jsx
└── main.jsx
```

---

## ✨ Funcionalidades

### Cadastro (`/register`)
- Campos: nome completo, nome de usuário, email, senha e confirmação de senha
- Validação de campos obrigatórios
- Validação de senhas coincidentes
- Verificação de usuário e email já cadastrados
- Persistência dos dados no `localStorage`
- Modal de feedback ao usuário

### Login (`/login`)
- Verificação de usuário existente no `localStorage`
- Verificação de senha
- Controle de tentativas com bloqueio após 5 erros
- Exibição de tentativas restantes via `useEffect`
- Modal de feedback ao usuário

---

## 🧩 Componentes Reutilizáveis

| Componente | Props | Descrição |
|---|---|---|
| `InputField` | `type`, `placeholder`, `value`, `onChange`, `icon` | Campo de input estilizado com ícone |
| `Button` | `type`, `onClick`, `children` | Botão padrão do projeto |
| `Modal` | `message`, `onClose` | Modal de feedback para erros e sucessos |

---

## ⚙️ Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd nome-da-pasta

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 📌 Rotas

| Rota | Página |
|---|---|
| `/` | Página inicial |
| `/login` | Tela de login |
| `/register` | Tela de cadastro |

---

## 👨‍💻 Autor

Desenvolvido por **Gabriel** — Residência SerratTec
