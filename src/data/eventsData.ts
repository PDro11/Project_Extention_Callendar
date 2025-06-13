export interface Event {
    id: string;
    month: string;
    day: number;
    title: string;
    description: string;
    details: string;
    type?: string; // Tipo do evento (ex: ambiental, cultural, educacional)
    whatIs?: string;
    whyIsImportant?: string;
    moreInfoLink?: string;
}

export const eventsData: Event[] = [
    // Janeiro
    {
        id: 'visibilidade-trans',
        month: 'janeiro',
        day: 29,
        title: 'Dia Nacional da Visibilidade Trans',
        description: 'Conscientização sobre os direitos e dignidade das pessoas trans',
        details: '29 / Janeiro',
        type: 'Direitos Humanos',
        whatIs: 'Criado em 2004, após o lançamento da campanha "Travesti e Respeito" no Congresso Nacional, o dia visa promover a conscientização sobre os direitos e a dignidade das pessoas trans e travestis no Brasil.',
        whyIsImportant: 'A data destaca a luta contra a transfobia e a importância da inclusão e respeito à diversidade de identidade de gênero.',
        moreInfoLink: 'https://www.gov.br/turismo/pt-br/assuntos/noticias/dia-nacional-da-visibilidade-trans-ministerio-do-turismo-destaca-material-de-apoio-para-um-turismo-mais-inclusivo'
    },

    // Fevereiro
    {
        id: 'gravidez-adolescencia',
        month: 'fevereiro',
        day: 1,
        title: 'Semana Nacional de Prevenção da Gravidez na Adolescência',
        description: 'Disseminação de informações sobre prevenção da gravidez na adolescência',
        details: '1ª Semana / Fevereiro',
        type: 'Saúde',
        whatIs: 'Instituída pela Lei nº 13.798/2019, a semana tem como objetivo disseminar informações sobre medidas preventivas e educativas para reduzir a incidência da gravidez na adolescência.',
        whyIsImportant: 'A campanha busca sensibilizar adolescentes, famílias e profissionais de saúde sobre os riscos e consequências da gravidez precoce.',
        moreInfoLink: 'https://bvsms.saude.gov.br/01-a-08-02-semana-nacional-de-prevencao-da-gravidez-na-adolescencia/'
    },

    // Março
    {
        id: 'dia-mulher',
        month: 'março',
        day: 8,
        title: 'Semana Municipal da Mulher',
        description: 'Celebração das conquistas e luta por direitos das mulheres',
        details: '08 / Março',
        type: 'Direitos Humanos',
        whatIs: 'Celebrado mundialmente, o Dia Internacional da Mulher destaca as conquistas sociais, políticas e econômicas das mulheres, além de reforçar a luta por igualdade de gênero.',
        whyIsImportant: 'Em Bauru, a Semana Municipal da Mulher promove eventos e atividades voltadas ao empoderamento feminino e à conscientização sobre os direitos das mulheres.',
        moreInfoLink: 'https://www2.bauru.sp.gov.br/materia.aspx?n=45837'
    },

    // Abril
    {
        id: 'alienacao-parental',
        month: 'abril',
        day: 25,
        title: 'Semana Municipal de Alienação Parental',
        description: 'Conscientização sobre os efeitos da alienação parental',
        details: '25 / Abril',
        type: 'Educação',
        whatIs: 'A data visa alertar sobre a alienação parental, que ocorre quando um dos genitores manipula a criança para que rejeite o outro genitor, prejudicando o vínculo afetivo.',
        whyIsImportant: 'Em Bauru, a semana é marcada por palestras e debates para conscientizar sobre os efeitos negativos dessa prática.',
        moreInfoLink: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12318.htm'
    },

    // Maio
    {
        id: 'assistente-social',
        month: 'maio',
        day: 15,
        title: 'Dia do Assistente Social',
        description: 'Celebração do dia do Assistente Social',
        details: '15 / Maio',
        type: 'Profissional',
        whatIs: 'Comemorado em 15 de maio, o Dia do Assistente Social celebra os profissionais que atuam na promoção do bem-estar social, lutando pelos direitos humanos e por melhores condições de vida para grupos sociais vulneráveis.',
        whyIsImportant: 'A profissão é regulamentada pela Lei Federal nº 8.662/1993 e desempenha um papel fundamental na elaboração e execução de políticas sociais que visam à inclusão e à justiça social.',
        moreInfoLink: 'http://www.cfess.org.br/'
    },
    {
        id: 'combate-abuso',
        month: 'maio',
        day: 18,
        title: 'Semana Municipal de Combate ao Abuso e Exploração Sexual de Crianças e Adolescentes',
        description: 'Luta contra o abuso e exploração sexual infantil',
        details: '18 / Maio',
        type: 'Direitos Humanos',
        whatIs: 'Instituído pela Lei Federal nº 9.970/2000, o dia homenageia a memória de Araceli Crespo, vítima de violência sexual e assassinato em 1973.',
        whyIsImportant: 'A data busca mobilizar a sociedade para a proteção dos direitos das crianças e adolescentes.',
        moreInfoLink: 'https://www.planalto.gov.br/ccivil_03/leis/l9970.htm'
    },

    // Junho
    {
        id: 'trabalho-infantil',
        month: 'junho',
        day: 12,
        title: 'Semana Municipal de Prevenção e Erradicação do Trabalho Infantil',
        description: 'Combate ao trabalho infantil',
        details: '12 / Junho',
        type: 'Direitos Humanos',
        whatIs: 'A data destaca a importância de combater o trabalho infantil, que compromete o desenvolvimento físico, emocional e educacional das crianças.',
        whyIsImportant: 'Em Bauru, são realizadas atividades educativas para sensibilizar a população sobre os prejuízos dessa prática.',
        moreInfoLink: 'https://www2.bauru.sp.gov.br/materia.aspx?n=43052'
    },
    {
        id: 'violencia-idoso',
        month: 'junho',
        day: 15,
        title: 'Dia Mundial de Conscientização da Violência Contra a Pessoa Idosa',
        description: 'Combate à violência contra idosos',
        details: '15 / Junho',
        type: 'Direitos Humanos',
        whatIs: 'Estabelecido pela ONU, o dia visa chamar a atenção para a existência de abusos físicos, emocionais e financeiros contra idosos.',
        whyIsImportant: 'Promove ações de prevenção e combate a essas violações contra as pessoas idosas.',
        moreInfoLink: 'https://www.tjdft.jus.br/acessibilidade/publicacoes/sementes-da-equidade/15-de-junho-e-o-dia-mundial-de-conscientizacao-sobre-a-violencia-contra-a-pessoa-idosa'
    },

    // Julho
    {
        id: 'cultura-paz',
        month: 'julho',
        day: 25,
        title: 'Dia Mundial da Cultura e da Paz',
        description: 'Promoção da cultura de paz e respeito à diversidade',
        details: '25 / Julho',
        type: 'Cultura',
        whatIs: 'Instituído pela Lei Municipal nº 6.364/2013 em Bauru, a data promove atividades culturais e educativas.',
        whyIsImportant: 'Incentiva a cultura de paz e o respeito à diversidade na comunidade.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/cultura'
    },

    // Agosto
    {
        id: 'aniversario-bauru',
        month: 'agosto',
        day: 1,
        title: 'Aniversário de Bauru',
        description: 'Celebração do aniversário da cidade',
        details: '01 / Agosto',
        type: 'Cultura',
        whatIs: 'A cidade de Bauru celebra seu aniversário com eventos culturais, shows e atividades comunitárias.',
        whyIsImportant: 'Fortalece o sentimento de pertencimento e valorização da história local.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/'
    },
    {
        id: 'situacao-rua',
        month: 'agosto',
        day: 19,
        title: 'Dia Nacional de Luta da População em Situação de Rua',
        description: 'Visibilidade às pessoas em situação de rua',
        details: '19 / Agosto',
        type: 'Direitos Humanos',
        whatIs: 'A data rememora o "Massacre da Sé" de 2004, quando pessoas em situação de rua foram brutalmente atacadas em São Paulo.',
        whyIsImportant: 'Visa dar visibilidade a essa população e promover políticas públicas de inclusão.',
        moreInfoLink: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2024/agosto/dia-nacional-de-luta-da-populacao-em-situacao-de-rua-e-perspectivas-sao-debatidos-por-comite'
    },
    {
        id: 'combate-preconceito',
        month: 'agosto',
        day: 20,
        title: 'Semana Municipal de Combate ao Preconceito e Discriminação',
        description: 'Ações contra o preconceito e discriminação',
        details: '20 / Agosto',
        type: 'Direitos Humanos',
        whatIs: 'Em Bauru, a semana é dedicada a ações educativas e culturais.',
        whyIsImportant: 'Promove a igualdade e combate todas as formas de discriminação.',
        moreInfoLink: 'https://www2.bauru.sp.gov.br/materia.aspx?n=39059'
    },
    {
        id: 'psicologo',
        month: 'agosto',
        day: 27,
        title: 'Dia do Psicólogo',
        description: 'Homenagem aos profissionais da psicologia',
        details: '27 / Agosto',
        type: 'Profissional',
        whatIs: 'O Dia do Psicólogo é celebrado em 27 de agosto, data que marca a regulamentação da profissão no Brasil pela Lei nº 4.119, de 1962. A Psicologia é uma ciência que estuda os processos mentais e o comportamento humano.',
        whyIsImportant: 'Os psicólogos atuam em diversas áreas, como saúde, educação, trabalho e justiça, contribuindo para o desenvolvimento individual e coletivo.',
        moreInfoLink: 'https://site.cfp.org.br/'
    },

    // Setembro
    {
        id: 'pessoa-deficiencia',
        month: 'setembro',
        day: 21,
        title: 'Dia Nacional de Luta da Pessoa com Deficiência',
        description: 'Luta pelos direitos das pessoas com deficiência',
        details: '21 / Setembro',
        type: 'Direitos Humanos',
        whatIs: 'Instituído pela Lei nº 11.133/2005, o Dia Nacional de Luta da Pessoa com Deficiência é celebrado em 21 de setembro com o objetivo de conscientizar a sociedade sobre a importância da inclusão e do respeito aos direitos das pessoas com deficiência.',
        whyIsImportant: 'A data simboliza o início da primavera, representando o nascimento das reivindicações por igualdade e participação plena na sociedade.',
        moreInfoLink: 'https://legislacao.presidencia.gov.br/ficha/?/legisla/legislacao.nsf/Viw_Identificacao/lei%2011.133-2005&OpenDocument'
    },
    {
        id: 'idoso',
        month: 'setembro',
        day: 27,
        title: 'Dia Nacional do Idoso',
        description: 'Valorização das pessoas idosas',
        details: '27 / Setembro',
        type: 'Direitos Humanos',
        whatIs: 'A data celebra os direitos e a valorização das pessoas idosas.',
        whyIsImportant: 'Promove atividades que incentivam o envelhecimento ativo e saudável.',
        moreInfoLink: 'https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm'
    },

    // Outubro
    {
        id: 'artes-sem-barreiras',
        month: 'outubro',
        day: 15,
        title: 'Mostra de Artes Sem Barreiras',
        description: 'Evento cultural inclusivo',
        details: 'Outubro',
        type: 'Cultura',
        whatIs: 'Evento cultural que destaca a produção artística de pessoas com deficiência.',
        whyIsImportant: 'Promove a inclusão e a valorização da diversidade.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/cultura'
    },
    {
        id: 'seguranca-alimentar',
        month: 'outubro',
        day: 16,
        title: 'Semana Municipal de Segurança Alimentar e Nutricional',
        description: 'Promoção da segurança alimentar',
        details: '16 / Outubro',
        type: 'Saúde',
        whatIs: 'A data chama a atenção para questões relacionadas à alimentação saudável, segurança alimentar e combate à fome.',
        whyIsImportant: 'Em Bauru, são realizadas palestras e oficinas sobre o tema.',
        moreInfoLink: 'https://www2.bauru.sp.gov.br/materia.aspx?n=45292'
    },

    // Novembro
    {
        id: 'consciencia-negra',
        month: 'novembro',
        day: 20,
        title: 'Dia Nacional da Consciência Negra',
        description: 'Reflexão sobre a igualdade racial',
        details: '20 / Novembro',
        type: 'Direitos Humanos',
        whatIs: 'Comemora a resistência de Zumbi dos Palmares e dos africanos escravizados.',
        whyIsImportant: 'É um momento de reflexão sobre a igualdade racial e o combate ao racismo.',
        moreInfoLink: 'https://www.gov.br/palmares/pt-br'
    },
    {
        id: 'violencia-mulheres',
        month: 'novembro',
        day: 25,
        title: 'Dia Internacional para a Eliminação da Violência Contra as Mulheres',
        description: 'Combate à violência contra mulheres',
        details: '25 / Novembro',
        type: 'Direitos Humanos',
        whatIs: 'A data foi escolhida em memória às irmãs Mirabal, assassinadas na República Dominicana.',
        whyIsImportant: 'Visa alertar para a violência de gênero e promover ações de combate a esse tipo de violência.',
        moreInfoLink: 'https://www.onumulheres.org.br/noticias/naotemdesculpa-una-se-2024/'
    },

    // Dezembro
    {
        id: 'direitos-humanos',
        month: 'dezembro',
        day: 10,
        title: 'Dia Internacional dos Direitos Humanos',
        description: 'Conscientização sobre direitos fundamentais',
        details: '10 / Dezembro',
        type: 'Direitos Humanos',
        whatIs: 'Celebra a data de adoção da Declaração Universal dos Direitos Humanos pela ONU em 1948.',
        whyIsImportant: 'Promove a reflexão sobre os direitos fundamentais e inalienáveis de todos os seres humanos.',
        moreInfoLink: 'https://www.gov.br/mdh/pt-br/navegue-por-temas/dudh70/a-declaracao'
    },
    {
        id: 'combate-pobreza',
        month: 'dezembro',
        day: 14,
        title: 'Dia Nacional de Combate à Pobreza',
        description: 'Sensibilização para a erradicação da pobreza',
        details: '14 / Dezembro',
        type: 'Direitos Humanos',
        whatIs: 'A data busca chamar a atenção para as desigualdades sociais e a necessidade de políticas públicas efetivas para o combate à pobreza.',
        whyIsImportant: 'Promove a reflexão sobre a importância de garantir condições dignas de vida para toda a população.',
        moreInfoLink: 'https://www.ipea.gov.br/ods/ods1.html'
    }
]; 