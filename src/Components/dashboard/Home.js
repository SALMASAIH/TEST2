import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import '../Assets/css/main.css';
import '../Assets/js/main.js';
import image from '../Assets/Images/home-img.jpg';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';

import 'bootstrap-icons/font/bootstrap-icons.css';

import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import 'moment/locale/fr';
import moment from 'moment';  // Importez le module moment pour la gestion des dates


function Home() {
  moment.locale('fr');

  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);

  };
  return (
    <div className={`app ${isSidebarVisible ? '' : 'sidenav-toggled'}`}>
     <Header
       isSidebarVisible={isSidebarVisible}
       toggleSidebar={toggleSidebar}
     />
    <Sidebar/>
    <div>
    <main class="app-content">
     <div class="app-title">
       <div>
         <h1><i class="bi bi-speedometer"></i> Dashboard</h1>
         <p>Système de gestion d'emploi du temps</p>
       </div>
       <ul class="app-breadcrumb breadcrumb">
         <li class="breadcrumb-item"><i class="bi bi-house-door fs-6"></i></li>
         <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
       </ul>
     </div>
     <div class="row">
       <div class="col-md-6 col-lg-3">
         <div class="widget-small primary coloured-icon"><i class="icon bi bi-briefcase fs-1"></i>
           <div class="info">
             <h4>Enseigts.</h4>
             <p><b>25</b></p>
           </div>
         </div>
       </div>
       <div class="col-md-6 col-lg-3">
         <div class="widget-small info coloured-icon"><i class="icon bi bi-mortarboard fs-1"></i>
           <div class="info">
             <h4>Etudts.</h4>
             <p><b>725</b></p>
           </div>
         </div>
       </div>
       <div class="col-md-6 col-lg-3">
         <div class="widget-small warning coloured-icon"><i class="icon bi bi-book fs-1"></i>
           <div class="info">
             <h4>Modules</h4>
             <p><b>216</b></p>
           </div>
         </div>
       </div>
       <div class="col-md-6 col-lg-3">
         <div class="widget-small danger coloured-icon"><i class="icon bi bi-laptop fs-1"></i>
           <div class="info">
             <h4>Classes</h4>
             <p><b>50</b></p>
           </div>
         </div>
       </div>
     </div>
     <div class="row">
       <div class="col-md-6">
         <div class="tile">
           <div class="ratio ratio-16x9">
             <img src={image}/>
           </div>
         </div>
       </div>
       <div class="col-md-6">
         <div class="tile">

           <div class="ratio ratio-16x9">
             <div id="salesChar">
             <FullCalendar
               plugins={[dayGridPlugin]}
               initialView="dayGridMonth"

               locale="fr"  // Définir la locale sur "fr" pour le calendrier
               locales={[frLocale]}  // Utilisez le module de localisation c++

             />
             </div>

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

export default Home;
