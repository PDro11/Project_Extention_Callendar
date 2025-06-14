# Calendário Anual da Secretaria Municipal de Educação de Bauru

![Logo da Secretaria](public/assets/images/logo-secretaria.svg)

## Sobre o Projeto

Este projeto é um site interativo que apresenta um calendário anual de eventos e datas comemorativas importantes para a comunidade educacional de Bauru. A aplicação foi desenvolvida para a Secretaria Municipal da Educação de Bauru como uma ferramenta educativa e informativa.

O calendário permite que professores, alunos e a comunidade em geral tenham acesso a informações sobre as datas comemorativas e eventos importantes ao longo do ano, incluindo detalhes sobre cada data e sua relevância. Os dados são gerenciados por um backend dedicado e armazenados em um banco de dados Supabase.

## Tecnologias Utilizadas

Este projeto é uma aplicação **Fullstack**, utilizando as seguintes tecnologias:

### Frontend

-   **React** (v18.x): Biblioteca JavaScript para construção da interface.
-   **TypeScript**: Linguagem de programação tipada para maior robustez e manutenibilidade.
-   **React Router DOM** (v6.x): Gerenciamento de rotas para navegação na aplicação.
-   **Sass/SCSS**: Pré-processador CSS para estilização avançada e organizada.
-   **Vite**: Ferramenta de build e desenvolvimento, oferecendo uma experiência de desenvolvimento rápida.
-   **Axios**: Cliente HTTP baseado em Promises para fazer requisições à API do backend.
-   **TanStack Query (React Query)**: Biblioteca poderosa para gerenciamento de estado de servidor, incluindo cache, sincronização e deduplicação de requisições.

### Backend

-   **Node.js** (v18+): Ambiente de execução JavaScript para o servidor.
-   **Express**: Framework web minimalista para Node.js, utilizado para construir a API RESTful.
-   **TypeScript**: Utilizado para desenvolver o código do backend.
-   **dotenv**: Biblioteca para carregar variáveis de ambiente de um arquivo `.env`.
-   **cors**: Middleware Express para habilitar o Cross-Origin Resource Sharing (CORS).
-   **Jest**: Framework de testes JavaScript para testes unitários do backend.
-   **ts-jest**: Plugin Jest para TypeScript.

### Banco de Dados e Conexão

-   **Supabase (PostgreSQL)**: Plataforma de Backend-as-a-Service (BaaS) que oferece um banco de dados PostgreSQL robusto e escalável. É o serviço de banco de dados principal.
-   **`@supabase/supabase-js`**: O SDK JavaScript oficial do Supabase, utilizado no backend para interagir com o banco de dados.

## Estrutura do Projeto

Project_Extention_Callendar/
├── backend/                  # Código-fonte do backend (API)
│   ├── src/                  # Código-fonte da API
│   │   ├── config/           # Configurações (do Supabase)
│   │   ├── controllers/      # Lida com requisições HTTP (EventController, MonthHeaderController)
│   │   ├── interfaces/       # Definições de interfaces (Event, MonthHeader, Database)
│   │   ├── models/           # Interação direta com o banco de dados (EventModel, MonthHeaderModel)
│   │   ├── routes/           # Definição das rotas da API
│   │   ├── services/         # Lógica de negócio (EventService, MonthHeaderService)
│   │   └── app.ts            # Ponto de entrada da aplicação Express
│   ├── tests/                # Testes unitários do backend
│   └── package.json          # Dependências e scripts do backend
│
├── frontend/                 # Código-fonte do frontend (Interface do Usuário)
│   ├── public/               # Arquivos públicos estáticos
│   ├── src/                  # Código-fonte da aplicação React
│   │   ├── api/              # Módulo para chamadas à API do backend
│   │   ├── components/       # Componentes React reutilizáveis
│   │   ├── interfaces/       # Interfaces de dados para o frontend
│   │   ├── pages/            # Páginas da aplicação
│   │   ├── styles/           # Arquivos de estilo SCSS
│   │   ├── App.tsx           # Componente principal com rotas
│   │   └── main.tsx          # Ponto de entrada da aplicação
│   ├── .npmrc                # Configurações específicas do npm
│   ├── eslint.config.js      # Regras e plugins do ESLint
│   ├── index.html            # HTML base usado pelo Vite no build da SPA
│   ├── package-lock.json     # Lockfile para garantir versões exatas de dependências
│   ├── package.json          # Dependências, scripts e metadados do projeto
│   ├── tsconfig.app.json     # Configuração TypeScript para a aplicação
│   ├── tsconfig.json         # Configuração base do TypeScript
│   ├── tsconfig.node.json    # Configuração TypeScript para scripts Node (ex: lint, tools)
│   └── vite.config.ts        # Configuração do Vite para build/dev
│
├── .gitignore                # Arquivos e pastas ignorados pelo Git
└── README.md                 # Documentação e instruções do projeto

## Funcionalidades

### Página Inicial

-   **Carrossel de Eventos**: Exibe eventos do mês atual, buscando apenas os dados necessários do backend.
-   **Seção do Mês Atual**: Destaca o mês corrente e seus eventos.
-   **Grade de Meses**: Exibição visual de todos os meses, organizados em futuros e anteriores.
-   **Cores Temáticas**: Cada mês possui uma cor e tema específicos.

### Páginas de Detalhes do Mês

-   **Lista de Eventos**: Mostra todos os eventos cadastrados para o mês selecionado, buscando os dados filtrados diretamente do backend.
-   **Modal Informativo**: Ao clicar em um evento, exibe detalhes completos sobre a data comemorativa:
    -   O que é essa data?
    -   Por que ela é importante?
    -   Links para informações adicionais

### Características Técnicas

-   **Design Responsivo**: Layout adaptável para dispositivos móveis, tablets e desktops.
-   **Acessibilidade**: Implementação de atributos aria para melhor acessibilidade.
-   **Tratamento de Erros**: Imagens de fallback para recursos não encontrados e mensagens de erro na interface para requisições de dados.
-   **Navegação Intuitiva**: Facilidade de uso com feedback visual nas interações.
-   **Otimização de Busca de Dados**: Utilização do TanStack Query no frontend para cache, deduplicação de requisições e gerenciamento eficiente do estado assíncrono. O backend agora filtra os eventos por mês, reduzindo a carga de dados.

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

## Como Executar o Projeto Localmente

### Pré-requisitos

-   **Node.js** (versão 18.x ou superior)
-   **npm** (gerenciador de pacotes do Node - já vem com o Node.js)
-   **Conta e Projeto Supabase Configurados**:
    -   Certifique-se de ter um projeto Supabase com as tabelas `events` e `month_headers` criadas conforme a documentação abaixo.
    -   As políticas de Row Level Security (RLS) para `ALL` devem estar habilitadas para a role `anon`.
    -   Seu arquivo `backend/.env` deve estar configurado com `SUPABASE_URL` e `SUPABASE_ANON_KEY`.
    -   Os dados iniciais devem ser inseridos nas tabelas `events` e `month_headers` no Supabase (via SQL Editor), conforme queries documentadas abaixo.

### Configuração do Banco de Dados (Supabase)

Para configurar as tabelas e popular o banco de dados no Supabase, você pode executar as seguintes queries SQL no **SQL Editor** do seu projeto Supabase.

---

### **1. Tabela: `events`**

#### **DROP TABLE (Opcional - Use com Cautela!)**
-- CUIDADO: Este comando apaga a tabela 'events' e TODOS os seus dados.
-- Remova o comentário (--) da linha abaixo se você realmente deseja recriar a tabela.

```sql
-- DROP TABLE IF EXISTS public.events;
```

#### **CREATE TABLE**

```sql
-- Cria a tabela 'events' com a estrutura definida para os eventos.
CREATE TABLE public.events (
    id text PRIMARY KEY,
    month text NOT NULL,
    day int4 NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    details text NOT NULL,
    type text,
    "whatIs" text,
    "whyIsImportant" text,
    "moreInfoLink" text
);

-- Opcional: Adicionar índices para otimização de buscas por 'month' e 'day'.
-- CREATE INDEX idx_events_month ON public.events (month);
-- CREATE INDEX idx_events_day ON public.events (day);

```

#### **INSERTS (Registros Iniciais)**

```sql
-- Popula a tabela 'events' com os dados iniciais do calendário.
INSERT INTO public.events (id, month, day, title, description, details, type, "whatIs", "whyIsImportant", "moreInfoLink") VALUES
('visibilidade-trans', 'janeiro', 29, 'Dia Nacional da Visibilidade Trans', 'Conscientização sobre os direitos e dignidade das pessoas trans', '29 / Janeiro', 'Direitos Humanos', 'Criado em 2004, após o lançamento da campanha "Travesti e Respeito" no Congresso Nacional, o dia visa promover a conscientização sobre os direitos e a dignidade das pessoas trans e travestis no Brasil.', 'A data destaca a luta contra a transfobia e a importância da inclusão e respeito à diversidade de identidade de gênero.', '[https://www.gov.br/turismo/pt-br/assuntos/noticias/dia-nacional-da-visibilidade-trans-ministerio-do-turismo-destaca-material-de-apoio-para-um-turismo-mais-inclusivo](https://www.gov.br/turismo/pt-br/assuntos/noticias/dia-nacional-da-visibilidade-trans-ministerio-do-turismo-destaca-material-de-apoio-para-um-turismo-mais-inclusivo)'),
('gravidez-adolescencia', 'fevereiro', 1, 'Semana Nacional de Prevenção da Gravidez na Adolescência', 'Disseminação de informações sobre prevenção da gravidez na adolescência', '1ª Semana / Fevereiro', 'Saúde', 'Instituída pela Lei nº 13.798/2019, a semana tem como objetivo disseminar informações sobre medidas preventivas e educativas para reduzir a incidência da gravidez na adolescência.', 'A campanha busca sensibilizar adolescentes, famílias e profissionais de saúde sobre os riscos e consequências da gravidez precoce.', '[https://bvsms.saude.gov.br/01-a-08-02-semana-nacional-de-prevencao-da-gravidez-na-adolescencia/](https://bvsms.saude.gov.br/01-a-08-02-semana-nacional-de-prevencao-da-gravidez-na-adolescencia/)'),
('dia-mulher', 'março', 8, 'Semana Municipal da Mulher', 'Celebração das conquistas e luta por direitos das mulheres', '08 / Março', 'Direitos Humanos', 'Celebrado mundialmente, o Dia Internacional da Mulher destaca as conquistas sociais, políticas e econômicas das mulheres, além de reforçar a luta por igualdade de gênero.', 'Em Bauru, a Semana Municipal da Mulher promove eventos e atividades voltadas ao empoderamento feminino e à conscientização sobre os direitos das mulheres.', '[https://www2.bauru.sp.gov.br/materia.aspx?n=45837](https://www2.bauru.sp.gov.br/materia.aspx?n=45837)'),
('alienacao-parental', 'abril', 25, 'Semana Municipal de Alienação Parental', 'Conscientização sobre os efeitos da alienação parental', '25 / Abril', 'Educação', 'A data visa alertar sobre a alienação parental, que ocorre quando um dos genitores manipula a criança para que rejeite o outro genitor, prejudicando o vínculo afetivo.', 'Em Bauru, a semana é marcada por palestras e debates para conscientizar sobre os efeitos negativos dessa prática.', '[https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12318.htm](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12318.htm)'),
('assistente-social', 'maio', 15, 'Dia do Assistente Social', 'Celebração do dia do Assistente Social', '15 / Maio', 'Profissional', 'Comemorado em 15 de maio, o Dia do Assistente Social celebra os profissionais que atuam na promoção do bem-estar social, lutando pelos direitos humanos e por melhores condições de vida para grupos sociais vulneráveis.', 'A profissão é regulamentada pela Lei Federal nº 8.662/1993 e desempenha um papel fundamental na elaboração e execução de políticas sociais que visam à inclusão e à justiça social.', '[http://www.cfess.org.br/](http://www.cfess.org.br/)'),
('combate-abuso', 'maio', 18, 'Semana Municipal de Combate ao Abuso e Exploração Sexual de Crianças e Adolescentes', 'Luta contra o abuso e exploração sexual infantil', '18 / Maio', 'Direitos Humanos', 'Instituído pela Lei Federal nº 9.970/2000, o dia homenageia a memória de Araceli Crespo, vítima de violência sexual e assassinato em 1973.', 'A data busca mobilizar a sociedade para a proteção dos direitos das crianças e adolescentes.', '[https://www.planalto.gov.br/ccivil_03/leis/l9970.htm](https://www.planalto.gov.br/ccivil_03/leis/l9970.htm)'),
('trabalho-infantil', 'junho', 12, 'Semana Municipal de Prevenção e Erradicação do Trabalho Infantil', 'Combate ao trabalho infantil', '12 / Junho', 'Direitos Humanos', 'A data destaca a importância de combater o trabalho infantil, que compromete o desenvolvimento físico, emocional e educacional das crianças.', 'Em Bauru, são realizadas atividades educativas para sensibilizar a população sobre os prejuízos dessa prática.', '[https://www2.bauru.sp.gov.br/materia.aspx?n=43052](https://www2.bauru.sp.gov.br/materia.aspx?n=43052)'),
('violencia-idoso', 'junho', 15, 'Dia Mundial de Conscientização da Violência Contra a Pessoa Idosa', 'Combate à violência contra idosos', '15 / Junho', 'Direitos Humanos', 'Estabelecido pela ONU, o dia visa chamar a atenção para a existência de abusos físicos, emocionais e financeiros contra idosos.', 'Promove ações de prevenção e combate a essas violações contra as pessoas idosas.', '[https://www.tjdft.jus.br/acessibilidade/publicacoes/sementes-da-equidade/15-de-junho-e-o-dia-mundial-de-conscientizacao-sobre-a-violencia-contra-a-pessoa-idosa](https://www.tjdft.jus.br/acessibilidade/publicacoes/sementes-da-equidade/15-de-junho-e-o-dia-mundial-de-conscientizacao-sobre-a-violencia-contra-a-pessoa-idosa)'),
('cultura-paz', 'julho', 25, 'Dia Mundial da Cultura e da Paz', 'Promoção da cultura de paz e respeito à diversidade', '25 / Julho', 'Cultura', 'Instituído pela Lei Municipal nº 6.364/2013 em Bauru, a data promove atividades culturais e educativas.', 'Incentiva a cultura de paz e o respeito à diversidade na comunidade.', '[https://www.bauru.sp.gov.br/cultura](https://www.bauru.sp.gov.br/cultura)'),
('aniversario-bauru', 'agosto', 1, 'Aniversário de Bauru', 'Celebração do aniversário da cidade', '01 / Agosto', 'Cultura', 'A cidade de Bauru celebra seu aniversário com eventos culturais, shows e atividades comunitárias.', 'Fortalece o sentimento de pertencimento e valorização da história local.', '[https://www.bauru.sp.gov.br/](https://www.bauru.sp.gov.br/)'),
('situacao-rua', 'agosto', 19, 'Dia Nacional de Luta da População em Situação de Rua', 'Visibilidade às pessoas em situação de rua', '19 / Agosto', 'Direitos Humanos', 'A data rememora o "Massacre da Sé" de 2004, quando pessoas em situação de rua foram brutalmente atacadas em São Paulo.', 'Visa dar visibilidade a essa população e promover políticas públicas de inclusão.', '[https://www.gov.br/saude/pt-br/assuntos/noticias/2024/agosto/dia-nacional-de-luta-da-populacao-em-situacao-de-rua-e-perspectivas-sao-debatidos-por-comite](https://www.gov.br/saude/pt-br/assuntos/noticias/2024/agosto/dia-nacional-de-luta-da-populacao-em-situacao-de-rua-e-perspectivas-sao-debatidos-por-comite)'),
('combate-preconceito', 'agosto', 20, 'Semana Municipal de Combate ao Preconceito e Discriminação', 'Ações contra o preconceito e discriminação', '20 / Agosto', 'Direitos Humanos', 'Em Bauru, a semana é dedicada a ações educativas e culturais.', 'Promove a igualdade e combate todas as formas de discriminação.', '[https://www2.bauru.sp.gov.br/materia.aspx?n=39059](https://www2.bauru.sp.gov.br/materia.aspx?n=39059)'),
('psicologo', 'agosto', 27, 'Dia do Psicólogo', 'Homenagem aos profissionais da psicologia', '27 / Agosto', 'Profissional', 'O Dia do Psicólogo é celebrado em 27 de agosto, data que marca a regulamentação da profissão no Brasil pela Lei nº 4.119, de 1962. A Psicologia é uma ciência que estuda os processos mentais e o comportamento humano.', 'Os psicólogos atuam em diversas áreas, como saúde, educação, trabalho e justiça, contribuindo para o desenvolvimento individual e coletivo.', '[https://site.cfp.org.br/](https://site.cfp.org.br/)'),
('pessoa-deficiencia', 'setembro', 21, 'Dia Nacional de Luta da Pessoa com Deficiência', 'Luta pelos direitos das pessoas com deficiência', '21 / Setembro', 'Direitos Humanos', 'Instituído pela Lei nº 11.133/2005, o Dia Nacional de Luta da Pessoa com Deficiência é celebrado em 21 de setembro com o objetivo de conscientizar a sociedade sobre a importância da inclusão e do respeito aos direitos das pessoas com deficiência.', 'A data simboliza o início da primavera, representando o nascimento das reivindicações por igualdade e participação plena na sociedade.', '[https://legislacao.presidencia.gov.br/ficha/?/legisla/legislacao.nsf/Viw_Identificacao/lei%2011.133-2005&OpenDocument](https://legislacao.presidencia.gov.br/ficha/?/legisla/legislacao.nsf/Viw_Identificacao/lei%2011.133-2005&OpenDocument)'),
('idoso', 'setembro', 27, 'Dia Nacional do Idoso', 'Valorização das pessoas idosas', '27 / Setembro', 'Direitos Humanos', 'A data celebra os direitos e a valorização das pessoas idosas.', 'Promove atividades que incentivam o envelhecimento ativo e saudável.', '[https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm](https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm)'),
('artes-sem-barreiras', 'outubro', 15, 'Mostra de Artes Sem Barreiras', 'Evento cultural inclusivo', 'Outubro', 'Cultura', 'Evento cultural que destaca a produção artística de pessoas com deficiência.', 'Promove a inclusão e a valorização da diversidade.', '[https://www.bauru.sp.gov.br/cultura](https://www.bauru.sp.gov.br/cultura)'),
('seguranca-alimentar', 'outubro', 16, 'Semana Municipal de Segurança Alimentar e Nutricional', 'Promoção da segurança alimentar', '16 / Outubro', 'Saúde', 'A data chama a atenção para questões relacionadas à alimentação saudável, segurança alimentar e combate à fome.', 'Em Bauru, são realizadas palestras e oficinas sobre o tema.', '[https://www2.bauru.sp.gov.br/materia.aspx?n=45292](https://www2.bauru.sp.gov.br/materia.aspx?n=45292)'),
('consciencia-negra', 'novembro', 20, 'Dia Nacional da Consciência Negra', 'Reflexão sobre a igualdade racial', '20 / Novembro', 'Direitos Humanos', 'Comemora a resistência de Zumbi dos Palmares e dos africanos escravizados.', 'É um momento de reflexão sobre a igualdade racial e o combate ao racismo.', '[https://www.gov.br/palmares/pt-br](https://www.gov.br/palmares/pt-br)'),
('violencia-mulheres', 'novembro', 25, 'Dia Internacional para a Eliminação da Violência Contra as Mulheres', 'Combate à violência contra mulheres', '25 / Novembro', 'Direitos Humanos', 'A data foi escolhida em memória às irmãs Mirabal, assassinadas na República Dominicana.', 'Visa alertar para a violência de gênero e promover ações de combate a esse tipo de violência.', '[https://www.onumulheres.org.br/noticias/naotemdesculpa-una-se-2024/](https://www.onumulheres.org.br/noticias/naotemdesculpa-una-se-2024/)'),
('direitos-humanos', 'dezembro', 10, 'Dia Internacional dos Direitos Humanos', 'Conscientização sobre direitos fundamentais', '10 / Dezembro', 'Direitos Humanos', 'Celebra a data de adoção da Declaração Universal dos Direitos Humanos pela ONU em 1948.', 'Promove a reflexão sobre os direitos fundamentais e inalienáveis de todos os seres humanos.', '[https://www.gov.br/mdh/pt-br/navegue-por-temas/dudh70/a-declaracao](https://www.gov.br/mdh/pt-br/navegue-por-temas/dudh70/a-declaracao)'),
('combate-pobreza', 'dezembro', 14, 'Dia Nacional de Combate à Pobreza', 'Sensibilização para a erradicação da pobreza', '14 / Dezembro', 'Direitos Humanos', 'A data busca chamar a atenção para as desigualdades sociais e a necessidade de políticas públicas efetivas para o combate à pobreza.', 'Promove a reflexão sobre a importância de garantir condições dignas de vida para toda a população.', '[https://www.ipea.gov.br/ods/ods1.html](https://www.ipea.gov.br/ods/ods1.html)');

```

----------

### **2. Tabela: `month_headers`**

#### **DROP TABLE (Opcional - Use com Cautela!)**
-- CUIDADO: Este comando apaga a tabela 'month_headers' e TODOS os seus dados.
-- Remova o comentário (--) da linha abaixo se você realmente deseja recriar a tabela.

```sql
-- DROP TABLE IF EXISTS public.month_headers;

```

#### **CREATE TABLE**

```sql
-- Cria a tabela 'month_headers' com a estrutura definida para os cabeçalhos dos meses.
CREATE TABLE public.month_headers (
    id int4 PRIMARY KEY,
    name text NOT NULL,
    theme text NOT NULL,
    "colorClass" text NOT NULL,
    "illustrationUrl" text NOT NULL
);

```

#### **INSERTS (Registros Iniciais)**

```sql
-- Popula a tabela 'month_headers' com os dados iniciais dos meses.
INSERT INTO public.month_headers (id, name, theme, "colorClass", "illustrationUrl") VALUES
(1, 'Janeiro', 'Mês da Visibilidade e Novos Começos', 'month-january', '/images/png/events/visibilidade-trans.png'),
(2, 'Fevereiro', 'Mês da Educação Inclusiva', 'month-february', '/images/png/events/prevencao-gravidez.png'),
(3, 'Março', 'Mês da Mulher e da Água', 'month-march', '[https://bauru.sp.gov.br/public/uploads/imagens/noticias/simbolo-feminino_1709848529.png](https://bauru.sp.gov.br/public/uploads/imagens/noticias/simbolo-feminino_1709848529.png)'),
(4, 'Abril', 'Mês da Literatura e Conscientização', 'month-april', '/images/png/events/alienacao-parental.png'),
(5, 'Maio', 'Mês dos Profissionais e da Família', 'month-may', '/images/png/events/combate-abuso-infantil.png'),
(6, 'Junho', 'Mês do Meio Ambiente e Cultura Popular', 'month-june', '/images/png/events/trabalho-infantil.png'),
(7, 'Julho', 'Mês das Férias e da Amizade', 'month-july', '/images/png/events/cultura-e-paz.png'),
(8, 'Agosto', 'Mês da Educação e do Folclore', 'month-august', '/images/png/events/aniversario-bauru.png'),
(9, 'Setembro', 'Mês da Independência e da Primavera', 'month-september', '/images/png/events/idoso.png'),
(10, 'Outubro', 'Mês das Crianças e dos Professores', 'month-october', '/images/png/events/artes-sem-barreiras.png'),
(11, 'Novembro', 'Mês da Consciência Negra', 'month-november', '/images/png/events/consciencia-negra.png'),
(12, 'Dezembro', 'Mês das Festividades e Reflexão', 'month-december', '/images/png/events/direitos-humanos.png');

```

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/PDro11/Project_Extention_Callendar.git](https://github.com/PDro11/Project_Extention_Callendar.git)
    cd Project_Extention_Callendar
    ```
2.  **Instale as dependências:**
    Primeiramente, No diretório **backend/**, execute o seguinte comando. Ele instalará as dependências do projeto do backend e iniciará o back em modo desenvolvimento na porta 3001:
    ```bash
    cd backend/
    npm install
    npm run dev
    ```
    Após isso, aparecerá as seguintes mensagens se rodou com sucesso:
    ```bash
    Supabase client initialized.
    Server is running on port 3001
    ```

    Depois, No diretório **frontend/**, execute o mesmo comando. Ele instalará as dependências do projeto do frontend e iniciará o front em modo de desenvolvimento na porta 5173:
    ```bash
    cd ../frontend/
    npm install
    npm run dev
    ```
    Após isso, aparecerá a seguintes mensagens se rodou com sucesso:
    ```
    VITE v5.4.19  ready in 2601 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: http://192.168.15.11:5173/
    ➜  press h + enter to show help
    ```

3.  **Acesse a aplicação no navegador:**
    Após o script `npm run dev` ser iniciado, o frontend estará acessível em:
    [http://localhost:5173](http://localhost:5173) (ou a porta que você configurou).

### Compilação para Produção

Para compilar o front e no back para produção:

```bash
cd backend/
npm run build

cd ../frontend/
npm run build
```

Os arquivos otimizados para produção estarão disponíveis na pasta frontend/dist. O backend também precisa ser compilado e hospedado separadamente.

## Como Testar as Rotas do Backend (Postman/Insomnia)
Você pode testar as rotas da API do backend diretamente usando ferramentas como Postman ou Insomnia. O backend estará acessível em `http://localhost:3001` quando rodar `npm run dev` (seja via script `start-dev.js` ou diretamente).

Todos os endpoints estão prefixados com `/api`. Utilize `http://localhost:3001/api` como URL base.

### Eventos (`/api/events`)

  - **`GET http://localhost:3001/api/events`**: Retorna uma lista de **todos** os eventos.
  - **`GET http://localhost:3001/api/events?month=janeiro`**: Retorna eventos **filtrados por mês**. O nome do mês deve ser em minúsculas e no formato português (e.g., `janeiro`, `fevereiro`).
      - Exemplo: `GET http://localhost:3001/api/events?month=março`
  - **`GET http://localhost:3001/api/events/:id`**: Retorna um evento específico pelo ID.
      - Exemplo: `GET http://localhost:3001/api/events/visibilidade-trans`
  - **`POST http://localhost:3001/api/events`**: Cria um novo evento.
      - Método: `POST`
      - Body (Raw JSON):
        ```json
        {
            "month": "dezembro",
            "day": 31,
            "title": "Véspera de Ano Novo",
            "description": "Celebração da virada do ano",
            "details": "31 / Dezembro",
            "type": "Cultura",
            "whatIs": "Último dia do ano, celebrado com festas e fogos de artifício.",
            "whyIsImportant": "Marca o fim de um ciclo e o início de um novo.",
            "moreInfoLink": "https://pt.wikipedia.org/wiki/V%C3%A9spera_de_Ano_Novo"
        }
        ```
  - **`PUT http://localhost:3001/api/events/:id`**: Atualiza um evento existente pelo ID.
      - Método: `PUT`
      - URL Exemplo: `http://localhost:3001/api/events/visibilidade-trans`
      - Body (Raw JSON - apenas os campos a atualizar):
        ```json
        {
            "title": "Dia Nacional da Visibilidade Trans (Atualizado)",
            "description": "Nova descrição para o evento de visibilidade trans."
        }
        ```
  - **`DELETE http://localhost:3001/api/events/:id`**: Deleta um evento pelo ID.
      - Método: `DELETE`
      - URL Exemplo: `http://localhost:3001/api/events/novo-evento-teste` (use um ID de um evento que você criou para testar)

### Cabeçalhos de Meses (`/api/month-headers`)

  - **`GET http://localhost:3001/api/month-headers`**: Retorna uma lista de todos os cabeçalhos de meses.
      - Exemplo: `GET http://localhost:3001/api/month-headers`
  - **`GET http://localhost:3001/api/month-headers/:id`**: Retorna um cabeçalho de mês específico pelo ID.
      - Exemplo: `GET http://localhost:3001/api/month-headers/1` (para Janeiro)
  - **`POST http://localhost:3001/api/month-headers`**: Cria um novo cabeçalho de mês. -> **rota inativada por segurança**
      - Método: `POST`
      - Body (Raw JSON):
        ```json
        {
            "name": "Mês Teste",
            "theme": "Tema de Teste",
            "colorClass": "month-test",
            "illustrationUrl": "/images/png/events/test.png"
        }
        ```
  - **`PUT http://localhost:3001/api/month-headers/:id`**: Atualiza um cabeçalho de mês existente pelo ID.
      - Método: `PUT`
      - URL Exemplo: `http://localhost:3001/api/month-headers/1`
      - Body (Raw JSON):
        ```json
        {
            "theme": "Novo Tema para Janeiro"
        }
        ```
  - **`DELETE http://localhost:3001/api/month-headers/:id`**: Deleta um cabeçalho de mês pelo ID. -> **rota inativada por segurança**
      - Método: `DELETE`
      - URL Exemplo: `http://localhost:3001/api/month-headers/13` (se você criou um com ID 13)


## Desenvolvimento e Contribuições

## Licença

Este projeto é destinado ao uso exclusivo da Secretaria Municipal da Educação de Bauru.

## Contato

**Secretaria Municipal da Educação de Bauru**
- Site: [www.bauru.sp.gov.br/educacao](https://www.bauru.sp.gov.br/educacao)
