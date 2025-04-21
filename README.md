# 🥗 Gerador de Dietas com Gemini AI

Este projeto é um gerador de dietas personalizado que utiliza a API do Gemini AI para criar planos alimentares com base em dados fornecidos pelo usuário. Desenvolvido em TypeScript, o sistema é modular e fácil de manter.

## 🚀 Funcionalidades

- Integração com a API do Gemini AI para geração de dietas.
- Entrada de dados do usuário, como idade, peso, altura e objetivos.
- Geração de planos alimentares personalizados.
- Estrutura modular para fácil manutenção e expansão.

## 🛠️ Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Gemini AI API](https://ai.google.dev/)
- [Nodemailer](https://www.nodemailer.com/)

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Campos1911/geradorDietaGeminiAi.git
   cd geradorDietaGeminiAi
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Configure as variáveis de ambiente, criando um arquivo `.env` na raiz do projeto com:

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

## ▶️ Como Usar

1. Execute o projeto:

   ```bash
   yarn start
   ```

2. Siga as instruções no terminal para fornecer seus dados pessoais.

3. O sistema irá gerar e exibir um plano alimentar personalizado com base nas informações fornecidas.

## 📁 Estrutura do Projeto

```
geradorDietaGeminiAi/
├── src/
│   ├── index.ts
│   ├── services/
│   │   └── geminiService.ts
│   └── utils/
│       └── dietGenerator.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── yarn.lock
```
