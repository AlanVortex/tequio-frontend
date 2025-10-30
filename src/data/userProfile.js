const userProfile = {
  name: 'Ariadna López',
  username: 'ari_lopez',
  email: 'ari.lopez@tequio.mx',
  registeredAt: '12 de enero de 2023',
  avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
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
