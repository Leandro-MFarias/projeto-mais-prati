# 📘 Duolingo-Projeto - Documentação do Frontend

Este documento descreve o fluxo atual do **frontend** da aplicação, suas rotas, interações de usuário e dependências utilizadas.

---

## 🚀 Tecnologias e Dependências

O projeto utiliza:

- **React 19**
- **React Router v7**
- **React Hook Form + Zod** → formulários e validações
- **TailwindCSS** → estilização
- **Zustand** → gerenciamento de estado global simples
- **React Icons** → ícones
- **Vite** → bundler
- **tw-animate-css** → animações

---

## 📍 Rotas da Aplicação

Atualmente as rotas estão configuradas com **React Router**:

| Rota         | Componente       | Descrição |
|--------------|------------------|-----------|
| `/`          | `HomePage`       | Página principal (Jornada de aprendizado). |
| `/login`     | `LoginPage`      | Página de autenticação (e-mail + senha). |
| `/register`  | `RegisterPage`   | Página de cadastro de novos usuários. |
| `/profile`   | `ProfilePage`    | Perfil do usuário (editar foto, dados pessoais). |
| `/daily`     | `DailyPage`      | Desafio diário (pergunta de múltipla escolha). |
| `/exercises` | `ExercisesPage`  | Página de exercícios (grupo de questões). |

> ⚠️ Ainda falta implementar as rotas do **professor**.

---

## 🧭 Estrutura de Navegação

### 🔹 NavBar  
Presente em todas as páginas **exceto**: Login, Registro e Exercícios.

- **Itens:**
  - Jornada → `/`
  - Desafio diário → `/daily`
  - Perfil → `/profile`
  - Sair → `/login`

O estado da página ativa é controlado via **Zustand** (`useNavPage`).

---

## 📝 Detalhes das Páginas

### 🔐 LoginPage (`/login`)
- Campos:
  - **E-mail**
  - **Senha**
  - Checkbox "Lembre-me"
- Botão **Entrar**
- Link para registro (`/register`)

### 🆕 RegisterPage (`/register`)
- Campos:
  - **Nome completo** (obrigatório: nome + sobrenome)
  - **E-mail**
  - **Senha**
  - **Confirmar senha**
- Botão **Cadastrar**
- Redireciona para `/login` após cadastro.

---

### 🏠 HomePage / Journey (`/`)
Página principal com a jornada de aprendizado.

- Exibe grupos de exercícios em **blocos circulares**:
  - **Verde** → já concluído
  - **Roxo** → grupo atual do usuário
  - **Cinza** → bloqueado/não disponível ainda
- Grupo atual exibe um **balão "START"**.
- Ao clicar em um grupo desbloqueado, o usuário vai para `/exercises`.

---

### ⏳ DailyPage (`/daily`)
Desafio diário no formato de múltipla escolha.

- Exibe **pergunta única** (muda diariamente).
- Quatro opções de resposta (checkbox).
- Botão **Enviar** → retorna se a resposta está correta ou incorreta.
- Ter um contador de stricks.

---

### 👤 ProfilePage (`/profile`)
- Edição de perfil do usuário.
- Alterar foto e dados pessoais.

---

### 📚 ExercisesPage (`/exercises`)
- Página de um grupo de exercícios.
- Cada grupo contém **3 questões** (com diferentes tipos de perguntas).
- Fluxo:
  1. Usuário responde questão.
  2. Se acertar → vai para próxima questão.
  3. Ao concluir todas → grupo marcado como **concluído**.
  4. Usuário pode:
     - Avançar para próximo grupo.
     - Voltar para HomePage.

---

## 🔄 Fluxo do Usuário

1. **Cadastro/Login**  
   - Usuário cria conta ou faz login.  
   - Pode marcar "Lembre-me" para persistir sessão.  

2. **Jornada (HomePage)**  
   - Usuário visualiza seu progresso.  
   - Pode acessar grupo de exercícios atual ou passados.  

3. **Exercícios**  
   - Usuário responde questões de programação.  
   - Ao concluir, grupo fica marcado como completo.  

4. **Desafio Diário**  
   - Pergunta diária única para reforçar aprendizado.  

5. **Perfil**  
   - Usuário pode editar informações e trocar foto.  

6. **Logout**  
   - Feito pelo menu ou botão "Sair".  

---

## 📌 Observações Importantes para o Backend

- Será necessário **persistir progresso do usuário**:
  - Quais grupos foram concluídos.
  - Qual grupo está desbloqueado/atual.
  - Resultado do desafio diário.
- Autenticação com **e-mail e senha**.
- Perfil deve armazenar:
  - Nome completo
  - Foto
  - E-mail
  - Senha (hash)
- Exercícios e perguntas devem ser **dinâmicos** (vir do backend).  
- Desafio diário deve ser **atualizado a cada dia**.