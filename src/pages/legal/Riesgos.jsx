import LegalTemplate from './LegalTemplate.jsx';

const sections = [
  {
    heading: 'Riesgo financiero',
    content:
      'Las inversiones en proyectos emergentes pueden resultar en pérdidas parciales o totales. El simulador no garantiza retornos futuros.',
  },
  {
    heading: 'Volatilidad de activos digitales',
    content:
      'Los tokens utilizados en Stellar Testnet presentan volatilidad y pueden no reflejar el comportamiento de redes principales.',
  },
  {
    heading: 'Debida diligencia',
    content:
      'Tequio promueve análisis responsables. Antes de invertir en la versión productiva, realiza verificaciones adicionales y consulta asesores profesionales.',
  },
];

const Riesgos = () => (
  <LegalTemplate
    title="Riesgos de Inversión"
    intro="Invertir en proyectos innovadores conlleva riesgos. Revisa las consideraciones principales."
    sections={sections}
  />
);

export default Riesgos;
