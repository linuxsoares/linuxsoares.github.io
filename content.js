// Todo o conteúdo do site fica aqui. Textos com { pt, en } trocam com o idioma;
// strings simples aparecem iguais nos dois.
window.CONTENT = {
  name: "Gil Soares",
  place: { pt: "São Paulo · Brasil", en: "São Paulo · Brazil" },
  role: {
    pt: "Tech Lead · Trust · <strong>Jusbrasil</strong>",
    en: "Tech Lead · Trust · <strong>Jusbrasil</strong>",
  },
  lead: {
    pt: "Mais de uma década construindo sistemas distribuídos e aplicações de alta escala para marketplaces, fintechs e plataformas de alto tráfego. Hoje lidero o time de Trust no Jusbrasil, unindo sistemas distribuídos e IA para proteger dados sensíveis.",
    en: "Over a decade building distributed systems and high-scale applications for marketplaces, fintechs and high-traffic platforms. Today I lead the Trust team at Jusbrasil, combining distributed systems and AI to protect sensitive data.",
  },
  skills: ["Go", "Python", "Java", "Scala", "Spark", "Airflow", "BigTable", "Redis", "GCP", "AWS", "LLMs"],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/gilmarsoares/" },
    { label: "GitHub", url: "https://github.com/linuxsoares" },
    { label: "Blog", url: "/blog/" },
  ],
  email: "linux.soares@gmail.com",

  // Abertura estilo "letreiro". Aparece na primeira visita e pelo botão "Rever abertura".
  crawl: {
    episode: { pt: "Episódio IV", en: "Episode IV" },
    title: { pt: "UMA NOVA ARQUITETURA", en: "A NEW ARCHITECTURE" },
    paragraphs: [
      {
        pt: "É um período de tráfego intenso. Há mais de uma década, um jovem estagiário do Museu de Arte Moderna de São Paulo deixou os servidores da intranet para entrar na guerra contra os bugs.",
        en: "It is a period of heavy traffic. Over a decade ago, a young intern at the São Paulo Museum of Modern Art left the intranet servers behind to join the war against bugs.",
      },
      {
        pt: "Na Autopass, seus sistemas acompanharam 7 milhões de passageiros por dia em 39 municípios. No luizalabs, ajudou a erguer o marketplace que responde por 20% das vendas online do Magalu e a primeira estrutura do que viria a ser sua fintech.",
        en: "At Autopass, his systems tracked 7 million passengers a day across 39 cities. At luizalabs, he helped build the marketplace behind 20% of Magalu's online sales and the first foundations of what would become its fintech.",
      },
      {
        pt: "Hoje, como Tech Lead do time de Trust no Jusbrasil, ele comanda uma frota de agentes de IA e pipelines que protegem os dados sensíveis de milhões de processos judiciais, em busca de uma internet jurídica mais segura…",
        en: "Today, as Tech Lead of the Trust team at Jusbrasil, he commands a fleet of AI agents and pipelines that protect sensitive data across millions of court cases, in search of a safer legal internet…",
      },
    ],
  },

  // Experiências, da mais recente para a mais antiga. A numeração dos episódios é automática
  // (a mais antiga é o Episódio I).
  // arch desenha a arquitetura num plano de 100×72: kind é client, gateway, service, queue, db ou server;
  // edges são as rotas das naves e sources são as origens que lançam frotas quando clicadas.
  episodes: [
    {
      id: "tech-lead",
      company: "Jusbrasil · Trust",
      period: { pt: "mai 2023 – atual", en: "May 2023 – present" },
      title: { pt: "Protegendo dados sensíveis com IA", en: "Protecting sensitive data with AI" },
      intro: {
        pt: "Lidero tecnicamente o time de Trust, responsável por proteger informações sensíveis em processos judiciais, como segredo de justiça e dados de crianças e adolescentes, e por moderar os reportes dos usuários. Desenho a arquitetura, sou dono técnico dos principais sistemas do time e participo da definição de OKRs e da estratégia.",
        en: "I'm the technical lead of the Trust team, responsible for protecting sensitive information in court cases, such as sealed proceedings and data about children and teenagers, and for moderating user reports. I design the architecture, own the team's core systems and help shape its OKRs and strategy.",
      },
      facts: [
        { pt: "Sistema <strong>multi-agente com LLM</strong> (Gemini, Google ADK) que modera reportes com agentes especialistas em direito de família, saúde e criminal", en: "<strong>Multi-agent LLM</strong> system (Gemini, Google ADK) that moderates reports with agents specialized in family, health and criminal law" },
        { pt: "Pipelines que detectam <strong>conteúdo sensível</strong> em milhões de documentos e restringem o que precisa ser protegido (Go, Spark, Airflow, Pub/Sub)", en: "Pipelines that detect <strong>sensitive content</strong> across millions of documents and restrict what needs protecting (Go, Spark, Airflow, Pub/Sub)" },
        { pt: "Code review, mentoria, entrevistas e on-call: a barra de qualidade e o desenvolvimento do time", en: "Code review, mentoring, interviews and on-call: keeping the quality bar and growing the team" },
      ],
      // documentos e reportes entram; regras e agentes de IA decidem; o que for sensível vira restrição antes de chegar ao site
      arch: {
        nodes: [
          { id: "docs", kind: "client", x: 8, y: 14, label: { pt: "Processos", en: "Court cases" } },
          { id: "reports", kind: "client", x: 8, y: 58, label: { pt: "Reportes", en: "Reports" } },
          { id: "clf", kind: "service", x: 30, y: 14, label: { pt: "Classificador", en: "Classifier" } },
          { id: "agents", kind: "service", x: 30, y: 58, label: { pt: "Agentes LLM", en: "LLM agents" } },
          { id: "sig", kind: "queue", x: 52, y: 14, label: { pt: "Detecções", en: "Detections" } },
          { id: "mod", kind: "gateway", x: 52, y: 58, label: { pt: "Moderação", en: "Moderation" } },
          { id: "rest", kind: "db", x: 74, y: 36, label: { pt: "Restrições", en: "Restrictions" } },
          { id: "site", kind: "server", x: 93, y: 36, label: "Jusbrasil" },
        ],
        edges: [["docs", "clf"], ["clf", "sig"], ["sig", "rest"], ["reports", "agents"], ["agents", "rest"], ["agents", "mod"], ["mod", "rest"], ["rest", "site"]],
        sources: ["docs", "reports"],
      },
    },
    {
      id: "jusbrasil",
      company: "Jusbrasil",
      period: { pt: "set 2020 – mai 2023", en: "Sep 2020 – May 2023" },
      title: { pt: "Dados em escala com Spark e BigTable", en: "Data at scale with Spark and BigTable" },
      intro: {
        pt: "Engenheiro de software construindo sistemas e pipelines de dados de alto volume, a base que me levou à liderança técnica.",
        en: "Software engineer building high-volume systems and data pipelines, the groundwork that led me to technical leadership.",
      },
      facts: [
        { pt: "Processamento distribuído com <strong>Apache Spark</strong>", en: "Distributed processing with <strong>Apache Spark</strong>" },
        { pt: "Armazenamento de alta escala com <strong>BigTable</strong>", en: "High-scale storage with <strong>BigTable</strong>" },
        { pt: "Python, Scala e Google Cloud", en: "Python, Scala and Google Cloud" },
      ],
      arch: {
        nodes: [
          { id: "src1", kind: "client", x: 8, y: 16, label: { pt: "Fontes", en: "Sources" } },
          { id: "src2", kind: "client", x: 8, y: 56, label: { pt: "Fontes", en: "Sources" } },
          { id: "ing", kind: "queue", x: 28, y: 36, label: { pt: "Ingestão", en: "Ingestion" } },
          { id: "sp1", kind: "service", x: 50, y: 14, label: "Spark" },
          { id: "sp2", kind: "service", x: 50, y: 36, label: "Spark" },
          { id: "sp3", kind: "service", x: 50, y: 58, label: "Spark" },
          { id: "bt", kind: "db", x: 72, y: 36, label: "BigTable" },
          { id: "api", kind: "gateway", x: 92, y: 36, label: "API" },
        ],
        edges: [["src1", "ing"], ["src2", "ing"], ["ing", "sp1"], ["ing", "sp2"], ["ing", "sp3"], ["sp1", "bt"], ["sp2", "bt"], ["sp3", "bt"], ["bt", "api"]],
        sources: ["src1", "src2"],
      },
    },
    {
      id: "magalu",
      company: "luizalabs · Magalu",
      period: { pt: "ago 2016 – set 2020", en: "Aug 2016 – Sep 2020" },
      title: { pt: "Do marketplace à fintech", en: "From marketplace to fintech" },
      intro: {
        pt: "Ajudei a construir a base para sellers venderem no Magalu e, depois, a primeira estrutura do que hoje é a fintech do Magalu: a parte financeira dos sellers dentro do Marketplace, com aplicações API First para o modelo “Magalu as a Service”.",
        en: "I helped build the foundation for sellers to sell on Magalu and, later, the first structure of what is now Magalu's fintech: seller finances inside the Marketplace, with API First applications for the “Magalu as a Service” model.",
      },
      facts: [
        { pt: "Estrutura para sellers venderem no Magalu: <strong>cadastro, permissões e vendas</strong>", en: "The structure for sellers to sell on Magalu: <strong>onboarding, permissions and sales</strong>" },
        { pt: "Cálculo de frete dos sellers integrado aos <strong>Correios</strong>", en: "Seller shipping rates calculated with <strong>Correios</strong>, Brazil's postal service" },
        { pt: "<strong>Primeira estrutura da fintech</strong>: cálculo de taxas e pagamentos dos sellers, primeiro com um parceiro externo e depois com processamento próprio", en: "<strong>The fintech's first structure</strong>: seller fees and payouts, first through an external partner and then with in-house processing" },
        { pt: "Marketplace responsável por <strong>20%</strong> das vendas online do Magalu", en: "Marketplace behind <strong>20%</strong> of Magalu's online sales" },
        { pt: "APIs REST e ETL com Pentaho, em Python, SQL, Redis e GCP", en: "REST APIs and ETL with Pentaho, using Python, SQL, Redis and GCP" },
      ],
      // sellers e clientes entram pela API; cadastro, frete e fintech atendem; pagamentos alimentam os dados
      arch: {
        nodes: [
          { id: "sellers", kind: "client", x: 8, y: 16, label: "Sellers" },
          { id: "buyers", kind: "client", x: 8, y: 56, label: { pt: "Clientes", en: "Customers" } },
          { id: "api", kind: "gateway", x: 27, y: 36, label: "API First" },
          { id: "onb", kind: "service", x: 48, y: 12, label: { pt: "Cadastro", en: "Onboarding" } },
          { id: "ship", kind: "service", x: 48, y: 36, label: { pt: "Frete", en: "Shipping" } },
          { id: "fin", kind: "service", x: 48, y: 60, label: "Fintech" },
          { id: "post", kind: "server", x: 70, y: 36, label: "Correios" },
          { id: "pay", kind: "queue", x: 70, y: 60, label: { pt: "Pagamentos", en: "Payouts" } },
          { id: "data", kind: "db", x: 92, y: 60, label: { pt: "Dados", en: "Data" } },
        ],
        edges: [["sellers", "api"], ["buyers", "api"], ["api", "onb"], ["api", "ship"], ["api", "fin"], ["ship", "post"], ["fin", "pay"], ["pay", "data"]],
        sources: ["sellers", "buyers"],
      },
    },
    {
      id: "autopass",
      company: "Autopass",
      period: { pt: "mai 2011 – jul 2016", en: "May 2011 – Jul 2016" },
      title: { pt: "Bilhetagem do transporte metropolitano", en: "Fare systems for metropolitan transit" },
      intro: {
        pt: "Aplicações para o transporte coletivo da Região Metropolitana de São Paulo, controlando as utilizações e gerando relatórios para os centros de controle de transporte.",
        en: "Applications for public transit in Greater São Paulo, tracking ridership and producing reports for the transit control centers.",
      },
      facts: [
        { pt: "<strong>7 milhões</strong> de usuários por dia em <strong>39 municípios</strong>", en: "<strong>7 million</strong> riders a day across <strong>39 cities</strong>" },
        { pt: "Relatórios para EMTU, CPTM e EMTC", en: "Reports for EMTU, CPTM and EMTC" },
        { pt: "Configuração dos validadores dos ônibus intermunicipais", en: "Configuration of intercity bus fare validators" },
        { pt: "Java, webservices, Oracle, MongoDB, Redis, WebLogic e WebSphere", en: "Java, web services, Oracle, MongoDB, Redis, WebLogic and WebSphere" },
      ],
      arch: {
        nodes: [
          { id: "bus1", kind: "client", x: 8, y: 16, label: { pt: "Validadores", en: "Validators" } },
          { id: "bus2", kind: "client", x: 8, y: 56, label: { pt: "Ônibus", en: "Buses" } },
          { id: "ws", kind: "service", x: 28, y: 36, label: "Webservices" },
          { id: "ora", kind: "db", x: 50, y: 16, label: "Oracle" },
          { id: "mongo", kind: "db", x: 50, y: 56, label: "MongoDB" },
          { id: "rep", kind: "service", x: 72, y: 36, label: { pt: "Relatórios", en: "Reports" } },
          { id: "emtu", kind: "client", x: 93, y: 12, label: "EMTU" },
          { id: "cptm", kind: "client", x: 93, y: 36, label: "CPTM" },
          { id: "emtc", kind: "client", x: 93, y: 60, label: "EMTC" },
        ],
        edges: [["bus1", "ws"], ["bus2", "ws"], ["ws", "ora"], ["ws", "mongo"], ["ora", "rep"], ["mongo", "rep"], ["rep", "emtu"], ["rep", "cptm"], ["rep", "emtc"]],
        sources: ["bus1", "bus2"],
      },
    },
  ],

  // Linha do tempo da seção "Origens".
  timeline: [
    { year: "2008–11", text: { pt: "Estagiário e depois analista de suporte e dev Java, Museu de Arte Moderna de São Paulo", en: "Intern, then support analyst and Java developer, São Paulo Museum of Modern Art" } },
    { year: "2011", text: { pt: "Analista de projetos, <a href=\"#autopass\">Autopass</a>: Oracle, SQL e C#", en: "Project analyst, <a href=\"#autopass\">Autopass</a>: Oracle, SQL and C#" } },
    { year: "2012–16", text: { pt: "Analista de sistemas, <a href=\"#autopass\">Autopass</a>", en: "Systems analyst, <a href=\"#autopass\">Autopass</a>" } },
    { year: "2016–20", text: { pt: "Desenvolvedor, <a href=\"#magalu\">luizalabs</a>", en: "Software developer, <a href=\"#magalu\">luizalabs</a>" } },
    { year: "2020–23", text: { pt: "Engenheiro de software, <a href=\"#jusbrasil\">Jusbrasil</a>", en: "Software engineer, <a href=\"#jusbrasil\">Jusbrasil</a>" } },
    { year: "2023–", text: { pt: "Tech Lead do time de Trust, <a href=\"#tech-lead\">Jusbrasil</a>", en: "Tech Lead, Trust team, <a href=\"#tech-lead\">Jusbrasil</a>" } },
    { year: { pt: "formação", en: "education" }, text: "Centro Universitário Sant'Anna" },
  ],
  originsArch: {
    nodes: [
      { id: "staff", kind: "client", x: 10, y: 36, label: { pt: "Equipe", en: "Staff" } },
      { id: "net", kind: "gateway", x: 36, y: 36, label: { pt: "Rede", en: "Network" } },
      { id: "intra", kind: "server", x: 64, y: 16, label: "Intranet" },
      { id: "linux", kind: "server", x: 90, y: 16, label: "Linux" },
      { id: "files", kind: "server", x: 64, y: 56, label: { pt: "Arquivos", en: "Files" } },
      { id: "win", kind: "server", x: 90, y: 56, label: "Windows" },
    ],
    edges: [["staff", "net"], ["net", "intra"], ["net", "files"], ["intra", "linux"], ["files", "win"]],
    sources: ["staff"],
  },
  hobby: {
    pt: "Gosto de trocar ideias sobre arquitetura de software, desafios de escala e engenharia de plataformas.",
    en: "I enjoy talking about software architecture, scaling challenges and platform engineering.",
  },

  // Passe o mouse para ver o título completo. Deixe a lista vazia para esconder a seção.
  certs: [
    { name: "Machine Learning", title: "Introdução a machine learning · Hype Data & AI · 2025" },
    { name: "Prompts", title: "Comece a escrever prompts como um profissional · Google · 2025" },
    { name: { pt: "Prompts de design", en: "Design prompts" }, title: "Prompts de design para tarefas cotidianas de trabalho · Google · 2025" },
    { name: { pt: "Análise de dados com IA", en: "Data analysis with AI" }, title: "Acelerar a análise de dados e a criação de apresentações · Google · 2025" },
    { name: "MongoDB", title: "MongoDB for Java Developers · MongoDB · 2015" },
  ],
};
