import logo from './logo.svg';
import './App.css';
import Login from './Components/authentification/Login.js';
import ResetPassword from './Components/authentification/ResetPassword.js';
import Signup from './Components/authentification/Signup.js';
import Profile from './Components/authentification/Profile.js';

import Home from './Components/dashboard/Home.js';
import Classe from './Components/classes/Classe.js';
import NewClasse from './Components/classes/NewClasse.js';
import EditClasse from './Components/classes/EditClasse.js';
import Etudiant from './Components/etudiants/Etudiant.js';
import EditEtudiant from './Components/etudiants/EditEtudiant.js';
import NewEtudiant from './Components/etudiants/NewEtudiant.js';
import Module from './Components/modules/Module.js';
import NewModule from './Components/modules/NewModule.js';
import EditModule from './Components/modules/EditModule.js';
import Seance from './Components/seances/Seance.js';
import EditSeance from './Components/seances/EditSeance.js';
import NewSeance from './Components/seances/NewSeance.js';
import Enseignant from './Components/enseignants/Enseignant.js';
import NewEnseignant from './Components/enseignants/NewEnseignant.js';
import EditEnseignant from './Components/enseignants/EditEnseignant.js';

import Calendrier from './Components/calendrier/Calendrier.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
   <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/inscription" element={<Signup/>} />
     <Route path="/profile" element={<Profile/>} />

     <Route path="/mot-de-passe-oublié" element={<ResetPassword/>} />

     <Route path="/home" element={<Home/>} />
     <Route path="/new-class" element={<NewClasse/>} />
     <Route path="/classes" element={<Classe/>} />
     <Route path="/edit-classe/:id/:code/:niveau" element={<EditClasse />} />

     <Route path="/etudiants" element={<Etudiant/>} />
     <Route path="/edit-etudiant/:id/:nom/:prenom/:email" element={<EditEtudiant />} />
     <Route path="/ajout-etudiant" element={<NewEtudiant/>} />

     <Route path="/modules" element={<Module/>} />
     <Route path="/ajout-module" element={<NewModule/>} />

     <Route path="/edit-module/:id/:code/:nom/:niveau/:semestre" element={<EditModule />} />

     <Route path="/seances" element={<Seance/>} />
     <Route path="/ajout-seance" element={<NewSeance/>} />
     <Route path="/edit-seance/:id/:code/:module/:enseignant/:classe/:heureDebut/:heureFin/:date/:type" element={<EditSeance/>} />
     <Route path="/enseignants" element={<Enseignant/>} />
     <Route path="/ajout-enseignant" element={<NewEnseignant/>} />
     <Route path="/edit-enseignant/:id/:nom/:prenom/:email/:tele" element={<EditEnseignant />} />

     <Route path="/calendrier" element={<Calendrier/>} />


   </Routes>
 </Router>
    </div>
  );
}

export default App;
