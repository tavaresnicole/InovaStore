# Login e Registro de Usuários

Este é um projeto simples de autenticação com uma tela de login e de registro de usuários, desenvolvido com Angular para o frontend e Node.js com TypeScript para o backend. Ele permite que os usuários se registrem, façam login e acessem uma página inicial após a autenticação.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Rodando o Backend](#rodando-o-backend)
  - [Rodando o Frontend](#rodando-o-frontend)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Visão Geral

Este projeto tem como objetivo demonstrar um sistema básico de autenticação, onde os usuários podem se registrar com um nome de usuário, e-mail e senha, e posteriormente utilizar essas credenciais para fazer login. Após o login, o nome do usuário é retornado e pode ser utilizado em outras partes do frontend.

## Tecnologias Utilizadas

### Backend

- **Node.js** (v18)
- **TypeScript**
- **Express.js**

### Frontend

- **Angular** (v18)
- **TypeScript**
- **SCSS**
- **Angular Material**

## Funcionalidades

- **Registro de Usuários**: Permite que novos usuários se registrem fornecendo um nome de usuário, e-mail e senha.
- **Login de Usuários**: Autentica usuários com nome de usuário e senha.
- **Página Inicial**: Página acessível apenas após o login bem-sucedido.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente instalado com o Node.js)
- **Angular CLI** (instalado globalmente)

### Instalação

Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
````

**Backend** 

acesse a pasta:

```bash
cd backend
```

instale as dependências:

```bash
npm install
```

inicie o servidor:

```bash
npm run dev
```

---

**Frontend** 

acesse a pasta:

```bash
cd frontend
```

instale as dependências:

```bash
npm install
```

inicie o servidor:

```bash
ng serve
```


