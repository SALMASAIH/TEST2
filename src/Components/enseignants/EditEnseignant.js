import React, { useState } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, useParams } from 'react-router-dom';
import Footer from '../common/Footer';

function EditEnseignant() {
  // Récupérer les paramètres de l'URL (ID, code, nom, niveau, semestre)
  const { id, nom, prenom, email} = useParams();

  // États locaux pour gérer les modifications des champs
  const [prenomLocal, setPrenomLocal] = useState(prenom);
  const [nomLocal, setNomLocal] = useState(nom);
  const [emailLocal, setEmailLocal] = useState(email);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // État pour gérer la visibilité de la barre latérale
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Fonction pour gérer le changement de niveau
  const handleNomChange = (e) => {
    setNomLocal(e.target.value);
  };

  // Fonction pour gérer le changement de nom
  const handlePrenomChange = (e) => {
    setPrenomLocal(e.target.value);
  };

  // Fonction pour gérer le changement de semestre
  const handleEmailChange = (e) => {
    setEmailLocal(e.target.value);
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
            <h1><i className="bi bi-briefcase"></i> Enseignants</h1>
            </div>
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="bi bi-house-door fs-6"></i></li>
              <li className="breadcrumb-item">Dashboard</li>
              <li className="breadcrumb-item active"><NavLink to="/enseignants">Enseignants</NavLink></li>

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
                <h3 className="tile-title">Modifier un enseignant</h3>
                <div className="tile-body">
                  {/* Formulaire pour modifier le module */}
                  <form onSubmit={handleSave}>
                    <div className="row">
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
                      {/* Colonne pour le champ de prenom */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Prénom</label>
                        {/* Champ de nom modifiable */}
                        <input
                          className="form-control"
                          type="text"
                          value={prenomLocal}
                          placeholder="Entrer le prénom"
                          onChange={handlePrenomChange}
                          required
                        />
                      </div>
                      {/* Colonne pour le champ de email */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Email</label>
                        {/* Champ de niveau modifiable */}
                        <input
                          className="form-control"
                          type="email"
                          value={emailLocal}
                          placeholder="Entrer l'email"
                          onChange={handleEmailChange}
                          required
                        />
                      </div>
                      {/* Colonne pour le champ de semestre */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Mot de passe</label>
                        {/* Champ de semestre modifiable */}
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Entrer le mot de passe"
                          required
                        />
                      </div>
                    </div>
                    {/* Pied de la tuile avec les boutons d'enregistrement et d'annulation */}
                    <div className="tile-footer">
                      <button className="btn btn-primary" type="submit">
                        <i className="bi bi-check-circle-fill me-2"></i>Enregistrer
                      </button>&nbsp;&nbsp;&nbsp;
                      <NavLink className="btn btn-secondary" to="/enseignants">
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

export default EditEnseignant;
