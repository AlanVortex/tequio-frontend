import LegalTemplate from './LegalTemplate.jsx';

const sections = [
  {
    heading: 'Naturaleza del prototipo',
    content:
      'Este sitio es una demostración del frontend de Tequio. No procesa transacciones reales ni sustituye asesoría financiera.',
  },
  {
    heading: 'Limitaciones técnicas',
    content:
      'Las funcionalidades mostradas corresponden a mock data. La disponibilidad de módulos en futuras versiones puede variar.',
  },
  {
    heading: 'Contacto',
    content:
      'Para dudas sobre alianzas, demos o roadmap, escribe a hola@tequio.xyz. Estaremos encantados de colaborar.',
  },
];

const Aviso = () => (
  <LegalTemplate
    title="Aviso Legal"
    intro="Información relevante sobre el alcance del prototipo y la responsabilidad de Tequio."
    sections={sections}
  />
);

export default Aviso;
