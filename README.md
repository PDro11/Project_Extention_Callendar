# Calendário Anual da Secretaria Municipal de Educação de Bauru

![Logo da Secretaria](public/assets/images/logo-secretaria.svg)

## Sobre o Projeto

Este projeto é um site interativo que apresenta um calendário anual de eventos e datas comemorativas importantes para a comunidade educacional de Bauru. A aplicação foi desenvolvida para a Secretaria Municipal da Educação de Bauru como uma ferramenta educativa e informativa.

O calendário permite que professores, alunos e a comunidade em geral tenham acesso a informações sobre as datas comemorativas e eventos importantes ao longo do ano, incluindo detalhes sobre cada data e sua relevância.

## Tecnologias Utilizadas

- **React** (v19.1.0): Biblioteca JavaScript para construção da interface
- **TypeScript**: Linguagem de programação tipada
- **React Router** (v7.6.2): Gerenciamento de rotas para navegação
- **Sass/SCSS**: Pré-processador CSS para estilização avançada
- **Vite**: Ferramenta de build e desenvolvimento

## Estrutura do Projeto

```
calendário-bauru-educacao/
├── public/                    # Arquivos públicos estáticos
│   ├── assets/                # Assets gerais
│   │   └── images/            # Imagens gerais como logos
│   └── images/                # Imagens específicas do projeto
│       ├── events/            # Ilustrações para eventos
│       └── months/            # Ilustrações para meses
│
├── src/                       # Código-fonte da aplicação
│   ├── components/            # Componentes React reutilizáveis
│   │   ├── EventCarousel/     # Carrossel de eventos do mês atual
│   │   ├── Header/            # Cabeçalho da aplicação
│   │   ├── Modal/             # Modal para exibir detalhes dos eventos
│   │   └── MonthCard/         # Cards dos meses do calendário
│   │
│   ├── data/                  # Dados da aplicação
│   │   ├── eventsData.ts      # Array com 21 eventos anuais
│   │   └── monthHeadersData.ts # Informações sobre os 12 meses
│   │
│   ├── pages/                 # Páginas da aplicação
│   │   ├── Home/              # Página inicial
│   │   └── MonthDetailsPage/  # Página de detalhes do mês
│   │
│   ├── styles/                # Arquivos de estilo SCSS
│   │   ├── _base.scss         # Estilos base
│   │   ├── _mixins.scss       # Mixins SCSS
│   │   ├── _variables.scss    # Variáveis de design (cores, espaçamentos)
│   │   ├── _utilities.scss    # Classes utilitárias
│   │   └── main.scss          # Arquivo principal de importação
│   │
│   ├── App.tsx                # Componente principal com rotas
│   └── main.tsx               # Ponto de entrada da aplicação
│
├── index.html                 # HTML base
├── package.json               # Dependências e scripts
├── vite.config.ts             # Configuração do Vite
└── tsconfig.json              # Configuração do TypeScript
```

## Funcionalidades

### Página Inicial

- **Carrossel de Eventos**: Exibe eventos do mês atual com navegação automática e manual
- **Seção do Mês Atual**: Destaca o mês corrente e seus eventos
- **Grade de Meses**: Exibição visual de todos os meses, organizados em futuros e anteriores
- **Cores Temáticas**: Cada mês possui uma cor e tema específicos

### Páginas de Detalhes do Mês

- **Lista de Eventos**: Mostra todos os eventos cadastrados para o mês selecionado
- **Modal Informativo**: Ao clicar em um evento, exibe detalhes completos sobre a data comemorativa:
  - O que é essa data?
  - Por que ela é importante?
  - Links para informações adicionais

### Características Técnicas

- **Design Responsivo**: Layout adaptável para dispositivos móveis, tablets e desktops
- **Acessibilidade**: Implementação de atributos aria para melhor acessibilidade 
- **Tratamento de Erros**: Imagens de fallback para recursos não encontrados
- **Navegação Intuitiva**: Facilidade de uso com feedback visual nas interações

## Eventos Incluídos

O calendário inclui 21 eventos anuais importantes, tais como:
- Dia Nacional da Visibilidade Trans (Janeiro)
- Semana Nacional de Prevenção da Gravidez na Adolescência (Fevereiro)
- Semana Municipal da Mulher (Março)
- Dia do Assistente Social (Maio)
- Dia Mundial de Conscientização da Violência Contra a Pessoa Idosa (Junho)
- Dia Mundial da Cultura e da Paz (Julho)
- Dia Nacional de Luta da População em Situação de Rua (Agosto)
- Dia Nacional de Luta da Pessoa com Deficiência (Setembro)
- Semana Municipal de Combate ao Preconceito e Discriminação (Agosto)
- Dia da Consciência Negra (Novembro)

## Temas Mensais

Cada mês apresenta um tema específico:
- Janeiro: Mês da Visibilidade e Novos Começos
- Fevereiro: Mês da Educação Inclusiva
- Março: Mês da Mulher e da Água
- Abril: Mês da Literatura e Conscientização
- Maio: Mês dos Profissionais e da Família
- Junho: Mês do Meio Ambiente e Cultura Popular
- Julho: Mês das Férias e da Amizade
- Agosto: Mês da Educação e do Folclore
- Setembro: Mês da Independência e da Primavera
- Outubro: Mês das Crianças e dos Professores
- Novembro: Mês da Consciência Negra
- Dezembro: Mês das Festividades e Reflexão

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16.x ou superior)
- npm (gerenciador de pacotes do Node)

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/calendario-bauru-educacao.git
cd calendario-bauru-educacao
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto em ambiente de desenvolvimento
```bash
npm run dev
```

4. Acesse a aplicação em [http://localhost:5173](http://localhost:5173)

### Compilação para Produção

```bash
npm run build
```

Os arquivos otimizados para produção estarão disponíveis na pasta `dist`.

## Desenvolvimento e Contribuições

### Estrutura de Dados

Para adicionar novos eventos ao calendário, edite o arquivo `src/data/eventsData.ts`. Cada evento segue a estrutura:

```typescript
{
    id: string;         // Identificador único para o evento
    month: string;      // Mês do evento (em português, minúsculo)
    day: number;        // Dia do mês
    title: string;      // Título do evento
    description: string; // Breve descrição
    details: string;    // Detalhes formatados para exibição (ex: "10 / Janeiro")
    whatIs?: string;    // Explicação sobre o que é a data
    whyIsImportant?: string; // Por que esta data é importante
    moreInfoLink?: string; // Link para informações adicionais
}
```

## Licença

Este projeto é destinado ao uso exclusivo da Secretaria Municipal da Educação de Bauru.

## Contato

**Secretaria Municipal da Educação de Bauru**
- Site: [www.bauru.sp.gov.br/educacao](https://www.bauru.sp.gov.br/educacao)
