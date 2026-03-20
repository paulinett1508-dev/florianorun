export const EVENT_DATE = new Date('2026-04-26T05:30:00-03:00');

export const EVENT = {
  name: 'Floriano Run',
  edition: '5ª Edição',
  year: 2026,
  date: '26 de Abril de 2026',
  concentration: '05h30',
  slogan: 'A superação é a nossa linha de chegada!',
  sloganSecondary: 'Vamos fazer você viciar em Adrenalina e Saúde.',
  organizer: 'Anderson dos Santos',
  organizerRole: 'Prof. de Educação Física',
  coOrganizer: 'Uiara Beatriz',
  coOrganizerRole: 'Fisioterapeuta',
  organizerInstagram: '@anderssonedfisica',
  startLocation: 'Av. Frei Antônio Cúrcio, Bairro Bosque',
  route: 'Cais da Beira-Rio e Av. Fauzer Bucar',
  neighborhood: 'Bosque',
  city: 'Floriano',
  state: 'PI',
  location: 'Floriano, Piauí',
  instagram: 'https://www.instagram.com/floriano_run/',
  instagramHandle: '@floriano_run',
  registrationUrl: 'https://runtra.com.br/eventos/floriano-run-2026',
  regulationUrl: 'https://runtra.com.br/storage/regulations/floriano-run-2026-regulamento-1772392698.pdf',
  price: 'R$ 90,00',
  priceLabelNote: 'Lote promocional',
};

export const SCHEDULE = [
  { time: '05h30', activity: 'Concentração e aquecimento' },
  { time: '06h20', activity: 'Largada — 10km' },
  { time: '06h30', activity: 'Largada — 5km e 3km' },
  { time: '~07h45', activity: 'Largada — Kids e Teens' },
];

export const MODALITIES = [
  {
    distance: '3km',
    title: 'Caminhada',
    level: 'Iniciante',
    description: 'Ideal para quem está começando. Traga a família e amigos para curtir o percurso mais leve.',
    icon: 'walking',
    startTime: '06h30',
    category: 'adulto',
  },
  {
    distance: '5km',
    title: 'Corrida',
    level: 'Intermediário',
    description: 'Para quem já tem ritmo. Um percurso desafiador pelas ruas de Floriano com muita energia.',
    icon: 'running',
    startTime: '06h30',
    category: 'adulto',
  },
  {
    distance: '10km',
    title: 'Desafio',
    level: 'Avançado',
    description: 'O percurso completo para quem busca superação. Mostre do que você é capaz!',
    icon: 'trophy',
    startTime: '06h20',
    category: 'adulto',
  },
];

export const KIDS_CATEGORIES = [
  {
    distance: '200m',
    title: 'Kids',
    ageRange: '5 a 7 anos',
    description: 'Diversão sem competição! Todos recebem medalha de conclusão.',
  },
  {
    distance: '500m',
    title: 'Kids',
    ageRange: '8 a 11 anos',
    description: 'Diversão sem competição! Todos recebem medalha de conclusão.',
  },
  {
    distance: '1km',
    title: 'Teens',
    ageRange: '12 a 15 anos',
    description: 'Primeiro desafio para os jovens corredores. Todos recebem medalha.',
  },
];

export const PRIZES = {
  '10km': {
    first: 'R$ 500',
    second: 'R$ 350',
    third: 'R$ 250',
    extras: 'Medalha + Troféu',
  },
  '5km': {
    first: 'R$ 250',
    second: 'R$ 200',
    third: 'R$ 150',
    extras: 'Medalha + Troféu (Categoria Elite)',
  },
};

export const EDITIONS = [
  {
    year: 2022,
    edition: '1ª Edição',
    athletes: 133,
    cities: 18,
    states: 2,
    stateNames: 'PI e MA',
  },
  {
    year: 2023,
    edition: '2ª Edição',
    athletes: 168,
    cities: 18,
    states: 3,
    stateNames: 'PI, MA e PE',
  },
  {
    year: 2024,
    edition: '3ª Edição',
    athletes: 218,
    cities: 32,
    states: 6,
    stateNames: 'PI, MA, PE, CE, PA e SP',
  },
];

export const GALLERY_IMAGES: { src: string; alt: string }[] = [
  // Adicione aqui os nomes dos arquivos de fotos em public/images/gallery/
  // Exemplo: { src: '/images/gallery/foto1.jpg', alt: 'Largada da 4ª edição' },
];

export const FAQ_ITEMS = [
  {
    question: 'Quais são as modalidades disponíveis?',
    answer: 'Adultos: 3km (caminhada), 5km (corrida) e 10km (desafio). Kids: 200m (5-7 anos) e 500m (8-11 anos). Teens: 1km (12-15 anos).',
  },
  {
    question: 'Que horas é a largada?',
    answer: 'Concentração às 5h30. Largada dos 10km às 6h20, seguida dos 5km e 3km às 6h30. Kids e Teens largam após o encerramento do adulto, previsão ~7h45.',
  },
  {
    question: 'O que está incluso na inscrição?',
    answer: 'Kit do atleta com camiseta oficial, número de peito, chip de cronometragem e acesso a todos os pontos de hidratação.',
  },
  {
    question: 'Tem premiação em dinheiro?',
    answer: '10km: R$ 500 (1º), R$ 350 (2º), R$ 250 (3º) — masculino e feminino. 5km Elite: R$ 250 (1º), R$ 200 (2º), R$ 150 (3º). Todos via PIX em até 24h. Além de medalha e troféu.',
  },
  {
    question: 'Crianças podem participar?',
    answer: 'Sim! As categorias Kids (5-7 e 8-11 anos) e Teens (12-15 anos) são voltadas para diversão. Não há finalidade competitiva — todos recebem medalha de conclusão.',
  },
  {
    question: 'Onde será a largada e chegada?',
    answer: 'Largada e chegada na Av. Frei Antônio Cúrcio, bairro Bosque, Floriano-PI. Percurso passando pelo Cais da Beira-Rio e Av. Fauzer Bucar.',
  },
  {
    question: 'Onde posso ver o regulamento completo?',
    answer: 'O regulamento oficial está disponível no site de inscrições (Runtra). Lá você encontra todas as regras, categorias e informações detalhadas.',
  },
];

export const DEVELOPER = {
  name: 'Flow Digital - Automações Inteligentes',
  logoPlaceholder: false,
  logoSrc: '/images/flow-digital-logo.png',
  logoAlt: 'Logo Flow Digital - Automações Inteligentes',
};
