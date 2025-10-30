const userProfile = {
  name: 'Ariadna López',
  walletAddress: 'GA7RE3TEQUIO4WALLET8DEMO1ADDRESS6XLM9',
  balance: {
    lumens: '3,450.89 XLM',
    usdc: '1,200.00 USDC',
  },
  activeProjects: [
    {
      id: 1,
      name: 'Mercado Verde Xochimilco',
      category: 'Comercio local',
      invested: '850 XLM',
      status: 'En crecimiento',
    },
    {
      id: 2,
      name: 'Solar Maya',
      category: 'Energía y reciclaje',
      invested: '1,200 XLM',
      status: 'Impacto verificado',
    },
    {
      id: 3,
      name: 'Kaanbal Tech',
      category: 'Educación',
      invested: '540 XLM',
      status: 'En seguimiento',
    },
  ],
  interests: ['Tecnología / Web3', 'Energía y reciclaje', 'Educación'],
  impact: {
    totalInvested: '2,590 XLM',
    supportedProjects: 7,
    communitiesImpacted: 12,
    coInvestors: 48,
  },
};

export default userProfile;
