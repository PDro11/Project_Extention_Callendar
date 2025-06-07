export interface Event {
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

export const eventsData: Event[] = [
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
    },

    // Agosto
    {
        id: 'dia-estudante',
        month: 'agosto',
        day: 11,
        title: 'Dia do Estudante',
        description: 'Celebração dedicada aos estudantes',
        details: '11 / Agosto',
        whatIs: 'O Dia do Estudante é uma data comemorativa que reconhece o papel fundamental dos estudantes na sociedade e celebra seu empenho na busca pelo conhecimento.',
        whyIsImportant: 'Esta data valoriza a dedicação dos estudantes e reforça a importância da educação como ferramenta de transformação social e desenvolvimento pessoal.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'folclore-brasileiro',
        month: 'agosto',
        day: 22,
        title: 'Dia do Folclore Brasileiro',
        description: 'Celebração das tradições culturais brasileiras',
        details: '22 / Agosto',
        whatIs: 'O Dia do Folclore Brasileiro é uma data que celebra as manifestações culturais populares, como lendas, danças, músicas, festas e tradições que fazem parte da identidade nacional.',
        whyIsImportant: 'É importante para preservar e valorizar a diversidade cultural brasileira, promovendo o conhecimento das tradições regionais e incentivando sua continuidade nas novas gerações.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'psicologia',
        month: 'agosto',
        day: 27,
        title: 'Dia do Psicólogo',
        description: 'Homenagem aos profissionais da psicologia',
        details: '27 / Agosto',
        whatIs: 'O Dia do Psicólogo celebra os profissionais dedicados à saúde mental, ao bem-estar emocional e ao desenvolvimento psicológico dos indivíduos.',
        whyIsImportant: 'Esta data reconhece a importância dos psicólogos no ambiente escolar, que contribuem para o desenvolvimento saudável dos estudantes, ajudando-os a enfrentar desafios emocionais e comportamentais.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Setembro
    {
        id: 'independencia',
        month: 'setembro',
        day: 7,
        title: 'Independência do Brasil',
        description: 'Celebração da independência nacional',
        details: '07 / Setembro',
        whatIs: 'O Dia da Independência do Brasil comemora o momento em que o país declarou sua independência de Portugal em 1822, marcando o início da construção da identidade nacional brasileira.',
        whyIsImportant: 'Esta data é fundamental para promover reflexões sobre cidadania, identidade nacional e os valores cívicos, incentivando o conhecimento histórico e o senso de pertencimento à nação.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'arvore',
        month: 'setembro',
        day: 21,
        title: 'Dia da Árvore',
        description: 'Conscientização sobre a importância das árvores',
        details: '21 / Setembro',
        whatIs: 'O Dia da Árvore é uma data dedicada à conscientização sobre a importância das árvores para o meio ambiente, o clima e a qualidade de vida nos ecossistemas.',
        whyIsImportant: 'É importante para sensibilizar sobre a necessidade de preservação ambiental, incentivando ações de plantio e cuidado com as árvores, além de promover educação ambiental nas escolas.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'setembro-amarelo',
        month: 'setembro',
        day: 10,
        title: 'Setembro Amarelo: Prevenção ao Suicídio',
        description: 'Campanha de conscientização sobre saúde mental',
        details: '10 / Setembro',
        whatIs: 'O Setembro Amarelo é uma campanha de conscientização sobre a prevenção do suicídio, buscando alertar a população sobre a importância de discutir o tema e buscar ajuda profissional.',
        whyIsImportant: 'Esta iniciativa é fundamental para quebrar tabus sobre saúde mental, especialmente entre jovens e adolescentes, promovendo diálogo e identificação precoce de sinais de alerta.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Outubro
    {
        id: 'dia-professor',
        month: 'outubro',
        day: 15,
        title: 'Dia dos Professores',
        description: 'Homenagem aos educadores',
        details: '15 / Outubro',
        whatIs: 'O Dia dos Professores é uma data dedicada a homenagear esses profissionais fundamentais para a formação educacional e cidadã das novas gerações.',
        whyIsImportant: 'Esta celebração reconhece o papel transformador dos professores na sociedade, valorizando sua dedicação e esforço na construção do conhecimento e na formação integral dos estudantes.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'outubro-rosa',
        month: 'outubro',
        day: 1,
        title: 'Outubro Rosa',
        description: 'Campanha de conscientização sobre o câncer de mama',
        details: '01-31 / Outubro',
        whatIs: 'O Outubro Rosa é uma campanha internacional dedicada à conscientização sobre o câncer de mama e à importância do diagnóstico precoce para aumentar as chances de tratamento e cura.',
        whyIsImportant: 'Esta campanha é vital para disseminar informações sobre prevenção, sintomas e tratamentos, incentivando o autocuidado e exames regulares entre mulheres de todas as idades.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'dia-crianca',
        month: 'outubro',
        day: 12,
        title: 'Dia das Crianças',
        description: 'Celebração dedicada às crianças',
        details: '12 / Outubro',
        whatIs: 'O Dia das Crianças é uma data dedicada a celebrar a infância, promovendo atividades lúdicas e reflexões sobre os direitos e o bem-estar infantil.',
        whyIsImportant: 'Esta comemoração destaca a importância de garantir às crianças seus direitos fundamentais, como educação, saúde, lazer e proteção, além de promover momentos de alegria e diversão.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Novembro
    {
        id: 'consciencia-negra',
        month: 'novembro',
        day: 20,
        title: 'Dia da Consciência Negra',
        description: 'Reflexão sobre a luta contra o racismo',
        details: '20 / Novembro',
        whatIs: 'O Dia da Consciência Negra é uma data que homenageia a luta e a resistência do povo negro no Brasil, marcando a morte de Zumbi dos Palmares, importante líder do Quilombo dos Palmares.',
        whyIsImportant: 'Esta data promove reflexões sobre igualdade racial, combate ao racismo e valorização da cultura afro-brasileira, sendo fundamental para a construção de uma sociedade mais justa e inclusiva.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'novembro-azul',
        month: 'novembro',
        day: 1,
        title: 'Novembro Azul',
        description: 'Campanha de conscientização sobre a saúde masculina',
        details: '01-30 / Novembro',
        whatIs: 'O Novembro Azul é uma campanha de conscientização sobre a saúde do homem, com foco na prevenção e no diagnóstico precoce do câncer de próstata e outras doenças masculinas.',
        whyIsImportant: 'Esta iniciativa busca quebrar tabus relacionados aos cuidados com a saúde masculina, incentivando exames preventivos e a adoção de hábitos saudáveis desde a juventude.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Dezembro
    {
        id: 'natal',
        month: 'dezembro',
        day: 25,
        title: 'Natal',
        description: 'Celebração do nascimento de Jesus Cristo',
        details: '25 / Dezembro',
        whatIs: 'O Natal é uma celebração cristã que comemora o nascimento de Jesus Cristo, marcada por tradições como a troca de presentes, decorações natalinas e reuniões familiares.',
        whyIsImportant: 'Esta data promove valores como solidariedade, generosidade e união, sendo uma oportunidade para desenvolver projetos educativos que incentivem a empatia e o espírito comunitário.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'dia-direitos-humanos',
        month: 'dezembro',
        day: 10,
        title: 'Dia Internacional dos Direitos Humanos',
        description: 'Celebração da Declaração Universal dos Direitos Humanos',
        details: '10 / Dezembro',
        whatIs: 'O Dia Internacional dos Direitos Humanos comemora a adoção da Declaração Universal dos Direitos Humanos pela ONU em 1948, estabelecendo direitos fundamentais que devem ser garantidos a todos os seres humanos.',
        whyIsImportant: 'Esta data promove a reflexão sobre direitos básicos como igualdade, liberdade e dignidade, incentivando a educação em direitos humanos e a formação de cidadãos conscientes e engajados.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'inclusao-pessoa-deficiencia',
        month: 'dezembro',
        day: 3,
        title: 'Dia Internacional da Pessoa com Deficiência',
        description: 'Conscientização sobre inclusão e acessibilidade',
        details: '03 / Dezembro',
        whatIs: 'O Dia Internacional da Pessoa com Deficiência visa promover a conscientização sobre questões relacionadas à deficiência e mobilizar apoio para a dignidade, direitos e bem-estar dessas pessoas.',
        whyIsImportant: 'Esta data incentiva práticas inclusivas no ambiente escolar e na sociedade, promovendo a aceitação da diversidade e a eliminação de barreiras físicas, sociais e atitudinais.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Janeiro
    {
        id: 'dia-mundial-paz',
        month: 'janeiro',
        day: 1,
        title: 'Dia Mundial da Paz',
        description: 'Reflexão sobre a paz e não-violência',
        details: '01 / Janeiro',
        whatIs: 'O Dia Mundial da Paz é uma data estabelecida para promover a cultura de paz, incentivando a resolução pacífica de conflitos e a construção de sociedades mais harmoniosas.',
        whyIsImportant: 'Esta celebração é relevante para fomentar valores como respeito, tolerância e diálogo nas escolas, contribuindo para a formação de cidadãos comprometidos com a paz e a não-violência.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'dia-mundial-braille',
        month: 'janeiro',
        day: 4,
        title: 'Dia Mundial do Braille',
        description: 'Conscientização sobre a importância do sistema Braille',
        details: '04 / Janeiro',
        whatIs: 'O Dia Mundial do Braille celebra o nascimento de Louis Braille, criador do sistema de leitura e escrita tátil usado por pessoas cegas ou com deficiência visual.',
        whyIsImportant: 'Esta data promove a conscientização sobre a importância da acessibilidade na educação, destacando a necessidade de materiais inclusivos e a valorização da diversidade de formas de aprendizado.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Fevereiro
    {
        id: 'carnaval',
        month: 'fevereiro',
        day: 13,
        title: 'Carnaval',
        description: 'Celebração popular brasileira',
        details: '13-16 / Fevereiro',
        whatIs: 'O Carnaval é uma das maiores festividades populares do Brasil, marcada por desfiles, música, dança e manifestações culturais diversas, que ocorre antes do período da Quaresma.',
        whyIsImportant: 'Esta festa representa uma oportunidade para explorar a riqueza cultural brasileira, suas origens históricas e manifestações regionais, além de promover atividades lúdicas e expressões artísticas nas escolas.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'dia-contra-bullying',
        month: 'fevereiro',
        day: 7,
        title: 'Dia Nacional de Combate ao Bullying',
        description: 'Conscientização sobre bullying nas escolas',
        details: '07 / Fevereiro',
        whatIs: 'O Dia Nacional de Combate ao Bullying é dedicado à conscientização sobre o bullying, prática de atos de violência física ou psicológica, intencionais e repetitivos, especialmente no ambiente escolar.',
        whyIsImportant: 'Esta data é fundamental para promover um ambiente escolar seguro e saudável, desenvolvendo ações educativas que incentivem o respeito às diferenças e a convivência harmoniosa entre os estudantes.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Março
    {
        id: 'dia-mulher',
        month: 'março',
        day: 8,
        title: 'Dia Internacional da Mulher',
        description: 'Celebração das conquistas das mulheres',
        details: '08 / Março',
        whatIs: 'O Dia Internacional da Mulher é uma data comemorativa que celebra as conquistas sociais, políticas e econômicas das mulheres ao longo da história.',
        whyIsImportant: 'É um dia para reforçar a luta por igualdade de direitos, contra a discriminação e a violência de gênero, e para reconhecer a importância das mulheres em todas as esferas da sociedade.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'dia-mundial-agua',
        month: 'março',
        day: 22,
        title: 'Dia Mundial da Água',
        description: 'Conscientização sobre a importância da água',
        details: '22 / Março',
        whatIs: 'O Dia Mundial da Água foi estabelecido pela ONU para promover a conscientização sobre a importância da água doce e a defesa da gestão sustentável dos recursos hídricos.',
        whyIsImportant: 'Esta data é crucial para sensibilizar estudantes sobre o uso responsável da água, a preservação de mananciais e a importância deste recurso para a vida e o equilíbrio dos ecossistemas.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },

    // Abril
    {
        id: 'dia-livro',
        month: 'abril',
        day: 23,
        title: 'Dia Mundial do Livro',
        description: 'Celebração da literatura e da leitura',
        details: '23 / Abril',
        whatIs: 'O Dia Mundial do Livro celebra a importância da leitura, da publicação de livros e dos direitos autorais, promovendo o acesso à literatura e o prazer pela leitura.',
        whyIsImportant: 'Esta data incentiva o hábito da leitura entre estudantes, destacando seu papel fundamental no desenvolvimento cognitivo, na expansão do vocabulário e na formação cultural dos indivíduos.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'pascoa',
        month: 'abril',
        day: 9,
        title: 'Páscoa',
        description: 'Celebração cristã da ressurreição de Jesus',
        details: '09 / Abril',
        whatIs: 'A Páscoa é uma das principais celebrações cristãs, que comemora a ressurreição de Jesus Cristo, simbolizando renovação, esperança e vida nova.',
        whyIsImportant: 'Além de seu significado religioso, esta data pode ser abordada nas escolas como oportunidade para explorar valores como solidariedade, perdão e renovação, além de suas tradições culturais.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    },
    {
        id: 'dia-indio',
        month: 'abril',
        day: 19,
        title: 'Dia dos Povos Indígenas',
        description: 'Celebração da cultura e história dos povos originários',
        details: '19 / Abril',
        whatIs: 'O Dia dos Povos Indígenas (anteriormente conhecido como Dia do Índio) é uma data dedicada a reconhecer e valorizar a importância dos povos originários, sua história, cultura e contribuições para a formação da identidade brasileira.',
        whyIsImportant: 'Esta data proporciona uma oportunidade para desconstruir estereótipos, aprender sobre a diversidade das culturas indígenas e refletir sobre os desafios enfrentados por esses povos na atualidade.',
        moreInfoLink: 'https://www.bauru.sp.gov.br/educacao/secretaria/'
    }
]; 