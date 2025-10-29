import LegalTemplate from './LegalTemplate.jsx';

const sections = [
  {
    heading: 'Datos recolectados',
    content:
      'El prototipo utiliza únicamente información mock. Si compartes datos reales dentro de formularios, serán tratados como demostraciones y no se almacenarán en servidores.',
  },
  {
    heading: 'Uso de la información',
    content:
      'Los datos ingresados se emplean para generar resultados simulados y mejorar la experiencia educativa. No se comparten con terceros.',
  },
  {
    heading: 'Seguridad Web3',
    content:
      'Se recomiendan wallets oficiales de Stellar Testnet. Tequio nunca solicita claves privadas ni frases semilla.',
  },
];

const Privacidad = () => (
  <LegalTemplate
    title="Política de Privacidad"
    intro="Conoce cómo gestionamos la información dentro del entorno educativo de Tequio."
    sections={sections}
  />
);

export default Privacidad;
