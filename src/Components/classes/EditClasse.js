import React, { useState } from 'react';
import MyTable from '../common/MyTable';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, useParams } from 'react-router-dom';

function EditClasse() {
  // Récupérer les paramètres de l'URL (ID, code, niveau)
  const { id, code, niveau } = useParams();

  // État local pour gérer les modifications du champ de niveau
  const [niveauLocal, setNiveauLocal] = useState(niveau);

  // État local pour afficher l'alerte de succès
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // État local pour gérer la visibilité de la barre latérale
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Fonction pour gérer le changement de niveau
  const handleNiveauChange = (e) => {
    setNiveauLocal(e.target.value);
  };

  // Fonction pour basculer la visibilité de la barre latérale
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

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
      <Sidebar />

      <div>
        <main className="app-content">
          <div className="app-title">
            <div>
              <h1><i className="bi bi-laptop"></i> Classes</h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="bi bi-house-door fs-6"></i></li>
              <li className="breadcrumb-item">Dashboard</li>
              <li className="breadcrumb-item active"><NavLink to="/classes">Classes</NavLink></li>
            </ul>
          </div>
          {/* Afficher l'alerte de succès si showSuccessAlert est vrai */}
          {showSuccessAlert && (
            <div className="alert alert-success d-flex align-items-center mt-3" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i>
              <div>Modifications enregistrées avec succès!</div>
            </div>
          )}
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Modifier une classe</h3>
                <div className="tile-body">
                  {/* Formulaire pour modifier la classe */}
                  <form onSubmit={handleSave}>
                    <div className="mb-3">
                      <label className="form-label">Code</label>
                      {/* Champ de code désactivé car il ne peut pas être modifié */}
                      <input className="form-control" type="text" value={code} placeholder="Entrer le code" required disabled />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Niveau</label>
                      {/* Champ de niveau modifiable */}
                      <input
                        className="form-control"
                        type="text"
                        value={niveauLocal}
                        placeholder="Entrer le niveau"
                        onChange={handleNiveauChange}
                        required
                      />
                    </div>
                    {/* Pied de la tuile avec les boutons d'enregistrement et d'annulation */}
                    <div className="tile-footer">
                      <button className="btn btn-primary" type="submit">
                        <i className="bi bi-check-circle-fill me-2"></i>Enregistrer
                      </button>&nbsp;&nbsp;&nbsp;
                      <NavLink className="btn btn-secondary" to="/classes">
                        <i className="bi bi-x-circle-fill me-2"></i>Annuler
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="clearix"></div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default EditClasse;
