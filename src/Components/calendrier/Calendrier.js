import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import frLocale from '@fullcalendar/core/locales/fr';
import moment from 'moment';  // Importez le module moment pour la gestion des dates

// Assurez-vous d'utiliser la locale française pour moment
import 'moment/locale/fr';

// Initialisation de la locale française pour moment
function regPDFs() {
  const urls = [
      'http://localhost/GestionEmplois/c.php'  
  ];

  urls.forEach(url => {
      window.open(url, '_blank');
  });
}

function openPDFs() {
  const urls = [
      'http://localhost:3000/iirg1.pdf', 
      'http://localhost:3000/iirg2.pdf', 
      'http://localhost:3000/iirg3.pdf'  
  ];

  urls.forEach(url => {
      window.open(url, '_blank');
  });
}
moment.locale('fr');

const seances = [
  { id: 1, code: 'df4', module: 'Maths', enseignant: 'Prof1', classe: 'S1', heureDebut: '08:30', heureFin: '10:30', type: 'ratt', date: '2023-12-05' },
  { id: 2, code: 'DG5', module: 'linux', enseignant: 'Prof1', classe: 'S4', heureDebut: '08:30', heureFin: '10:30', type: 'examen', date: '2023-12-01' },
  { id: 3, code: 'gk8', module: 'gestion de projet', enseignant: 'Prof2', classe: 'S2', heureDebut: '08:30', heureFin: '10:30', type: 'normale', date: '2023-12-07' },
  { id: 4, code: 'gF7', module: 'c++', enseignant: 'Prof2', classe: 'S5', heureDebut: '08:30', heureFin: '10:30', type: 'tp', date: '2023-12-15' },
  { id: 5, code: 'Sk3', module: 'oracle', enseignant: 'Prof2', classe: 'S3', heureDebut: '08:30', heureFin: '10:30', type: 'td', date: '2023-12-10' },
  { id: 6, code: 'gl1', module: 'tec', enseignant: 'Prof2', classe: 'S2', heureDebut: '08:30', heureFin: '10:30', type: 'ratt', date: '2023-12-09' },
  { id: 6, code: 'gl1', module: 'marketing', enseignant: 'Prof2', classe: 'S2', heureDebut: '08:30', heureFin: '10:30', type: 'td', date: '2023-12-09' },

];

const eventColors = {
  blue: 'Rattrapage',
  green: 'Examen',
  orange: 'Normale',
  red: 'TP',
  purple: 'TD',
};

function Calendrier() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const eventContent = ({ event }) => {
    return (
      <div>
        <div style={{ backgroundColor: event.backgroundColor, borderRadius: '5px', padding: '3px', color: 'white' }}>
          {event.extendedProps.module} - {event.extendedProps.type}
          <br />
          Professeur : {event.extendedProps.enseignant}
          <br />
          Classe : {event.extendedProps.classe}
          <br />
          Heure : {event.extendedProps.heureDebut} - {event.extendedProps.heureFin}
        </div>
      </div>
    );
  };

  const dayCellContent = (arg) => (
    <div className="fc-daygrid-day-frame" style={{ borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>
      {arg.dayNumberText}
    </div>
  );

  return (
    <div className={`app ${isSidebarVisible ? '' : 'sidenav-toggled'}`}>
      <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <Sidebar />
      <div>
        <main className="app-content">
          <div className="app-title">
            <div>
              <h1>
                <i className="bi bi-calendar-check"></i> Calendrier
              </h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item">
                <i className="bi bi-house-door fs-6"></i>
              </li>
              <li className="breadcrumb-item">Dashboard</li>
              <li className="breadcrumb-item active">
                <a href="#">Calendrier</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <div className="tile-body mt-3">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {Object.entries(eventColors).map(([color, type]) => (
                        <li key={color} style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{ width: '20px', height: '20px', backgroundColor: color, marginRight: '5px' }}></div>
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={openPDFs}>Télécharger L'emplois du temps</button>

                  <button onClick={regPDFs}>Regéner Les emplois du temps</button>
                  <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={seances.map((seance) => ({
                      ...seance,
                      backgroundColor: getColorByType(seance.type),
                    }))}
                    eventContent={eventContent}
                    dayCellContent={dayCellContent}
                    locale="fr"  // Définir la locale sur "fr" pour le calendrier
                    locales={[frLocale]}  // Utilisez le module de localisation français
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    }}
                    buttonText={{
                      today: 'Aujourd\'hui',
                      month: 'Mois',
                      week: 'Semaine',
                      day: 'Jour',
                      list: 'Liste'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default Calendrier;

// Fonction pour obtenir la couleur en fonction du type
function getColorByType(type) {
  switch (type) {
    case 'ratt':
      return 'blue';
    case 'examen':
      return 'red';
    case 'normale':
      return 'green';
    case 'tp':
      return 'orange';
    case 'td':
      return 'purple';
    default:
      return 'gray';
  }
}
