import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'ECommercio',
    desc:
      'Una aplicación desarrollada con API REST FUL, para el control de un negocio con sucursales y almacenes',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Consultorio Médico ',
    desc:
      'Sistema para la reserva y atención médica en clinicas y consultorios privadas.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'PsicoAgenda',
    desc:
      'Diseñado para que el personal del Inst. Psicopedagógico este comunicado y sobrellevar de mejor manera la pandemia',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Sistema Online de reserva y programación de Pacientes',
    desc:
      'Sistema Web de programación y asignación de turnos para la atención de de pacientes.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Sistema de pacientes Crónicos y Asegurados',
    desc:
      'Sistema de gestión de pacientes crónicos del Psico y pacientes de todos los seguros a nivel nacional.',
    img: ProjectImg,
  },
];

export default projects;
