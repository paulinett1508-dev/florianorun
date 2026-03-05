export const EVENT_DATE = new Date('2026-04-26T05:00:00-03:00');

export const EVENT = {
  name: 'Floriano Run',
  edition: '5ª Edição',
  year: 2026,
  date: '26 de Abril de 2026',
  time: '05h00',
  location: 'Floriano, Piauí',
  slogan: 'A superação é a nossa linha de chegada!',
  sloganSecondary: 'Vamos fazer você viciar em Adrenalina e Saúde.',
  organizer: 'Andersson',
  organizerInstagram: '@anderssonedfisica',
  instagram: 'https://www.instagram.com/floriano_run/',
  instagramHandle: '@floriano_run',
  registrationUrl: 'https://runtra.com.br/eventos/floriano-run-2026',
  price: 'R$ 90,00',
  priceLabelNote: 'Lote promocional',
};

export const MODALITIES = [
  {
    distance: '3km',
    title: 'Caminhada',
    level: 'Iniciante',
    description: 'Ideal para quem está começando. Traga a família e amigos para curtir o percurso mais leve.',
    icon: 'walking',
  },
  {
    distance: '5km',
    title: 'Corrida',
    level: 'Intermediário',
    description: 'Para quem já tem ritmo. Um percurso desafiador pelas ruas de Floriano com muita energia.',
    icon: 'running',
  },
  {
    distance: '10km',
    title: 'Desafio',
    level: 'Avançado',
    description: 'O percurso completo para quem busca superação. Mostre do que você é capaz!',
    icon: 'trophy',
  },
];

export const GALLERY_IMAGES: { src: string; alt: string }[] = [
  // Adicione aqui os nomes dos arquivos de fotos em public/images/gallery/
  // Exemplo: { src: '/images/gallery/foto1.jpg', alt: 'Largada da 4ª edição' },
  // { src: '/images/gallery/foto2.jpg', alt: 'Corredores na avenida' },
  // { src: '/images/gallery/foto3.jpg', alt: 'Pódio dos vencedores' },
];

export const FAQ_ITEMS = [
  {
    question: 'Quais são as modalidades disponíveis?',
    answer: 'O evento oferece percursos de 3km (caminhada), 5km (corrida) e 10km (desafio), atendendo desde iniciantes até corredores experientes.',
  },
  {
    question: 'O que está incluso na inscrição?',
    answer: 'A inscrição inclui kit do atleta com camiseta oficial, número de peito, chip de cronometragem e acesso a todos os pontos de hidratação.',
  },
  {
    question: 'Qual a idade mínima para participar?',
    answer: 'Para os percursos de 5km e 10km, a idade mínima é de 16 anos (com autorização dos pais). Para a caminhada de 3km, todas as idades são bem-vindas.',
  },
  {
    question: 'Onde será a largada e chegada?',
    answer: 'A largada e chegada serão no mesmo local, no centro de Floriano. O ponto exato será divulgado em breve.',
  },
];

export const DEVELOPER = {
  name: 'Flow Digital - Automações Inteligentes',
  logoPlaceholder: true, // true = mostra espaço para logo; false = mostra só texto
};
