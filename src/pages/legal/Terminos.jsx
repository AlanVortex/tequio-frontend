import LegalTemplate from './LegalTemplate.jsx';

const sections = [
  {
    heading: 'Uso de la plataforma',
    content:
      'Tequio es un prototipo educativo. Las funcionalidades de inversión y microcrédito se muestran con datos simulados y no representan ofertas reales.',
  },
  {
    heading: 'Responsabilidades del usuario',
    content:
      'El usuario se compromete a utilizar la información únicamente para fines exploratorios y reconoce que los resultados del simulador son estimaciones aproximadas.',
  },
  {
    heading: 'Propiedad intelectual',
    content:
      'Las marcas, textos, gráficos y recursos educativos pertenecen a Tequio y sus aliados. No se permite su reproducción sin autorización.',
  },
];

const Terminos = () => (
  <LegalTemplate
    title="Términos y Condiciones"
    intro="Última actualización: 2024. Este documento describe las reglas para utilizar el prototipo de Tequio."
    sections={sections}
  />
);

export default Terminos;
