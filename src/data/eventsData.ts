interface Event {
    id: string;
    month: string;
    day: number;
    title: string;
    description: string;
    details: string;
    whatIs?: string;
    whyIsImportant?: string;
    moreInfoLink?: string;
}

export const eventsData = [
    // Maio
    {
        id: 'assistente-social',
        month: 'maio',
        day: 15,
        title: 'Dia do Assistente Social',
        description: 'Celebração do dia do Assistente Social',
        details: '15 / Maio',
        whatIs: 'A profissão de Assistente Social desempenha um papel fundamental na elaboração e execução de políticas sociais que visam à inclusão e à justiça social, promovendo o bem-estar da comunidade.',
        whyIsImportant: 'Celebra os profissionais que atuam na promoção do bem-estar social, lutando pelos direitos humanos e por melhores condições de vida para grupos sociais vulneráveis, garantindo dignidade e acesso a direitos.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'combate-abuso',
        month: 'maio',
        day: 18,
        title: 'Combate ao Abuso e Exploração Infantil e Adolescentes',
        description: 'Dia Nacional de Combate ao Abuso e à Exploração Sexual de Crianças e Adolescentes',
        details: '18 / Maio',
        whatIs: 'O Dia Nacional de Combate ao Abuso e à Exploração Sexual de Crianças e Adolescentes é uma data para mobilizar a sociedade a se engajar na luta contra esse crime.',
        whyIsImportant: 'É crucial para conscientizar sobre a gravidade do problema e incentivar a denúncia, protegendo crianças e adolescentes e garantindo seu direito a um desenvolvimento seguro e saudável.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Junho
    {
        id: 'meio-ambiente',
        month: 'junho',
        day: 5,
        title: 'Dia Mundial do Meio Ambiente',
        description: 'Celebração do Dia Mundial do Meio Ambiente',
        details: '05 / Junho',
        whatIs: 'O Dia Mundial do Meio Ambiente é uma data estabelecida pela ONU para promover a conscientização global sobre questões ambientais e estimular ações para a proteção da natureza.',
        whyIsImportant: 'Esta data é fundamental para lembrar a todos sobre a importância da preservação ambiental e do desenvolvimento sustentável, incentivando práticas que reduzam impactos negativos ao planeta.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'festa-junina',
        month: 'junho',
        day: 24,
        title: 'Festa Junina',
        description: 'Celebração das festas juninas nas escolas',
        details: '24 / Junho',
        whatIs: 'As Festas Juninas são celebrações tradicionais brasileiras que acontecem durante o mês de junho, com origem nas festividades dos santos populares: Santo Antônio, São João e São Pedro.',
        whyIsImportant: 'Estas festas são importantes para preservar tradições culturais brasileiras e proporcionar momentos de integração comunitária, especialmente no ambiente escolar, onde se tornam oportunidades de aprendizado cultural e socialização.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Julho
    {
        id: 'ferias-escolares',
        month: 'julho',
        day: 1,
        title: 'Início das Férias Escolares',
        description: 'Período de descanso para estudantes e professores',
        details: '01 / Julho',
        whatIs: 'O período de férias escolares representa um intervalo nas atividades letivas, oferecendo tempo de descanso e lazer para estudantes e educadores.',
        whyIsImportant: 'As férias são essenciais para a recuperação física e mental de toda a comunidade escolar, permitindo que alunos e professores retornem às atividades com mais disposição e entusiasmo no segundo semestre.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'dia-amigo',
        month: 'julho',
        day: 20,
        title: 'Dia do Amigo',
        description: 'Celebração da amizade e dos laços sociais',
        details: '20 / Julho',
        whatIs: 'O Dia do Amigo é uma data comemorativa que celebra os laços de amizade e a importância dessas relações para o bem-estar emocional e social das pessoas.',
        whyIsImportant: 'Esta data ressalta a importância das relações de amizade para o desenvolvimento social e emocional, especialmente para crianças e adolescentes, promovendo valores como companheirismo, lealdade e empatia.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    }
]; 