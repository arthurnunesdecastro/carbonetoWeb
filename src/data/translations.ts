export type Language = 'en' | 'pt' | 'es';

export const translations = {
  en: {
    navbar: {
      features: 'Features',
      community: 'Community',
      philosophy: 'Philosophy',
      vision: 'Vision',
      login: 'Log In',
      tryFree: 'Try for Free',
    },
    hero: {
      headline: 'Build your Legacy.',
      subheadline: 'Carboneto is a structured performance ecosystem where athletes build smarter training systems, track real progression, and compete inside a serious community.',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      badge1: 'Built for Serious Athletes',
      badge2: 'Structured Performance',
      badge3: 'Community Driven',
    },
    ecosystem: {
      title: 'More Than a Training App.',
      subtitle: 'A complete ecosystem designed to replace chaos with structure.',
      train: { title: 'Train', desc: 'Build custom workouts or follow elite programs.' },
      track: { title: 'Track', desc: 'Log every rep, set, and session with precision.' },
      progress: { title: 'Progress', desc: 'Visualize your growth with advanced analytics.' },
      compete: { title: 'Compete', desc: 'Compare stats and climb the global leaderboards.' },
    },
    community: {
      title: 'Where Winners Train.',
      desc: 'Carboneto isn\'t a feed. It\'s a standard. Every rep logged, every program shared, every milestone posted — it\'s all verified. No highlight reels. No noise. Just work.',
      item1: {
        title: 'Verified Performance',
        desc: 'Every stat is logged in real-time. You can\'t fake reps. You can\'t fake results.'
      },
      item2: {
        title: 'Coach-Level Structure',
        desc: 'Elite coaches build and distribute professional programs directly to their athletes — instantly.'
      },
      item3: {
        title: 'Iron Standard',
        desc: 'The people around you set the bar. On Carboneto, the bar is always rising.'
      },
      coachName: 'Coach Paes',
      coachMessage: 'Chico dropped 22 and 8 dimes tonight. Two weeks on that pick-and-roll program. This is why we put in the work.',
      prName: 'New Personal Best',
      prMessage: 'Chico just hit 847 shooting reps this week. His best ever.',
    },
    product: {
      feature1: { title: 'Structure Your Sessions.', desc: 'Stop guessing. Build detailed workouts with sets, reps, and rest intervals. Save your favorites or import from coaches.' },
      feature2: { title: 'Measure What Matters.', desc: 'Track volume, intensity, and consistency over time. Data doesn\'t lie—use it to fuel your improvement.' },
      feature3: { title: 'Organize Like a Professional.', desc: 'Categorize drills by skill: Shooting, Ball Handling, Defense, Conditioning. Keep your development balanced.' },
      feature4: { title: 'Train Without Distractions.', desc: 'A focused \'In-Session\' mode that keeps the screen awake and controls simple. Just you and the work.' },
    },
    philosophy: {
      title: 'Legacy Is Built Daily.',
      line1: 'Greatness isn’t random.',
      line2: 'It’s structured.',
      line3: 'Repeated.',
      line4: 'Measured.',
      footer: 'Carboneto exists for athletes who build standards — not excuses.',
    },
    vision: {
      title: 'The Future.',
      subtitle: 'Building the operating system for the next generation.',
      card1: { 
        title: 'Structured Training', 
        desc: 'Programs designed for consistent growth. Every rep counts, every session matters.' 
      },
      card2: { 
        title: 'Verified Performance', 
        desc: 'Real results. No fluff. Track your progress and measure what matters.' 
      },
      card3: { 
        title: 'Game Insight', 
        desc: 'Develop your court vision and decision-making with detailed analysis.' 
      },
      card4: { 
        title: 'Benchmark Your Growth', 
        desc: 'See where you stand among the best. Measure, compare, improve.' 
      }
    },
    finalCta: {
      title: 'Your next level starts with Carboneto.',
      subtitle: 'Download and start your free trial today.',
      downloadOn: 'Download on the',
      getItOn: 'GET IT ON',
    },
    footer: {
      tagline: 'Designed to support weight loss, strength, and sustainable health for the modern athlete.',
      pages: 'Pages',
      menus: 'Menus',
      information: 'Information',
      rights: 'All Rights Reserved',
      privacy: 'Privacy',
      terms: 'Terms',
      sitemap: 'Sitemap',
      about: 'About',
      blog: 'Blog',
      careers: 'Careers',
      contact: 'Contact Us',
      press: 'Press',
      partners: 'Partners',
      help: 'Help Center',
      cookie: 'Cookie Settings',
    },
    privacy: {
      label: 'Legal',
      headline: 'Privacy',
      headlineFade: 'Policy.',
      intro: 'We built Carboneto for athletes who take their game seriously. We take your privacy just as seriously. Here\'s exactly what we collect, why, and how we protect it.',
      sections: [
        {
          number: '01',
          title: 'Information We Collect',
          content: [
            { subtitle: 'Account & Profile', text: 'When you create a Carboneto account, we collect your name, email address, date of birth, and profile photo. This information is used solely to personalize your experience.' },
            { subtitle: 'Training Data', text: 'Every workout session, drill log, rep count, and performance metric you record is stored securely. Your work belongs to you.' },
            { subtitle: 'Device & Usage', text: 'We collect basic device information and anonymized usage patterns to improve app performance and stability. We do not sell this data.' }
          ]
        },
        {
          number: '02',
          title: 'How We Use Your Data',
          content: [
            { subtitle: 'To Power Your Experience', text: 'Your training data drives your personal dashboard, progress charts, and performance streaks. Nothing is shared publicly without your explicit consent.' },
            { subtitle: 'Community Features', text: 'If you choose to share sessions with the Carboneto community, only the content you explicitly post will be visible to others. Your private logs stay private.' },
            { subtitle: 'Product Improvement', text: 'Aggregated, anonymized data helps us build better features. We never use your individual performance data for advertising purposes.' }
          ]
        },
        {
          number: '03',
          title: 'Data Sharing & Third Parties',
          content: [
            { subtitle: 'We Do Not Sell Your Data', text: 'Carboneto does not sell, rent, or trade your personal information to any third party. Period. Your grind is yours.' },
            { subtitle: 'Service Providers', text: 'We work with trusted infrastructure partners who are contractually bound to handle your data with the same level of care we apply internally.' },
            { subtitle: 'Legal Requirements', text: 'We may disclose information if required by law or to protect the safety and integrity of our platform and community.' }
          ]
        },
        {
          number: '04',
          title: 'Data Security',
          content: [
            { subtitle: 'End-to-End Protection', text: 'All data transmitted between your device and our servers is encrypted using TLS 1.3. Stored data is encrypted at rest using AES-256.' },
            { subtitle: 'Access Controls', text: 'Access to user data is strictly limited and logged. Only authorized personnel with a legitimate operational need can access any personal data.' }
          ]
        },
        {
          number: '05',
          title: 'Your Rights',
          content: [
            { subtitle: 'Access & Portability', text: 'You can request a full export of your personal data at any time from your account settings, delivered within 30 days.' },
            { subtitle: 'Deletion', text: 'You have the right to delete your account and all associated data permanently. Active systems are cleared within 30 days, backups within 90 days.' },
            { subtitle: 'Corrections', text: 'If any personal information is inaccurate, update it directly in your profile settings or contact our support team.' }
          ]
        },
        {
          number: '06',
          title: 'Cookies & Tracking',
          content: [
            { subtitle: 'Essential Cookies Only', text: 'We use only strictly necessary cookies to keep you logged in and maintain your session. No third-party advertising cookies or tracking pixels.' },
            { subtitle: 'Analytics', text: 'We use privacy-respecting, self-hosted analytics to understand feature usage. This data is aggregated and never tied to your individual identity.' }
          ]
        },
        {
          number: '07',
          title: 'Contact Us',
          content: [
            { subtitle: 'Privacy Team', text: 'For any privacy-related questions, requests, or concerns, contact us at privacy@carboneto.app. We aim to respond within 72 hours.' },
            { subtitle: 'Last Updated', text: 'This Privacy Policy was last updated on March 1, 2025. We will notify you of material changes via email or in-app notification before they take effect.' }
          ]
        }
      ]
    },
    terms: {
      label: 'Legal',
      headline: 'Terms of',
      headlineFade: 'Use.',
      intro: 'By using Carboneto, you agree to these terms. We wrote them to be clear and fair — no legal fog, no tricks. Read them, know your rights, know ours.',
      sections: [
        {
          number: '01',
          title: 'Acceptance of Terms',
          content: [
            { subtitle: 'Agreement', text: 'By downloading, installing, or using the Carboneto app, you agree to be bound by these Terms of Use. If you do not agree, do not use the app.' },
            { subtitle: 'Age Requirement', text: 'You must be at least 13 years old to use Carboneto. If you are under 18, you confirm that you have parental or guardian consent.' },
            { subtitle: 'Updates', text: 'We may update these terms from time to time. Continued use of the app after changes means you accept the new terms. We will always notify you before significant changes.' }
          ]
        },
        {
          number: '02',
          title: 'Your Account',
          content: [
            { subtitle: 'Responsibility', text: 'You are responsible for maintaining the security of your account and all activity that occurs under it. Use a strong password and do not share your credentials.' },
            { subtitle: 'Accuracy', text: 'You agree to provide accurate, current information when creating your account. Impersonation or false identity is strictly prohibited.' },
            { subtitle: 'Termination', text: 'You may delete your account at any time. We reserve the right to suspend or terminate accounts that violate these terms without prior notice.' }
          ]
        },
        {
          number: '03',
          title: 'Use of the App',
          content: [
            { subtitle: 'Permitted Use', text: 'Carboneto is designed for personal athletic training and development. You may use it to log workouts, follow programs, and connect with the community.' },
            { subtitle: 'Prohibited Conduct', text: 'You may not use Carboneto to harass other users, post false or misleading content, attempt to reverse-engineer the app, or engage in any activity that disrupts the platform.' },
            { subtitle: 'Community Standards', text: 'We are a performance-focused community. Content that is hateful, discriminatory, or unrelated to athletic development will be removed and may result in account suspension.' }
          ]
        },
        {
          number: '04',
          title: 'Your Content',
          content: [
            { subtitle: 'Ownership', text: 'You own all training data, logs, and content you create in Carboneto. We do not claim ownership of your personal performance data.' },
            { subtitle: 'License to Us', text: 'By posting content publicly within the app, you grant Carboneto a limited, non-exclusive license to display that content within the platform. We will never sell your content.' },
            { subtitle: 'Removal', text: 'You can delete your content at any time. We may remove content that violates these terms or our community standards.' }
          ]
        },
        {
          number: '05',
          title: 'Subscriptions & Payments',
          content: [
            { subtitle: 'Free Trial', text: 'Carboneto offers a free trial period. No payment is required during the trial. You will be notified before any charges apply.' },
            { subtitle: 'Billing', text: 'Paid subscriptions are billed on a recurring basis. You authorize us to charge your payment method at the start of each billing period.' },
            { subtitle: 'Cancellation & Refunds', text: 'You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. Refunds are handled on a case-by-case basis.' }
          ]
        },
        {
          number: '06',
          title: 'Intellectual Property',
          content: [
            { subtitle: 'Our Property', text: 'Carboneto, its logo, design, codebase, and all related materials are owned by Carboneto Inc. You may not copy, reproduce, or distribute any part of the app without written permission.' },
            { subtitle: 'Feedback', text: 'If you submit feedback or suggestions, you grant us the right to use them without compensation. We appreciate your input — it helps us build a better product.' }
          ]
        },
        {
          number: '07',
          title: 'Limitation of Liability',
          content: [
            { subtitle: 'No Warranty', text: 'Carboneto is provided "as is." We do not guarantee the app will be error-free or uninterrupted. We are not responsible for any injuries resulting from following training programs within the app.' },
            { subtitle: 'Liability Cap', text: 'To the maximum extent permitted by law, Carboneto\'s total liability for any claim is limited to the amount you paid us in the 12 months preceding the claim.' }
          ]
        },
        {
          number: '08',
          title: 'Contact',
          content: [
            { subtitle: 'Legal Team', text: 'For any legal questions or concerns regarding these terms, contact us at legal@carboneto.app. We aim to respond within 5 business days.' },
            { subtitle: 'Last Updated', text: 'These Terms of Use were last updated on March 1, 2025. Continued use of the app constitutes acceptance of any updates.' }
          ]
        }
      ]
    },
    about: {
      label: 'Our Story',
      headline: 'Built by',
      headlineFade: 'Ballers.',
      intro: 'Carboneto was born in a school gym. Not in a boardroom.',
      mission: {
        label: 'Mission',
        title: 'We exist to give every serious basketball player the tools the pros take for granted.',
        desc: 'Most training apps were built for gym-goers counting calories. Carboneto was built for the baller who shows up every day — the one who studies the game, tracks every session, and refuses to settle for mediocrity. We replaced scattered YouTube videos and messy spreadsheets with one structured, focused, no-excuses platform.'
      },
      story: {
        label: 'The Story',
        title: 'It started at our school.',
        desc: 'We were team captains. Every week, we sat down with our coach to plan training sessions — and every week, it was the same struggle. Searching Google for drills. Hunting YouTube for videos. Trying to adapt pro-level workouts to the limited structure of a school gym with no budget and no resources.',
        desc2: 'We weren\'t looking for perfect. We were looking for something that worked for us — for our court, our team, our level. Nothing existed. So we built Carboneto. What started as a solution for our own team is now a platform for every serious player who trains with what they have and refuses to make excuses.'
      },
      values: {
        label: 'What We Stand For',
        title: 'Standards. Structure. Results.',
        items: [
          { title: 'No Shortcuts', desc: 'We don\'t celebrate effort. We celebrate results. Real progress, logged and verified.' },
          { title: 'Built for Basketball', desc: 'Every feature, every flow, every decision — designed specifically for the basketball player\'s journey. Not for runners. Not for gym-goers. For ballers.' },
          { title: 'Community Over Clout', desc: 'No vanity metrics. No follower counts. Just a community of players and coaches who hold each other to a higher standard.' },
          { title: 'Structure Wins', desc: 'Talent without structure is wasted potential. Carboneto gives every player — regardless of budget or facility — the same structured approach used by elite programs.' },
        ]
      },
      team: {
        label: 'The Team',
        title: 'Players who got tired of waiting.',
        desc: 'The Carboneto team is made up of basketball players, coaches, and engineers who lived the problem firsthand. We know what it\'s like to plan a session with no tools, train in a school gym with no resources, and compete with no data. We built the platform we always needed.'
      },
      cta: {
        title: 'Ready to build your legacy?',
        subtitle: 'Download Carboneto and start your free trial today.',
        button: 'Try for Free'
      }
    },
  },
  pt: {
    navbar: {
      features: 'Recursos',
      community: 'Comunidade',
      philosophy: 'Filosofia',
      vision: 'Visão',
      login: 'Entrar',
      tryFree: 'Teste Grátis',
    },
    hero: {
      headline: 'Build your Legacy.',
      subheadline: 'Carboneto é um ecossistema de performance projetado para a grandeza. Desenvolva treinos mais inteligentes, valide seu progresso real e desafie seus limites entre os melhores.',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      badge1: 'Jogue Entre os Melhores',
      badge2: 'Performance Estruturada',
      badge3: 'A Elite Está Aqui'
    },
    ecosystem: {
      title: 'O sistema definitivo.',
      subtitle: 'Projetado para eliminar o improviso e elevar o seu padrão.',
      train: { 
        title: 'Construa', 
        desc: 'Crie treinos de elite ou siga programas de alta performance.' 
      },
      track: { 
        title: 'Controle', 
        desc: 'Monitore cada ação e mantenha precisão em todas as etapas.' 
      },
      progress: { 
        title: 'Evolua', 
        desc: 'Transforme dados em insights. Acompanhe seu crescimento real.' 
      },
      compete: { 
        title: 'Supere-se', 
        desc: 'Teste seus limites e conquiste posições de destaque.' 
      },
    },
    community: {
      title: 'Onde a Elite Treina',
      desc: 'Carboneto não um app de treino. É referência. Cada repetição, cada treino, cada conquista — tudo verificado. Sem distrações. Sem ruído. Só evolução real.',
      item1: {
        title: 'Resultados Reais',
        desc: 'Cada dado registrado em tempo real. Nada de aparência: cada repetição conta, cada progresso é autêntico.'
      },
      item2: {
        title: 'Treinamento Profissional',
        desc: 'Conteúdo criado por treinadores de elite, entregue para quem busca superar limites todos os dias.'
      },
      item3: {
        title: 'O Padrão Nunca Para',
        desc: 'Aqui, a régua é alta. E sobe a cada treino. Você evolui cercado pelos melhores.'
      },
      coachName: 'Coach Paes',
      coachMessage: 'Chico marcou 22 pontos e deu 8 assistências hoje. Duas semanas no programa de pick-and-roll. É isso que significa treinar de verdade.',
      prName: 'Novo Recorde Pessoal',
      prMessage: 'Chico fez 847 arremessos esta semana — sua melhor marca até agora.'
    },

    product: {
      feature1: { 
        title: 'Planejamento preciso.', 
        desc: 'Elimine a dúvida. Estruture rotinas inteligentes com etapas, tarefas e intervalos definidos.' 
      },
      feature2: { 
        title: 'Métricas que importam.', 
        desc: 'Volume, consistência e resultados sob controle. Os dados não mentem—use a verdade a seu favor.' 
      },
      feature3: { 
        title: 'Padrão profissional.', 
        desc: 'Isole competências-chave e desenvolva habilidades de forma completa e estratégica.' 
      },
      feature4: { 
        title: 'Estado de fluxo.', 
        desc: 'Modo \'Foco Total\'. Interface limpa, atenção máxima. É só você e suas metas.' 
      },
    },
    philosophy: {
      title: 'Legado se constrói todo dia.',
      line1: 'A grandeza não é um acidente.',
      line2: 'É método.',
      line3: 'É precisão.',
      line4: 'É constância.',
      footer: 'Feito para atletas que definem o padrão. Não para quem dá desculpas.',
    },
    vision: {
      title: 'O Futuro.',
      subtitle: 'O sistema operacional da próxima geração do basquete.',
      card1: { 
        title: 'Treino Estruturado', 
        desc: 'Programas planejados para evolução consistente. Cada repetição conta, cada progresso é real.' 
      },
      card2: { 
        title: 'Performance Verificada', 
        desc: 'Dados reais de treino e resultados autênticos. Nada de aparência, só evolução comprovada.' 
      },
      card3: { 
        title: 'Leitura de Jogo', 
        desc: 'Análise detalhada para desenvolver visão e tomada de decisão em quadra.' 
      },
      card4: { 
        title: 'Superando Limites', 
        desc: 'Compare seu progresso e veja seu crescimento entre os melhores.' 
      }
    },
    finalCta: {
      title: 'Sua evolução não pode esperar.',
      subtitle: 'Baixe agora e assuma o controle do seu jogo.',
      downloadOn: 'Baixe na',
      getItOn: 'DISPONÍVEL NO',
    },
    footer: {
      tagline: 'A tecnologia por trás do atleta moderno. Alta performance, foco e evolução constante.',
      pages: 'Páginas',
      menus: 'Menus',
      information: 'Informação',
      rights: 'Todos os Direitos Reservados',
      privacy: 'Privacidade',
      terms: 'Termos',
      sitemap: 'Mapa do Site',
      about: 'Sobre',
      blog: 'Blog',
      careers: 'Carreiras',
      contact: 'Contato',
      press: 'Imprensa',
      partners: 'Parceiros',
      help: 'Ajuda',
      cookie: 'Cookies',
    },
    privacy: {
      label: 'Legal',
      headline: 'Privacidade',
      headlineFade: 'Política.',
      intro: 'Construímos o Carboneto para atletas que levam o jogo a sério. Levamos sua privacidade com o mesmo cuidado. Aqui está exatamente o que coletamos, por quê e como protegemos.',
      sections: [
        {
          number: '01',
          title: 'Informações que Coletamos',
          content: [
            { subtitle: 'Conta e Perfil', text: 'Ao criar sua conta no Carboneto, coletamos nome, e-mail, data de nascimento e foto de perfil. Essas informações são usadas exclusivamente para personalizar sua experiência.' },
            { subtitle: 'Dados de Treino', text: 'Cada sessão de treino, exercício, repetição e métrica registrada é armazenada com segurança. Seu trabalho pertence a você.' },
            { subtitle: 'Dispositivo e Uso', text: 'Coletamos informações básicas do dispositivo e padrões de uso anonimizados para melhorar o desempenho do app. Não vendemos esses dados.' }
          ]
        },
        {
          number: '02',
          title: 'Como Usamos Seus Dados',
          content: [
            { subtitle: 'Para Potencializar Sua Experiência', text: 'Seus dados de treino alimentam seu painel pessoal, gráficos de progresso e sequências de performance. Nada é compartilhado publicamente sem seu consentimento.' },
            { subtitle: 'Recursos da Comunidade', text: 'Se você escolher compartilhar sessões com a comunidade Carboneto, apenas o conteúdo que você postar explicitamente será visível. Seus registros privados permanecem privados.' },
            { subtitle: 'Melhoria do Produto', text: 'Dados agregados e anonimizados nos ajudam a criar recursos melhores. Nunca usamos seus dados individuais para fins publicitários.' }
          ]
        },
        {
          number: '03',
          title: 'Compartilhamento de Dados',
          content: [
            { subtitle: 'Não Vendemos Seus Dados', text: 'O Carboneto não vende, aluga ou negocia suas informações pessoais com terceiros. Ponto final. Seu esforço é seu.' },
            { subtitle: 'Parceiros de Infraestrutura', text: 'Trabalhamos com parceiros de infraestrutura confiáveis que são contratualmente obrigados a tratar seus dados com o mesmo cuidado que aplicamos internamente.' },
            { subtitle: 'Exigências Legais', text: 'Podemos divulgar informações se exigido por lei ou para proteger a segurança e integridade da plataforma e comunidade.' }
          ]
        },
        {
          number: '04',
          title: 'Segurança dos Dados',
          content: [
            { subtitle: 'Proteção Completa', text: 'Todos os dados transmitidos entre seu dispositivo e nossos servidores são criptografados com TLS 1.3. Os dados armazenados usam criptografia AES-256.' },
            { subtitle: 'Controle de Acesso', text: 'O acesso aos dados dos usuários é estritamente limitado e registrado. Apenas pessoal autorizado com necessidade operacional legítima pode acessar qualquer dado pessoal.' }
          ]
        },
        {
          number: '05',
          title: 'Seus Direitos',
          content: [
            { subtitle: 'Acesso e Portabilidade', text: 'Você pode solicitar uma exportação completa dos seus dados pessoais a qualquer momento nas configurações da conta, entregue em até 30 dias.' },
            { subtitle: 'Exclusão', text: 'Você tem o direito de excluir sua conta e todos os dados associados permanentemente. Sistemas ativos são limpos em 30 dias, backups em 90 dias.' },
            { subtitle: 'Correções', text: 'Se alguma informação pessoal estiver incorreta, atualize diretamente nas configurações do perfil ou entre em contato com nosso suporte.' }
          ]
        },
        {
          number: '06',
          title: 'Cookies e Rastreamento',
          content: [
            { subtitle: 'Apenas Cookies Essenciais', text: 'Usamos apenas cookies estritamente necessários para manter sua sessão ativa. Sem cookies de publicidade de terceiros ou pixels de rastreamento.' },
            { subtitle: 'Análise de Uso', text: 'Usamos análises auto-hospedadas e respeitosas à privacidade para entender o uso dos recursos. Esses dados são agregados e nunca vinculados à sua identidade individual.' }
          ]
        },
        {
          number: '07',
          title: 'Fale Conosco',
          content: [
            { subtitle: 'Equipe de Privacidade', text: 'Para dúvidas, solicitações ou preocupações relacionadas à privacidade, entre em contato pelo privacy@carboneto.app. Respondemos em até 72 horas.' },
            { subtitle: 'Última Atualização', text: 'Esta Política de Privacidade foi atualizada em 1º de março de 2025. Notificaremos sobre mudanças relevantes por e-mail ou notificação no app antes de entrarem em vigor.' }
          ]
        }
      ]
    },
    terms: {
      label: 'Legal',
      headline: 'Termos de',
      headlineFade: 'Uso.',
      intro: 'Ao usar o Carboneto, você concorda com estes termos. Escrevemos para ser claro e justo — sem enrolação, sem letras miúdas. Leia, conheça seus direitos e os nossos.',
      sections: [
        {
          number: '01',
          title: 'Aceitação dos Termos',
          content: [
            { subtitle: 'Concordância', text: 'Ao baixar, instalar ou usar o app Carboneto, você concorda com estes Termos de Uso. Se não concordar, não use o app.' },
            { subtitle: 'Idade Mínima', text: 'Você deve ter pelo menos 13 anos para usar o Carboneto. Se tiver menos de 18, confirma que possui consentimento dos pais ou responsável.' },
            { subtitle: 'Atualizações', text: 'Podemos atualizar estes termos periodicamente. O uso contínuo do app após alterações significa que você aceita os novos termos. Sempre avisaremos antes de mudanças significativas.' }
          ]
        },
        {
          number: '02',
          title: 'Sua Conta',
          content: [
            { subtitle: 'Responsabilidade', text: 'Você é responsável pela segurança da sua conta e por toda atividade realizada por meio dela. Use uma senha forte e não compartilhe suas credenciais.' },
            { subtitle: 'Precisão', text: 'Você concorda em fornecer informações precisas e atuais ao criar sua conta. Personificação ou identidade falsa é estritamente proibida.' },
            { subtitle: 'Encerramento', text: 'Você pode excluir sua conta a qualquer momento. Reservamos o direito de suspender ou encerrar contas que violem estes termos sem aviso prévio.' }
          ]
        },
        {
          number: '03',
          title: 'Uso do App',
          content: [
            { subtitle: 'Uso Permitido', text: 'O Carboneto é projetado para treinamento esportivo e desenvolvimento pessoal. Você pode usá-lo para registrar treinos, seguir programas e se conectar com a comunidade.' },
            { subtitle: 'Conduta Proibida', text: 'É proibido usar o Carboneto para assediar outros usuários, publicar conteúdo falso ou enganoso, tentar fazer engenharia reversa do app ou realizar qualquer atividade que prejudique a plataforma.' },
            { subtitle: 'Padrões da Comunidade', text: 'Somos uma comunidade focada em performance. Conteúdo ofensivo, discriminatório ou não relacionado ao desenvolvimento atlético será removido e pode resultar em suspensão da conta.' }
          ]
        },
        {
          number: '04',
          title: 'Seu Conteúdo',
          content: [
            { subtitle: 'Propriedade', text: 'Você é dono de todos os dados de treino, registros e conteúdos criados no Carboneto. Não reivindicamos propriedade sobre seus dados pessoais de performance.' },
            { subtitle: 'Licença para Nós', text: 'Ao publicar conteúdo publicamente no app, você concede ao Carboneto uma licença limitada e não exclusiva para exibir esse conteúdo na plataforma. Nunca venderemos seu conteúdo.' },
            { subtitle: 'Remoção', text: 'Você pode excluir seu conteúdo a qualquer momento. Podemos remover conteúdo que viole estes termos ou nossos padrões de comunidade.' }
          ]
        },
        {
          number: '05',
          title: 'Assinaturas e Pagamentos',
          content: [
            { subtitle: 'Período Gratuito', text: 'O Carboneto oferece um período de teste gratuito. Nenhum pagamento é necessário durante o teste. Você será avisado antes de qualquer cobrança.' },
            { subtitle: 'Cobrança', text: 'As assinaturas pagas são cobradas de forma recorrente. Você autoriza a cobrança no seu método de pagamento no início de cada período de faturamento.' },
            { subtitle: 'Cancelamento e Reembolso', text: 'Você pode cancelar sua assinatura a qualquer momento. O cancelamento entra em vigor no final do período de faturamento atual. Reembolsos são analisados caso a caso.' }
          ]
        },
        {
          number: '06',
          title: 'Propriedade Intelectual',
          content: [
            { subtitle: 'Nossa Propriedade', text: 'O Carboneto, seu logotipo, design, código-fonte e todos os materiais relacionados são de propriedade da Carboneto Inc. Você não pode copiar, reproduzir ou distribuir qualquer parte do app sem autorização por escrito.' },
            { subtitle: 'Feedback', text: 'Se você enviar feedback ou sugestões, nos concede o direito de usá-los sem compensação. Valorizamos sua contribuição — ela nos ajuda a construir um produto melhor.' }
          ]
        },
        {
          number: '07',
          title: 'Limitação de Responsabilidade',
          content: [
            { subtitle: 'Sem Garantia', text: 'O Carboneto é fornecido "como está". Não garantimos que o app será livre de erros ou ininterrupto. Não somos responsáveis por lesões decorrentes de programas de treino dentro do app.' },
            { subtitle: 'Limite de Responsabilidade', text: 'Na extensão máxima permitida por lei, a responsabilidade total do Carboneto por qualquer reclamação é limitada ao valor que você nos pagou nos 12 meses anteriores à reclamação.' }
          ]
        },
        {
          number: '08',
          title: 'Contato',
          content: [
            { subtitle: 'Equipe Jurídica', text: 'Para dúvidas ou questões legais relacionadas a estes termos, entre em contato pelo legal@carboneto.app. Respondemos em até 5 dias úteis.' },
            { subtitle: 'Última Atualização', text: 'Estes Termos de Uso foram atualizados em 1º de março de 2025. O uso contínuo do app constitui aceitação de quaisquer atualizações.' }
          ]
        }
      ]
    },
    about: {
      label: 'Nossa História',
      headline: 'Feito por',
      headlineFade: 'Atletas.',
      intro: 'O Carboneto não nasceu para vender treino. Nasceu para elevar padrão.',
      mission: {
        label: 'Missão',
        title: 'Existimos para dar aos atletas a infraestrutura que eles merecem.',
        desc: 'Existimos para o jogador que aparece quando ninguém está olhando. O que registra cada sessão. O que revisa cada erro. O que entende que talento é só o começo. O Carboneto transforma esforço bruto em progresso estruturado. Sem ruído. Sem distração. Sem desculpa.'
      },
      story: {
        label: 'Missão',
        title: 'Dar ao atleta comum a estrutura de elite.',
        desc: 'Éramos capitães do time. Toda semana, sentávamos com o nosso treinador para montar os treinos — e toda semana era a mesma luta. Pesquisar exercícios no Google. Caçar vídeos no YouTube. Tentar adaptar treinos de nível profissional para a estrutura limitada da nossa escola, sem verba e sem recursos.',
        desc2: 'A gente não queria perfeito. A gente queria algo que funcionasse pra nós — pra nossa quadra, nosso time, nosso nível. Não existia nada assim. Então a gente criou o Carboneto. O que começou como solução pro nosso time virou uma plataforma para todo jogador sério que treina e não dá desculpa.'
      },
      values: {
        label: 'Pilares',
        title: 'Padrão acima de tudo.',
        items: [
          { 
            title: 'Resultado > Motivação', 
            desc: 'Disciplina é sistema. Não emoção. Registramos progresso real — não frases bonitas.' 
          },
          { 
            title: 'Basquete em Primeiro Lugar', 
            desc: 'Não é um app genérico de treino. Cada detalhe existe para servir o jogador de basquete.' 
          },
          { 
            title: 'Estrutura Vence Talento', 
            desc: 'Talento sem método é desperdício. Estrutura cria consistência. Consistência cria domínio.' 
          },
          { 
            title: 'Sem Atalhos', 
            desc: 'Se fosse fácil, todo mundo teria nível alto. O Carboneto não facilita. Organiza.' 
          },
        ]
      },
      team: {
        label: 'O Time',
        title: 'Jogadores que cansaram de esperar.',
        desc: 'O time do Carboneto é formado por jogadores de basquete, treinadores e engenheiros que viveram o problema na pele. Sabemos o que é planejar um treino sem ferramentas, treinar numa quadra escolar sem recurso e competir sem dados. Criamos a plataforma que sempre precisamos.'
      },
      cta: {
        title: 'Pronto para construir seu legado?',
        subtitle: 'Baixe o Carboneto e comece seu período gratuito hoje.',
        button: 'Teste Grátis'
      }
    },
  },
  
  es: {
    navbar: {
      features: 'Funciones',
      community: 'Comunidad',
      philosophy: 'Filosofía',
      vision: 'Visión',
      login: 'Entrar',
      tryFree: 'Prueba Gratis',
    },
    hero: {
      headline: 'Build your Legacy.',
      subheadline: 'Carboneto es un ecosistema de alto rendimiento. Estructura tus entrenamientos. Mide tu evolución. Compite entre los mejores.',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      badge1: 'Para Atletas Reales',
      badge2: 'Rendimiento Estructurado',
      badge3: 'Impulsado por la Comunidad',
    },
    ecosystem: {
      title: 'Mucho más que una app.',
      subtitle: 'Un ecosistema diseñado para transformar el caos en estructura.',
      train: { title: 'Entrena', desc: 'Crea rutinas a medida o sigue programas de élite.' },
      track: { title: 'Monitorea', desc: 'Cada serie. Cada repetición. Registra todo con precisión.' },
      progress: { title: 'Evoluciona', desc: 'Visualiza tu avance con métricas avanzadas.' },
      compete: { title: 'Compite', desc: 'Compara tus números y domina los rankings globales.' },
    },
    community: {
      title: 'Donde entrena la élite.',
      desc: 'Carboneto no es un feed. Es un estándar. Cada repetición registrada, cada programa compartido, cada logro publicado — todo verificado. Sin escenarios. Sin ruido. Solo trabajo.',
      item1: {
        title: 'Rendimiento Verificado',
        desc: 'Cada dato es registrado en tiempo real. No se pueden falsificar repeticiones. No se pueden falsificar resultados.'
      },
      item2: {
        title: 'Estructura de Élite',
        desc: 'Entrenadores de alto nivel crean y distribuyen programas profesionales directamente a sus atletas.'
      },
      item3: {
        title: 'El Estándar No Baja',
        desc: 'Las personas a tu alrededor definen el nivel. En Carboneto, el nivel siempre sube.'
      },
      coachName: 'Coach Paes',
      coachMessage: 'Chico metió 22 puntos y 8 asistencias esta noche. Dos semanas con el programa de pick-and-roll. Por eso entrenamos.',
      prName: 'Nuevo Récord Personal',
      prMessage: 'Chico acaba de completar 847 repeticiones de tiro esta semana. Su mejor marca.',
    },
    product: {
      feature1: { title: 'Estructura tus sesiones.', desc: 'Se acabaron las suposiciones. Diseña entrenamientos con series, repeticiones y pausas. Guarda tus favoritos o importa de tu entrenador.' },
      feature2: { title: 'Mide lo que importa.', desc: 'Controla volumen, intensidad y consistencia. Los datos no mienten. Úsalos para evolucionar.' },
      feature3: { title: 'Organiza como un profesional.', desc: 'Categoriza por habilidad: Tiro, Manejo de Balón, Defensa y Físico. Mantén tu juego equilibrado.' },
      feature4: { title: 'Enfoque total.', desc: 'Modo \'En Sesión\'. Pantalla siempre activa, controles minimalistas. Solo tú y la cancha.' },
    },
    philosophy: {
      title: 'El legado se construye a diario.',
      line1: 'La grandeza no es casualidad.',
      line2: 'Es estructura.',
      line3: 'Repetición.',
      line4: 'Métrica.',
      footer: 'Carboneto existe para quienes crean estándares. No excusas.',
    },
    vision: {
      title: 'El Futuro.',
      subtitle: 'El sistema operativo de la próxima generación.',
      card1: { 
        title: 'Entrenamiento Estructurado', 
        desc: 'Programas diseñados para un crecimiento constante. Cada repetición cuenta, cada sesión importa.' 
      },
      card2: { 
        title: 'Rendimiento Verificado', 
        desc: 'Resultados reales. Sin adornos. Controla tu progreso y mide lo que importa.' 
      },
      card3: { 
        title: 'Visión de Juego', 
        desc: 'Desarrolla tu percepción y toma de decisiones en la cancha con análisis detallado.' 
      },
      card4: { 
        title: 'Mide Tu Progreso', 
        desc: 'Descubre tu nivel entre los mejores. Compara, mejora y evoluciona.' 
      }
    },
    finalCta: {
      title: 'Tu próximo nivel empieza aquí.',
      subtitle: 'Descarga Carboneto y comienza tu prueba gratis.',
      downloadOn: 'Descárgalo en',
      getItOn: 'DISPONIBLE EN',
    },
    footer: {
      tagline: 'Diseñado para impulsar el rendimiento, la fuerza y la evolución del atleta moderno.',
      pages: 'Páginas',
      menus: 'Menús',
      information: 'Información',
      rights: 'Todos los Derechos Reservados',
      privacy: 'Privacidad',
      terms: 'Términos',
      sitemap: 'Mapa del Sitio',
      about: 'Sobre',
      blog: 'Blog',
      careers: 'Carreras',
      contact: 'Contacto',
      press: 'Prensa',
      partners: 'Socios',
      help: 'Centro de Ayuda',
      cookie: 'Cookies',
    },
    privacy: {
      label: 'Legal',
      headline: 'Privacidad',
      headlineFade: 'Política.',
      intro: 'Construimos Carboneto para atletas que se toman su juego en serio. Nos tomamos tu privacidad igual de en serio. Aquí está exactamente lo que recopilamos, por qué y cómo lo protegemos.',
      sections: [
        {
          number: '01',
          title: 'Información que Recopilamos',
          content: [
            { subtitle: 'Cuenta y Perfil', text: 'Al crear tu cuenta en Carboneto, recopilamos tu nombre, correo electrónico, fecha de nacimiento y foto de perfil. Esta información se usa únicamente para personalizar tu experiencia.' },
            { subtitle: 'Datos de Entrenamiento', text: 'Cada sesión de entrenamiento, ejercicio, repetición y métrica que registras se almacena de forma segura. Tu trabajo te pertenece.' },
            { subtitle: 'Dispositivo y Uso', text: 'Recopilamos información básica del dispositivo y patrones de uso anonimizados para mejorar el rendimiento de la app. No vendemos estos datos.' }
          ]
        },
        {
          number: '02',
          title: 'Cómo Usamos Tus Datos',
          content: [
            { subtitle: 'Para Potenciar Tu Experiencia', text: 'Tus datos de entrenamiento impulsan tu panel personal, gráficos de progreso y rachas de rendimiento. Nada se comparte públicamente sin tu consentimiento explícito.' },
            { subtitle: 'Funciones de Comunidad', text: 'Si decides compartir sesiones con la comunidad Carboneto, solo el contenido que publiques explícitamente será visible para otros. Tus registros privados permanecen privados.' },
            { subtitle: 'Mejora del Producto', text: 'Los datos agregados y anonimizados nos ayudan a crear mejores funciones. Nunca usamos tus datos individuales con fines publicitarios.' }
          ]
        },
        {
          number: '03',
          title: 'Compartición de Datos',
          content: [
            { subtitle: 'No Vendemos Tus Datos', text: 'Carboneto no vende, alquila ni intercambia tu información personal con terceros. Punto. Tu esfuerzo es tuyo.' },
            { subtitle: 'Proveedores de Servicios', text: 'Trabajamos con socios de infraestructura de confianza que están contractualmente obligados a tratar tus datos con el mismo nivel de cuidado que aplicamos internamente.' },
            { subtitle: 'Requerimientos Legales', text: 'Podemos divulgar información si lo exige la ley o para proteger la seguridad e integridad de nuestra plataforma y comunidad.' }
          ]
        },
        {
          number: '04',
          title: 'Seguridad de los Datos',
          content: [
            { subtitle: 'Protección Completa', text: 'Todos los datos transmitidos entre tu dispositivo y nuestros servidores están cifrados con TLS 1.3. Los datos almacenados usan cifrado AES-256.' },
            { subtitle: 'Control de Acceso', text: 'El acceso a los datos de usuario está estrictamente limitado y registrado. Solo el personal autorizado con una necesidad operativa legítima puede acceder a datos personales.' }
          ]
        },
        {
          number: '05',
          title: 'Tus Derechos',
          content: [
            { subtitle: 'Acceso y Portabilidad', text: 'Puedes solicitar una exportación completa de tus datos personales en cualquier momento desde la configuración de tu cuenta, entregada en 30 días.' },
            { subtitle: 'Eliminación', text: 'Tienes derecho a eliminar tu cuenta y todos los datos asociados de forma permanente. Los sistemas activos se limpian en 30 días, las copias de seguridad en 90 días.' },
            { subtitle: 'Correcciones', text: 'Si alguna información personal es inexacta, actualízala directamente en la configuración de tu perfil o contacta a nuestro equipo de soporte.' }
          ]
        },
        {
          number: '06',
          title: 'Cookies y Rastreo',
          content: [
            { subtitle: 'Solo Cookies Esenciales', text: 'Usamos únicamente las cookies estrictamente necesarias para mantener tu sesión activa. Sin cookies publicitarias de terceros ni píxeles de rastreo.' },
            { subtitle: 'Análisis de Uso', text: 'Usamos análisis auto-alojados y respetuosos con la privacidad para entender el uso de las funciones. Estos datos son agregados y nunca vinculados a tu identidad individual.' }
          ]
        },
        {
          number: '07',
          title: 'Contáctanos',
          content: [
            { subtitle: 'Equipo de Privacidad', text: 'Para cualquier pregunta, solicitud o inquietud relacionada con la privacidad, contáctanos en privacy@carboneto.app. Respondemos en un plazo de 72 horas.' },
            { subtitle: 'Última Actualización', text: 'Esta Política de Privacidad fue actualizada el 1 de marzo de 2025. Te notificaremos sobre cambios importantes por correo electrónico o notificación en la app antes de que entren en vigor.' }
          ]
        }
      ]
    },
    terms: {
      label: 'Legal',
      headline: 'Términos de',
      headlineFade: 'Uso.',
      intro: 'Al usar Carboneto, aceptas estos términos. Los escribimos para ser claros y justos — sin letra pequeña, sin trucos. Léelos, conoce tus derechos y los nuestros.',
      sections: [
        {
          number: '01',
          title: 'Aceptación de los Términos',
          content: [
            { subtitle: 'Acuerdo', text: 'Al descargar, instalar o usar la app Carboneto, aceptas estar sujeto a estos Términos de Uso. Si no estás de acuerdo, no uses la app.' },
            { subtitle: 'Edad Mínima', text: 'Debes tener al menos 13 años para usar Carboneto. Si eres menor de 18, confirmas que tienes el consentimiento de tus padres o tutor.' },
            { subtitle: 'Actualizaciones', text: 'Podemos actualizar estos términos periódicamente. El uso continuado de la app tras los cambios implica que aceptas los nuevos términos. Siempre te notificaremos antes de cambios significativos.' }
          ]
        },
        {
          number: '02',
          title: 'Tu Cuenta',
          content: [
            { subtitle: 'Responsabilidad', text: 'Eres responsable de mantener la seguridad de tu cuenta y de toda la actividad que ocurra en ella. Usa una contraseña segura y no compartas tus credenciales.' },
            { subtitle: 'Exactitud', text: 'Aceptas proporcionar información precisa y actualizada al crear tu cuenta. La suplantación de identidad está estrictamente prohibida.' },
            { subtitle: 'Terminación', text: 'Puedes eliminar tu cuenta en cualquier momento. Nos reservamos el derecho de suspender o cancelar cuentas que violen estos términos sin previo aviso.' }
          ]
        },
        {
          number: '03',
          title: 'Uso de la App',
          content: [
            { subtitle: 'Uso Permitido', text: 'Carboneto está diseñado para el entrenamiento deportivo personal y el desarrollo atlético. Puedes usarlo para registrar entrenamientos, seguir programas y conectarte con la comunidad.' },
            { subtitle: 'Conducta Prohibida', text: 'No puedes usar Carboneto para acosar a otros usuarios, publicar contenido falso o engañoso, intentar realizar ingeniería inversa de la app o realizar cualquier actividad que perjudique la plataforma.' },
            { subtitle: 'Estándares de la Comunidad', text: 'Somos una comunidad enfocada en el rendimiento. El contenido ofensivo, discriminatorio o no relacionado con el desarrollo atlético será eliminado y puede resultar en la suspensión de la cuenta.' }
          ]
        },
        {
          number: '04',
          title: 'Tu Contenido',
          content: [
            { subtitle: 'Propiedad', text: 'Eres dueño de todos los datos de entrenamiento, registros y contenidos que creas en Carboneto. No reclamamos la propiedad de tus datos personales de rendimiento.' },
            { subtitle: 'Licencia para Nosotros', text: 'Al publicar contenido públicamente en la app, otorgas a Carboneto una licencia limitada y no exclusiva para mostrar ese contenido dentro de la plataforma. Nunca venderemos tu contenido.' },
            { subtitle: 'Eliminación', text: 'Puedes eliminar tu contenido en cualquier momento. Podemos eliminar contenido que viole estos términos o nuestros estándares comunitarios.' }
          ]
        },
        {
          number: '05',
          title: 'Suscripciones y Pagos',
          content: [
            { subtitle: 'Prueba Gratuita', text: 'Carboneto ofrece un período de prueba gratuito. No se requiere pago durante la prueba. Se te notificará antes de que se apliquen cargos.' },
            { subtitle: 'Facturación', text: 'Las suscripciones de pago se facturan de forma recurrente. Autorizas el cobro en tu método de pago al inicio de cada período de facturación.' },
            { subtitle: 'Cancelación y Reembolsos', text: 'Puedes cancelar tu suscripción en cualquier momento. La cancelación entra en vigor al final del período de facturación actual. Los reembolsos se gestionan caso por caso.' }
          ]
        },
        {
          number: '06',
          title: 'Propiedad Intelectual',
          content: [
            { subtitle: 'Nuestra Propiedad', text: 'Carboneto, su logotipo, diseño, código y todos los materiales relacionados son propiedad de Carboneto Inc. No puedes copiar, reproducir ni distribuir ninguna parte de la app sin permiso escrito.' },
            { subtitle: 'Comentarios', text: 'Si envías comentarios o sugerencias, nos otorgas el derecho de utilizarlos sin compensación. Valoramos tus aportaciones — nos ayudan a construir un mejor producto.' }
          ]
        },
        {
          number: '07',
          title: 'Limitación de Responsabilidad',
          content: [
            { subtitle: 'Sin Garantía', text: 'Carboneto se proporciona "tal cual". No garantizamos que la app esté libre de errores o sea ininterrumpida. No somos responsables de lesiones derivadas de seguir programas de entrenamiento en la app.' },
            { subtitle: 'Límite de Responsabilidad', text: 'En la máxima medida permitida por la ley, la responsabilidad total de Carboneto por cualquier reclamación se limita al importe que nos pagaste en los 12 meses anteriores a la reclamación.' }
          ]
        },
        {
          number: '08',
          title: 'Contacto',
          content: [
            { subtitle: 'Equipo Legal', text: 'Para cualquier pregunta o inquietud legal relacionada con estos términos, contáctanos en legal@carboneto.app. Respondemos en un plazo de 5 días hábiles.' },
            { subtitle: 'Última Actualización', text: 'Estos Términos de Uso fueron actualizados el 1 de marzo de 2025. El uso continuado de la app constituye la aceptación de cualquier actualización.' }
          ]
        }
      ]
    },
    about: {
      label: 'Nuestra Historia',
      headline: 'Hecho por',
      headlineFade: 'Jugadores.',
      intro: 'Carboneto nació en nuestro colegio. No en una sala de juntas.',
      mission: {
        label: 'Misión',
        title: 'Existimos para dar a cada jugador serio las herramientas que los profesionales ya tienen.',
        desc: 'La mayoría de las apps de entrenamiento fueron hechas para quien cuenta calorías en el gimnasio. Carboneto fue construido para el jugador que se presenta todos los días — el que estudia el juego, registra cada sesión y se niega a conformarse con la mediocridad. Reemplazamos videos dispersos en YouTube y hojas de cálculo desordenadas por una plataforma estructurada, enfocada y sin excusas.'
      },
      story: {
        label: 'La Historia',
        title: 'Empezó en nuestro colegio.',
        desc: 'Éramos capitanes del equipo. Cada semana nos sentábamos con nuestro entrenador a planificar los entrenamientos — y cada semana era la misma lucha. Buscar ejercicios en Google. Rastrear videos en YouTube. Intentar adaptar entrenamientos de nivel profesional a la estructura limitada de nuestra cancha escolar, sin presupuesto y sin recursos.',
        desc2: 'No buscábamos la perfección. Buscábamos algo que funcionara para nosotros — para nuestra cancha, nuestro equipo, nuestro nivel. No existía nada así. Así que construimos Carboneto. Lo que empezó como una solución para nuestro equipo se convirtió en una plataforma para todo jugador serio que entrena con lo que tiene y no pone excusas.'
      },
      values: {
        label: 'Lo Que Defendemos',
        title: 'Estándares. Estructura. Resultados.',
        items: [
          { title: 'Sin Atajos', desc: 'No celebramos el esfuerzo. Celebramos los resultados. Progreso real, registrado y verificado.' },
          { title: 'Hecho para el Baloncesto', desc: 'Cada función, cada flujo, cada decisión — diseñado específicamente para el camino del jugador de baloncesto. No para corredores. No para el gimnasio. Para los que juegan.' },
          { title: 'Comunidad Sobre Todo', desc: 'Sin métricas de vanidad. Sin conteo de seguidores. Solo una comunidad de jugadores y entrenadores que se exigen mutuamente un estándar más alto.' },
          { title: 'La Estructura Gana', desc: 'El talento sin estructura es potencial desperdiciado. Carboneto le da a cualquier jugador — sin importar presupuesto o instalaciones — el mismo enfoque estructurado de los programas de élite.' },
        ]
      },
      team: {
        label: 'El Equipo',
        title: 'Jugadores que se cansaron de esperar.',
        desc: 'El equipo de Carboneto está formado por jugadores de baloncesto, entrenadores e ingenieros que vivieron el problema en primera persona. Sabemos lo que es planificar un entrenamiento sin herramientas, entrenar en una cancha escolar sin recursos y competir sin datos. Construimos la plataforma que siempre necesitamos.'
      },
      cta: {
        title: '¿Listo para construir tu legado?',
        subtitle: 'Descarga Carboneto y comienza tu prueba gratuita hoy.',
        button: 'Prueba Gratis'
      }
    },
  },
};