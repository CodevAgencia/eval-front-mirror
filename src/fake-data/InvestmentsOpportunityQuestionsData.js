// eslint-disable-next-line import/prefer-default-export
export const InvestmentRoundQuestions = [
  {
    id: 1,
    identifierQuestion: 'RI_1',
    title: 'Ronda de Inversión a la que accedería',
    subtitle: '¿En cuál ronda de Inversión se encuentra la compañía?',
    type: 'Lista',
    values: [
      { id: 1, value: 'Pre-Seed' },
      { id: 2, value: 'Seed' },
      { id: 3, value: 'Series A' },
      { id: 4, value: 'Series B' },
      { id: 5, value: 'Series C' },
      { id: 6, value: 'Mezzanine' },
      { id: 7, value: 'IPO"' },
    ],
  },
];

export const CompanyValuationQuestions = [
  {
    id: 1,
    identifierQuestion: 'VC_1',
    title: 'Valoración de la Compañía',
    subtitle: '¿Cuánto es la valoración de su compañía?',
    type: 'Text',
    values: [],
  },
];

export const TradingConditionsQuestions = [
  {
    id: 1,
    identifierQuestion: 'CN_1',
    title: 'Valoración Justificada según Desempeño',
    subtitle: '¿El Desempeño de la Compañía justifica la valoración?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
  {
    id: 2,
    identifierQuestion: 'CN_2',
    title: 'Valoración Justificada según el equipo emprendedor',
    subtitle: '¿La capacidad de los emprendedores justifica la valoración?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
  {
    id: 3,
    identifierQuestion: 'CN_3',
    title: 'Valoración Justificada según Potencial de Mercado',
    subtitle: '¿El potencial de mercado y de escalamiento justifican la valoración?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
  {
    id: 4,
    identifierQuestion: 'CN_4',
    title: 'Nota Convertible o Acciones',
    subtitle: '¿La inversión sería una Nota Convertible en Acciones?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
  {
    id: 5,
    identifierQuestion: 'CN_5',
    title: 'Otorgaría Participación',
    subtitle: '¿La inversión permitiría obtener Participación en la empresa directamente?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
  {
    id: 6,
    identifierQuestion: 'CN_6',
    title: 'Preferencia acerca del Fondo',
    subtitle: '¿Preferiría que el Fondo tuviera participación accionaria u otros activos?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
  {
    id: 7,
    identifierQuestion: 'CN_7',
    title: 'Disposición a Negociar',
    subtitle: '¿Estaría dispuesto a negociar los terminos de la inversión?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
];

export const PotentialToAddValueQuestions = [
  {
    id: 1,
    identifierQuestion: 'PAV_1',
    title: 'Red de Mentoría',
    subtitle: '¿La compañía tiene una fuerte red de mentores y apoyos?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
  {
    id: 2,
    identifierQuestion: 'PAV_2',
    title: 'Conocimiento estratégico',
    subtitle: '¿Cuenta con conocimiento estratégico y apoyo de mentores?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
  {
    id: 3,
    identifierQuestion: 'PAV_3',
    title: 'Intención de Expansión',
    subtitle: '¿Tiene intención de expandirse regionalmente?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
  {
    id: 4,
    identifierQuestion: 'PAV_4',
    title: 'Gobierno Corporativo',
    subtitle: '¿Estaría dispuesto a implementar prácticas de gobierno corporativo?',
    type: 'Lista',
    values: [
      { id: 1, value: 'No' },
      { id: 2, value: 'Si' },
    ],
  },
];
