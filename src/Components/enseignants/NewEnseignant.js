import React ,{useState} from 'react';
import MyTable from '../common/MyTable';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { textFilter } from 'react-bootstrap-table2-filter';
import { NavLink } from 'react-router-dom';

function NewEnseignant() {
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
              <h1><i className="bi bi-briefcase"></i> Enseignants</h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="bi bi-house-door fs-6"></i></li>
              <li className="breadcrumb-item">Dashboard</li>
              <li className="breadcrumb-item active"><NavLink to="/Enseignants">Enseignants</NavLink></li>
            </ul>
          </div>
          {/* Afficher l'alerte de succès si showSuccessAlert est vrai */}
          {showSuccessAlert && (
            <div className="alert alert-success d-flex align-items-center mt-3" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i>
              <div>La classe a été ajoutée avec succès!</div>
            </div>
          )}
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Ajouter un nouveau enseignant</h3>
                <div className="tile-body">
                  {/* Formulaire pour ajouter un nouveau module */}
                  <form onSubmit={handleSave}>
                 <div class="row">
                  <div class="col-md-6">
                   <div class="mb-3">
                     <label class="form-label">Nom</label>
                     <input class="form-control" type="text"   placeholder="Entrer le nom" required/>
                   </div>
                   <div class="mb-3">
                     <label class="form-label">Prénom</label>
                     <input class="form-control" type="text"   placeholder="Entrer le prénom" required/>
                   </div>
                   <div class="mb-3">
                     <label class="form-label">Email</label>
                     <input class="form-control" type="email"   placeholder="Entrer l'émail" required/>
                   </div>

                   </div>
                   <div class="col-md-6">
                   <div class="mb-3">
                     <label class="form-label">Téléphone</label>
                     <input class="form-control" type="tel"   placeholder="Entrer le numéro de téléphone" required/>
                   </div>
                   <div class="mb-3">
                   <label class="form-label">Groupe</label>
                   <select class="form-control" name="groupe" required>
                     <option   disabled selected>Choisir un groupe</option>
                     <option value="groupe1">Groupe 1</option>
                     <option value="groupe2">Groupe 2</option>
                     <option value="groupe3">Groupe 3</option>
                   </select>
                   </div>
                   <div class="mb-3">
                   <label class="form-label">Rôle</label>
                   <select class="form-control" name="role" required>
                       <option   disabled selected>Choisir un rôle</option>
                       <option value="Enseignant">Étudiant</option>
                       <option value="enseignant">Enseignant</option>
                   </select>
               </div>

                    </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Mot de passe</label>
                      <input class="form-control" type="password"   placeholder="Entrer le mot de passe" required/>
                    </div>


                <div class="tile-footer">
             <button class="btn btn-primary" type="submit"><i class="bi bi-check-circle-fill me-2"></i>Enregistrer</button>&nbsp;&nbsp;&nbsp;<NavLink className="btn btn-secondary"  to="/Enseignants"><i class="bi bi-x-circle-fill me-2"></i>Annuler</NavLink>
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

export default NewEnseignant;
