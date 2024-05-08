import React, { useState } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, useParams } from 'react-router-dom';
import Footer from '../common/Footer';

function EditModule() {
  // Récupérer les paramètres de l'URL (ID, code, nom, niveau, semestre)
  const { id, code, nom, niveau, semestre } = useParams();

  // États locaux pour gérer les modifications des champs
  const [niveauLocal, setNiveauLocal] = useState(niveau);
  const [nomLocal, setNomLocal] = useState(nom);
  const [semestreLocal, setSemestreLocal] = useState(semestre);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // État pour gérer la visibilité de la barre latérale
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Fonction pour gérer le changement de niveau
  const handleNiveauChange = (e) => {
    setNiveauLocal(e.target.value);
  };

  // Fonction pour gérer le changement de nom
  const handleNomChange = (e) => {
    setNomLocal(e.target.value);
  };

  // Fonction pour gérer le changement de semestre
  const handleSemestreChange = (e) => {
    setSemestreLocal(e.target.value);
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
      <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
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
              <div>Modifications enregistrées avec succès!</div>
            </div>
          )}
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Modifier un module</h3>
                <div className="tile-body">
                  {/* Formulaire pour modifier le module */}
                  <form onSubmit={handleSave}>
                    <div className="row">
                      {/* Colonne pour le champ de code */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Code</label>
                        {/* Champ de code désactivé car il ne peut pas être modifié */}
                        <input className="form-control" type="text" value={code} placeholder="Entrer le code" required disabled />
                      </div>
                      {/* Colonne pour le champ de nom */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Nom</label>
                        {/* Champ de nom modifiable */}
                        <input
                          className="form-control"
                          type="text"
                          value={nomLocal}
                          placeholder="Entrer le nom"
                          onChange={handleNomChange}
                          required
                        />
                      </div>
                      {/* Colonne pour le champ de niveau */}
                      <div className="col-6 mb-3">
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
                      {/* Colonne pour le champ de semestre */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Semestre</label>
                        {/* Champ de semestre modifiable */}
                        <input
                          className="form-control"
                          type="text"
                          value={semestreLocal}
                          placeholder="Entrer le semestre"
                          onChange={handleSemestreChange}
                          required
                        />
                      </div>
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

export default EditModule;
