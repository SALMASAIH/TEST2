import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import { NavLink } from 'react-router-dom';

import photo from '../Assets/Images/profile.jpg';


function Profile() {
  // État pour gérer la visibilité de la barre latérale
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  // Fonction pour basculer la visibilité de la barre latérale
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    console.log("Sidebar visibility toggled");
  };


  return (
    <div className={`app ${isSidebarVisible ? '' : 'sidenav-toggled'}`}>
      <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <Sidebar />
      <div>
        <main className="app-content">
          <div className="app-title">
            <div>
              <h1>
                <i className="bi bi-person"></i> Profile
              </h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item">
                <i className="bi bi-house-door fs-6"></i>
              </li>
              <li className="breadcrumb-item">Dashboard</li>
              <li className="breadcrumb-item active">
                <a href="#">Profile</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tile">

                 <div className="row">
                 <div className="col-md-6">
                 <div className="row align-items-center justify-content-center">

                        <div className="col-md-6 text-center mt-5">
                          <img className="rounded-circle mb-3" src={photo} alt="User Image" width="200" />
                          <div>
                            <p className="app-sidebar__user-name">Saih salma</p>
                            <p className="app-sidebar__user-designation">Chef de Département</p>
                          </div>
                        <form>
                         <label htmlFor="imageInput" className="btn btn-primary mt-3">
                         <i className="bi bi-pencil-square"></i> Modifier l'image
                       </label>
                       <input
                         type="file"
                         id="imageInput"
                         accept="image/*"
                         style={{ display: 'none' }}
                       />

                      </form>
                  </div>
                 </div>
                 </div>
                 <div class="col-md-6">
                 <h3>Modification du profile</h3>
                 <form>
                   <div class="mb-3 mt-3">
                     <label class="form-label">Nom</label>
                     <input class="form-control" type="text" placeholder="Entrer le nom" required />
                   </div>
                   <div class="mb-3">
                     <label class="form-label">Prénom</label>
                     <input class="form-control" type="text" placeholder="Entrer le prénom" required />
                   </div>
                   <div class="mb-3">
                     <label class="form-label">Email</label>
                     <input class="form-control" type="email" placeholder="Entrer l'émail" required />
                   </div>
                   <div class="mb-3">
                     <label class="form-label">Téléphone</label>
                     <input class="form-control" type="tel" placeholder="Entrer le numéro de téléphone" required />
                   </div>
                   <div class="mb-3">
                     <label class="form-label">Mot de passe</label>
                     <input class="form-control" type="password" placeholder="Entrer le mot de passe" required />
                   </div>
                   <div class="tile-footer">
                     <button class="btn btn-primary" type="submit"><i class="bi bi-check-circle-fill me-2"></i>Enregistrer</button>&nbsp;&nbsp;&nbsp;<NavLink className="btn btn-secondary" to="/home"><i class="bi bi-x-circle-fill me-2"></i>Annuler</NavLink>
                   </div>
                    </form>
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

export default Profile;
