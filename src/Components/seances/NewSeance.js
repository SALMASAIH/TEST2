import React ,{useState} from 'react';
import MyTable from '../common/MyTable';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { textFilter } from 'react-bootstrap-table2-filter';
import { NavLink } from 'react-router-dom';

function NewSeance() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    console.log("Sidebar visibility toggled");

  };
  // État local pour afficher l'alerte de succès
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  // Fonction pour gérer l'enregistrement des modifications
  const handleSave = (e) => {
    e.preventDefault();
    // Effectuer ici toute opération nécessaire pour enregistrer les modifications

    // Afficher une alerte de succès
    setShowSuccessAlert(true);

    // Vous pouvez également masquer l'alerte après un certain délai
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 5000); // Cela masquera l'alerte après 5 secondes
  };
 return (
   <div className={`app ${isSidebarVisible ? '' : 'sidenav-toggled'}`}>
    <Header
      isSidebarVisible={isSidebarVisible}
      toggleSidebar={toggleSidebar}
    />
   <Sidebar/>
   <div>
        <main className="app-content">
          <div className="app-title">
            <div>
            <h1><i className="bi bi-table"></i> Séances</h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="bi bi-house-door fs-6"></i></li>
              <li className="breadcrumb-item">Dashboard</li>
              <li className="breadcrumb-item active"><NavLink to="/Seances">Seances</NavLink></li>
            </ul>
          </div>
          {/* Afficher l'alerte de succès si showSuccessAlert est vrai */}
          {showSuccessAlert && (
            <div className="alert alert-success d-flex align-items-center mt-3" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i>
              <div>La classe a été ajoutée avec succès!</div>
            </div>
          )}
          <div class="row">
           <div class="col-md-12">
             <div class="tile">
               <h3 class="tile-title">Ajouter une nouvelle séance</h3>
               <div class="tile-body">
               <form onSubmit={handleSave}>
                 <div class="row">
                  <div class="col-md-6">
                   <div class="mb-3">
                     <label class="form-label">Code</label>
                     <input class="form-control" type="text"  namde="code" placeholder="Entrer le code" required/>
                   </div>
                   <div class="mb-3">
                     <label class="form-label">Module</label>
                     <select class="form-control" required>
                        <option  disabled selected>Choisir un module</option>
                        <option value="math">Mathématiques</option>
                        <option value="gestion de projet">gestion de projet</option>
                        <option value="oracle">oracle</option>
                        <option value="linux">linux</option>
                    </select>
                   </div>
                   <div class="mb-3">
                      <label class="form-label">Enseignant</label>
                      <select class="form-control" required>
                          <option  disabled selected>Choisir un enseignant</option>
                          <option value="prof1">Professeur 1</option>
                          <option value="prof2">Professeur 2</option>
                          <option value="prof3">Professeur 3</option>
                      </select>
                   </div>
                   <div class="mb-3">
                     <label class="form-label">Type</label>
                     <select class="form-control" required>
                         <option  disabled selected>Choisir un type</option>
                         <option value="classeA">Ratt</option>
                         <option value="classeB">Normale</option>
                         <option value="classeC">Classe C</option>
                     </select>
                      </div>
                   </div>
                   <div class="col-md-6">
                   <div class="mb-3">
                   <label class="form-label">Classe</label>
                   <select class="form-control" required>
                       <option  disabled selected>Choisir une classe</option>
                       <option value="classeA">Classe A</option>
                       <option value="classeB">Classe B</option>
                       <option value="classeC">Classe C</option>
                   </select>
                   </div>
                   <div class="mb-3">
                       <label class="form-label">Heure de début</label>
                       <input class="form-control" type="time"  name="dateDebut" required/>
                   </div>

                   <div class="mb-3">
                       <label class="form-label">Heure de fin</label>
                       <input class="form-control" type="time"  name="dateFin" required/>
                   </div>
                   <div class="mb-3">
                        <label class="form-label">Date</label>
                        <input class="form-control" type="date"   name="date" required/>
                   </div>
                    </div>

                    </div>

                <div class="tile-footer">
             <button class="btn btn-primary" type="submit"><i class="bi bi-check-circle-fill me-2"></i>Enregistrer</button>&nbsp;&nbsp;&nbsp;<NavLink className="btn btn-secondary"  to="/Seances"><i class="bi bi-x-circle-fill me-2"></i>Annuler</NavLink>
           </div>
           </form>
         </div>
         </div>
         </div>
       </div>


           <div class="clearix"></div>


        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default NewSeance;
