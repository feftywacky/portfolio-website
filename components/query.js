import { projects } from '../constants/index.js';
import { redirectToChessEngine, redirectToSpaceship, redirectToKmap, redirectToMedihub, redirectToGenerativeAI } from './ExploreCard.jsx';

export const getImageUrlByTitle = (title) => {
  if (title === 'Space Invaders') {
    return '/spaceship5.jpg';
  }
  const project = projects.find(project => project.title === title);
  return project ? project.imgUrl : '/chess_engine.jpg';
}

export const getProjectTextByTitle = (title) => {
  if (title === 'Space Invaders') {
    return 'hi im space invaders';
  }

  if (title === 'Thrawn Chess Engine') {
    return (
      <div>
        <p>
            Thrawn is a free UCI (Universal Chess Interface) compliant chess engine. 
            It is not a complete chess program and requires an UCI-compatible GUI (Graphical User Interface) 
            such as Scid, Cute Chess, Arena etc. in order to be used comfortably. <br/><br/>
            Thrawn currently has two versions (v1.1 and v2.0). v1.1 uses a hand-crafted evaluation, 
            while v2.0 uses a neural network. <br/><br/>
            Thrawn v1.1 has a rating of 1909 ELO <br/>
            Thrawn v2.0 has a rating of ~2900 ELO <br/><br/>
            <a onClick={()=>redirectToChessEngine()} className="hover:text-purple-400"> [VIEW SOURCE CODE]</a>
        </p>
        
      </div>
    );
  }

  if (title === 'Healthcare Management App') {
    return 'hi im healthcare management app';
  }
  if (title === 'Karnaugh Map Solver') {
    return 'hi im karnaugh map solver';
  }
  if (title === 'Generative AI Fullstack App') {
    return 'hi im generative ai fullstack app';
  }
}