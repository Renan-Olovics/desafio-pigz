# 🚀 Desafio Frontend Pigz

Este projeto é um teste técnico para a empresa Pigz, desenvolvido com React, TypeScript e Vite. O objetivo é demonstrar habilidades em desenvolvimento frontend, incluindo boas práticas, organização de código e experiência do usuário.

## 🛠️ Tecnologias Utilizadas

- ⚛️ React 19
- 📘 TypeScript
- ⚡ Vite
- 🎨 TailwindCSS
- 🔄 Tanstack Query
- 📝 React Hook Form
- ✅ Zod
- 🎯 Zustand

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Yarn ou npm

### 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/desafio-pigz-front.git
cd desafio-pigz-front
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Cria a build de produção
- `yarn lint` - Executa o linter
- `yarn preview` - Visualiza a build de produção localmente

## 🏗️ Estrutura do Projeto

```
src/
├── assets/          # Recursos estáticos (imagens, ícones, fonts)
├── components/      # Componentes React organizados por atomic design
│   ├── atoms/      # Componentes básicos (botões, inputs, textos)
│   ├── molecules/  # Componentes compostos (formulários, cards)
│   ├── organisms/  # Componentes complexos (headers, sidebars)
│   └── templates/  # Layouts e estruturas de página
├── constants/       # Constantes, enums e configurações globais
├── providers/       # Providers da aplicação
│   ├── AppProvider.tsx    # Provider principal que agrupa todos os providers
│   └── QueryProvider.tsx  # Configuração do Tanstack Query
├── services/       # Serviços de API e integrações externas
├── store/          # Gerenciamento de estado global (Zustand)
└── types/          # Definições de tipos TypeScript e interfaces
```

### 📁 Detalhamento das Pastas

#### Components (Atomic Design)

- **Atoms**: Componentes fundamentais e reutilizáveis

  - Botões, inputs, textos, ícones
  - Componentes puros sem lógica de negócio
  - Altamente reutilizáveis e independentes

- **Molecules**: Combinações de atoms

  - Formulários, cards, listas
  - Pequenos grupos de componentes
  - Lógica simples e reutilizável

- **Organisms**: Componentes complexos

  - Headers, sidebars, modais
  - Combinações de molecules e atoms
  - Lógica de negócio específica

- **Templates**: Estruturas de página
  - Layouts base
  - Organização de organisms
  - Estrutura geral das páginas

### 📝 Nota sobre Organização do Atomic Design

Neste projeto de teste, todos os componentes foram organizados dentro da pasta `@/components` seguindo a estrutura do atomic design (atoms, molecules, organisms, templates). No entanto, em projetos reais, existem duas abordagens principais para organizar os componentes:

1. **Abordagem Centralizada**

   - Todos os componentes ficam em `@/components`
   - Estrutura: `@/components/{atoms|molecules|organisms|templates}`
   - Vantagens:
     - Fácil localização de componentes
     - Reutilização mais evidente
     - Consistência garantida
   - Desvantagens:
     - Pode ficar muito grande
     - Mistura componentes específicos com reutilizáveis

2. **Abordagem Híbrida**
   - Componentes reutilizáveis em `@/components`
   - Componentes específicos em `@/pages/{pageName}/components`
   - Estrutura:
     ```
     src/
     ├── components/           # Componentes reutilizáveis
     │   ├── atoms/
     │   ├── molecules/
     │   └── organisms/
     └── pages/
         └── home/
             └── components/   # Componentes específicos da página
     ```
   - Vantagens:
     - Melhor coesão
     - Mais fácil de manter
     - Evita poluição do diretório de componentes
   - Desvantagens:
     - Pode haver duplicação
     - Mais difícil de encontrar componentes

A escolha entre as abordagens deve ser feita considerando:

- Tamanho do projeto
- Equipe e suas preferências
- Complexidade dos componentes
- Necessidade de reutilização
- Padrões da empresa

#### Outras Pastas

- **Assets**: Recursos estáticos organizados por tipo

  - Imagens e SVGs
  - Fontes e ícones
  - Arquivos de mídia

- **Constants**: Configurações e valores fixos

  - Enums e constantes
  - Configurações de ambiente
  - Valores padrão

- **Providers**: Configurações e providers da aplicação

  - AppProvider: Provider principal que agrupa todos os providers
  - QueryProvider: Configuração centralizada do Tanstack Query
  - Facilita a manutenção e reutilização de configurações
  - Permite adicionar novos providers de forma organizada

- **Services**: Integrações e APIs

  - Clientes HTTP
  - Serviços de autenticação
  - Integrações com APIs externas

- **Store**: Gerenciamento de estado

  - Stores Zustand
  - Slices de estado
  - Actions e reducers

- **Types**: Definições TypeScript
  - Interfaces
  - Types
  - DTOs e modelos

## 🎯 Funcionalidades

- ✨ Interface moderna e responsiva
- 🔄 Gerenciamento de estado eficiente
- 📱 Design mobile-first
- 🎨 Estilização com TailwindCSS
- 🔒 Validação de formulários
- 🌐 Integração com API

## 📝 Licença

Este projeto é um teste técnico e não possui licença específica.

## 👨‍💻 Autor

Seu Nome - [renanolovics@gmail.com](mailto:renanolovics@gmail.com)

## 📚 Explicações do Projeto

### Arquitetura e Decisões Técnicas

- **Gerenciamento de Estado**: Utilizei Zustand por sua simplicidade e performance
- **Formulários**: React Hook Form + Zod para validação robusta e tipagem segura
- **Queries**: Tanstack Query para gerenciamento eficiente de cache e estados de loading/error com Axios
- **Estilização**: TailwindCSS para desenvolvimento rápido e consistente

### Padrões e Boas Práticas

- Componentização atômica para reuso e manutenção
- Tipagem forte com TypeScript
- Separação clara de responsabilidades
- Documentação de componentes e funções

## 🔮 Melhorias Futuras

### Performance

- Implementação de lazy loading para componentes pesados
- Otimização de imagens e assets
- Implementação de Storybook
- Melhorias no SEO

### Funcionalidades

- Internacionalização (i18n)
- Tema escuro/claro
- Animações e transições mais elaboradas

### Desenvolvimento

- Implementação de CI/CD
- Monitoramento de erros (ex: Sentry)
- Tracking de usuário com PostHog
- Testes E2E com Cypress ou Playwright
- Métricas de performance (Core Web Vitals)

### UX/UI

- Feedback visual mais elaborado
- Melhorias na acessibilidade
- Design System mais completo

### 🎨 Desenvolvimento Pixel Perfect vs Responsividade

Neste projeto, o desenvolvimento foi feito seguindo o conceito de "pixel perfect", onde a implementação deve corresponder exatamente ao design fornecido. No entanto, é importante destacar alguns pontos sobre esta abordagem:

#### Desafios do Pixel Perfect

- Designers frequentemente criam layouts para um tamanho específico de tela
- Não consideram a diversidade de dispositivos e resoluções
- Podem criar limitações para a implementação responsiva
- Podem resultar em uma experiência sub-ótima em diferentes dispositivos

#### Responsividade no Mundo Real

- Usuários acessam de diversos dispositivos:
  - Smartphones (diferentes tamanhos)
  - Tablets
  - Notebooks
  - Monitores grandes
  - Telas ultrawide
- Necessidade de adaptação fluida
- Priorização da experiência do usuário sobre fidelidade absoluta ao design

#### Recomendações para Equipes

1. **Design**

   - Fornecer breakpoints claros
   - Considerar diferentes tamanhos de tela
   - Definir comportamentos responsivos
   - Estabelecer hierarquia de elementos

2. **Desenvolvimento**

   - Manter comunicação constante com design
   - Ter liberdade para adaptações responsivas
   - Priorizar usabilidade sobre perfeição visual
   - Implementar testes em diferentes dispositivos

3. **Processo**
   - Revisões de design considerando responsividade
   - Feedback constante entre design e desenvolvimento
   - Documentação de comportamentos responsivos
   - Testes de usabilidade em diferentes dispositivos

A busca pelo pixel perfect não deve comprometer a experiência do usuário em diferentes dispositivos. É crucial encontrar um equilíbrio entre fidelidade ao design e responsividade efetiva.

### 🎯 Padrões de Projeto Utilizados

#### Atomic Design

- **Atoms**: Componentes básicos e reutilizáveis

  - Botões, inputs, ícones
  - Componentes puros sem lógica de negócio
  - Altamente reutilizáveis

- **Molecules**: Combinações de atoms

  - Formulários, cards
  - Pequenos grupos de componentes
  - Lógica simples

- **Organisms**: Componentes complexos
  - Headers, banners
  - Combinações de molecules
  - Lógica de negócio específica

#### Outros Padrões

- **Provider Pattern**

  - Centralização de configurações
  - Injeção de dependências
  - Exemplo: QueryProvider, AppProvider

- **Container/Presentational**

  - Separação de lógica e apresentação
  - Componentes puros para UI
  - Containers para lógica de negócio

- **Custom Hooks**
  - Encapsulamento de lógica reutilizável
  - Exemplo: useSearchCity, useSearchAddress
  - Separação de responsabilidades

### 🛠️ Padrões de Código e Organização

> **Nota**: Por se tratar de um projeto de teste, algumas destas práticas e padrões não foram implementados em sua totalidade. Em um projeto real, seria importante seguir estas diretrizes mais estritamente para garantir a qualidade e manutenibilidade do código.

#### Organização de Imports

1. **Ordem de Imports**

   - Imports do React primeiro
   - Bibliotecas externas em seguida
   - Imports absolutos (@/) depois
   - Imports relativos (./) por último
   - Linha em branco entre cada grupo

2. **Imports de Tipos**
   - Uso obrigatório de `import type` para tipos
   - Separação de tipos e valores
   - Exemplo:
     ```typescript
     import type { PropsWithChildren } from 'react'
     import { useState } from 'react'
     ```

#### Padrões de Código

1. **Funções**

   - Preferência por arrow functions
   - Nomes descritivos e em camelCase
   - Funções puras quando possível
   - Evitar funções aninhadas

2. **Variáveis e Constantes**

   - Nomes descritivos e em camelCase
   - Constantes em UPPER_SNAKE_CASE
   - Evitar variáveis não utilizadas
   - Tipagem explícita quando necessário

3. **Componentes**

   - Nomes em PascalCase
   - Props tipadas com interface/type
   - Componentes pequenos e focados
   - Separação de lógica e apresentação

4. **Hooks**
   - Prefixo 'use' obrigatório
   - Encapsulamento de lógica complexa
   - Evitar hooks aninhados
   - Documentação de dependências

#### Melhorias Sugeridas

1. **ESLint**

   - Regras mais estritas para imports
   - Forçar uso de arrow functions
   - Detectar variáveis não utilizadas
   - Padronização de nomenclatura
   - Prevenir imports circulares

2. **Prettier**

   - Formatação consistente
   - Ordenação automática de imports
   - Padrões de quebra de linha
   - Configuração de aspas e ponto e vírgula

3. **TypeScript**
   - Configuração mais estrita
   - Forçar tipagem explícita
   - Evitar uso de `any`
   - Melhor uso de tipos utilitários

#### Benefícios

1. **Manutenibilidade**

   - Código mais previsível
   - Menos bugs potenciais
   - Facilidade de refatoração
   - Melhor documentação implícita

2. **Produtividade**

   - Menos tempo em revisões
   - Detecção precoce de erros
   - Automação de formatação
   - Melhor experiência de desenvolvimento

3. **Qualidade**
   - Código mais robusto
   - Melhor performance
   - Menos problemas de runtime
   - Melhor experiência do usuário

---

⭐️ Desenvolvido com ❤️ para o processo seletivo da Pigz

[Ver versão em inglês](README.md)
