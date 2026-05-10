<h1 align="center">📱💊EBula App</h1>

### 🩺 Objetivo do Projeto

O EBula foi criado com o objetivo de auxiliar profissionais da saúde no acesso rápido e simplificado a informações sobre medicamentos, proporcionando maior praticidade durante rotinas hospitalares e clínicas.

---

### ✨ Funcionalidades

- ✅ Cadastro de usuário
- ✅ Login local com persistência
- ✅ Busca de medicamentos
- ✅ Visualização de detalhes dos medicamentos
- ✅ Organização por grupos
- ✅ Favoritos
- ✅ Navegação Bottom Tabs
- ✅ Interface moderna com React Native Paper
- ✅ Estrutura modular e componentizada

---

### ⚙️ Como Executar o Projeto

1️⃣ Clone o repositório
```bash
    git clone <URL_DO_REPOSITORIO>
```
2️⃣ Instale as dependências
```bash
    npm install
```
3️⃣ Execute o projeto
```bash
    npx expo start
```
---
### 📦 Dependências Principais
#### Navegação
```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
```
#### UI
```bash
npm install react-native-paper
```
#### Persistência
```bash
npm install @react-native-async-storage/async-storage
```
#### UUID
```bash
npm install uuid react-native-get-random-values
```

----

### 💻 Tecnologias e Ferramentas

- 🔤 1. TypeScript
    - Linguagem de programação tipada

- 📱 2. React Native
    - Framework de código único

- ⚡ 3. Expo Go
    - Testes e visualização do projeto.
- 🌐 4. Axios (API)
    - Faz requisições HTTP

- 🧭 5. React Navigation
    - Navegação

- 🧠 6. Context API
    - Gerenciamento de estado nativo do React

- 🗄️ 7. AsyncStorage
    - Persistência local

- 🎨 8. React Native Paper & Componentes (UI)
    - Paper é uma coleção de componentes personalizáveis ​​e prontos para produção para React Native, seguindo as diretrizes do Material Design do Google.
    - Desenvolvimento de componentes próprios

- 🔤 9. TypeScript
    - Linguagem de programação tipada
    
- 🧩 10. API externa para integração dos dados
    - PharmaDB
---

### 🧠 Arquitetura

O projeto utiliza uma arquitetura baseada em separação de responsabilidades:

- Screens → telas da aplicação
- Components → componentes reutilizáveis
- Services → integração e persistência
- Context API → gerenciamento simples de autenticação
- Navigation → controle de rotas
---

### 📂 Estrutura do Projeto

```bash
   src/
   ├── assets/
   ├── components/
   ├── context/
   ├── hooks/
   ├── navigation/
   ├── screens/
   ├── services/
   ├── styles/
   ├── types/
   └── utils/
```

---
### 🔐 Autenticação

A autenticação do MVP foi implementada localmente utilizando:

- AsyncStorage
- Hash de senha
- Persistência de sessão simples

O foco do projeto foi demonstrar fluxo funcional e experiência mobile.

---

### 📱 Telas

🔹 Login

    Tela de autenticação do usuário.

🔹 Cadastro

    Cadastro de profissionais da saúde.

🔹 Home

    Tela principal com:

        - busca de medicamentos
        - acessos rápidos
        - informações do aplicativo
        - buscas recentes

🔹 Favoritos

    Lista de medicamentos salvos.

🔹 Grupos

    Organização personalizada de medicamentos.

🔹 Detalhes

    Informações detalhadas sobre medicamentos.
---

### 🔮 Melhorias Futuras
- Integração real com API farmacêutica
- Busca avançada
- Favoritos offline
- Sincronização em nuvem
- Perfil do usuário
- Tema dark mode
- Histórico de buscas
- Bulas completas

---

### 📄 Licença

Projeto desenvolvido para fins acadêmicos.