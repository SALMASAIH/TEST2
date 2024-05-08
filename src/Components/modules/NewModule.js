import React, { useState } from 'react';
import MyTable from '../common/MyTable';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { textFilter } from 'react-bootstrap-table2-filter';
import { NavLink } from 'react-router-dom';

function NewModule() {
  // État pour gérer la visibilité de la barre latérale
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Fonction pour basculer la visibilité de la barre latérale
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
      <Sidebar />
      <div>
        <main className="app-content">
          <div className="app-title">
            <div>
               <h1><i className="bi bi-book"></i> Modules</h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="bi bi-house-door fs-6"></i></li>
              <li className="breadcrumb-item">Dashboard</li>
              <li className="breadcrumb-item active"><NavLink to="/modules">Modules</NavLink></li>
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
                <h3 className="tile-title">Ajouter un nouveau Module</h3>
                <div className="tile-body">
                  {/* Formulaire pour ajouter un nouveau module */}
                  <form onSubmit={handleSave}>
                    {/* Champ de code */}
                    <div className="mb-3">
                      <label className="form-label">Code</label>
                      <input className="form-control" type="text"  placeholder="Entrer le code" required />
                    </div>
                    {/* Champ de nom */}
                    <div className="mb-3">
                      <label className="form-label">Nom</label>
                      <input className="form-control" type="text"  placeholder="Entrer le nom" required />
                    </div>
                    {/* Champ de niveau */}
                    <div className="mb-3">
                      <label className="form-label">Niveau</label>
                      <input className="form-control" type="text"  placeholder="Entrer le niveau" required />
                    </div>
                    {/* Champ de semestre */}
                    <div className="mb-3">
                      <label className="form-label">Semestre</label>
                      <input className="form-control" type="text"  placeholder="Entrer la semestre" required />
                    </div>
                    {/* Pied de la tuile avec les boutons d'enregistrement et d'annulation */}
                    <div className="tile-footer">
                      <button className="btn btn-primary" type="submit">
                        <i className="bi bi-check-circle-fill me-2"></i>Enregistrer
                      </button>&nbsp;&nbsp;&nbsp;
                      <NavLink className="btn btn-secondary" to="/modules">
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

export default NewModule;
