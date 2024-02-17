import { projects } from '../constants/index.js';
import { redirectToSpaceship, redirectToChessEngine, redirectToKmap, redirectToMedihub, redirectToKamino } from './redirect.js';

export const getImageUrlByTitle = (title) => {
  if (title === 'Space Invaders') {
    return '/spaceship5.jpg';
  }
  const project = projects.find(project => project.title === title);
  return project ? project.imgUrl : '/chess_engine.jpg';
}

export const getProjectTextByTitle = (title) => {
  if (title === 'Space Invaders') {
    return (
      <div>
        <p>
          Introducing a Space Invaders clone crafted using Java's Swing Library.
          <br />
          <br />
          Immerse yourself in this captivating 2D game where players command a spaceship against waves of invading aliens.
          Survival is key as players fend off relentless attacks and confront the ultimate challenge: defeating the boss alien to emerge victorious.
          <br />
          <br />
          Embracing a charming pixel art style, the game offers a delightful visual experience enhanced by an array of power-ups and diverse enemy types.
          <br />
          <br />
          <span onClick={() => redirectToSpaceship()} className='modal-href'>
            [VIEW SOURCE CODE]
          </span>
        </p>

      </div>
    );
  }

  if (title === 'Thrawn Chess Engine') {
    return (
      <div>
        <p>
          Introducing Thrawn, a free UCI (Universal Chess Interface) compliant chess engine that analyzes chess positions and computes the optimal moves.  <br /><br />
          It is not a complete chess program and requires an UCI-compatible GUI (Graphical User Interface)
          such as Scid, Cute Chess, Arena etc. in order to be used comfortably. <br /><br />
          Thrawn currently has two versions (v1.1 and v2.0). v1.1 uses a hand-crafted evaluation,
          while v2.0 uses a neural network. <br /><br />
          Thrawn v1.1 has a rating of 1909 ELO <br />
          Thrawn v2.0 has a rating of ~2900 ELO <br /><br />
          <span onClick={() => redirectToChessEngine()} className='modal-href'>
            [VIEW SOURCE CODE]
          </span>
        </p>

      </div>
    );
  }

  if (title === 'Healthcare Management App') {
    return (
      <div>
        <p>
          Introducing Medihub, a streamlined Android app revolutionizing healthcare appointment management offering an intuitive interface and a suite of invaluable features.
          <br /><br />
          The system supports the following:
          <ul>
            <li>- User-friendly interface</li>
            <li>- Secure personal data storage</li>
            <li>- Authentication for account creation and login</li>
            <li>- Patients can book appointments and filter by specialties, timeslots, and doctors</li>
            <li>- Doctors can manage shifts, accept/reject appointments, and view schedules</li>
            <li>- Admins can approve/deny registration requests</li>
          </ul>
          <br />
          <span onClick={() => redirectToMedihub()} className='modal-href'>
            [VIEW SOURCE CODE]
          </span>
        </p>

      </div>
    );
  }
  if (title === 'Karnaugh Map Solver') {
    return (
      <div>
        <p>

          Introducing a Karnaugh Map Solver web application!
          <br />
          <br />
          Designed to simplify the process of simplifying boolean algebra expressions, our intuitive tool empowers users to effortlessly tackle complex logic circuits.
          <br />
          <br />
          The real-time solver instantly provides minimized expressions, accelerating the logic design process for engineers and students alike.
          <br />
          <br />
          Featuring a user-friendly interface and interactive controls, it ensures accessibility to users of all levels.
          <br />
          <br />
          <span onClick={() => redirectToKmap()} className='modal-href'>
            [VIEW SOURCE CODE]
          </span>
        </p>

      </div>
    );
  }
  if (title === 'Kamino Productivity App') {
    return (
      <div>
        <p>  
          Introducing Kamino, your ultimate productivity web app!
          <br />
          <br />
          Kamino redefines productivity by drawing inspiration from Notion, offering users a versatile platform to organize their ideas and streamline their projects with ease. 
          Designed With a clean and intuitive interface, Kamino empowers individuals to manage tasks, take notes, and track progress, all in realtime.
          <br />
          <br />
          Whether you're a student, professional, or entrepreneur, Kamino offers a dynamic space to consolidate ideas, work on goals, and execute imaginative projects. 
          With Kamino, productivity becomes more than just a task – it's a seamless journey towards achieving your objectives.
          <br />
          <br />
          <span onClick={() => redirectToKamino()} className='modal-href'>
            [VIEW SOURCE CODE]
          </span>
        </p>

      </div>
    );
  }
}