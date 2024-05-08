import React, { useState } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, useParams } from 'react-router-dom';
import Footer from '../common/Footer';

function EditSeance() {
  // Récupérer les paramètres de l'URL (ID, code, nom, niveau, semestre)
  const { id, code, module, enseignant, classe, heureDebut, heureFin, type, date } = useParams();

  // États locaux pour gérer les modifications des champs

  const [moduleLocal, setModuleLocal] = useState(module);
  const [enseignantLocal, setEnseignantLocal] = useState(enseignant);
  const [classeLocal, setClasseLocal] = useState(classe);
  const [heureDebutLocal, setHeureDebutLocal] = useState(heureDebut);
  const [heureFinLocal, setHeureFinLocal] = useState(heureFin);
  const [typeLocal, setTypeLocal] = useState(type);
  const [dateLocal, setDateLocal] = useState(date);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // État pour gérer la visibilité de la barre latérale
  const [isSidebarVisible, setSidebarVisible] = useState(true);



  // Fonction pour gérer le changement de module
  const handleModuleChange = (e) => {
    setModuleLocal(e.target.value);
  };

  // Fonction pour gérer le changement d'enseignant
  const handleEnseignantChange = (e) => {
    setEnseignantLocal(e.target.value);
  };

  // Fonction pour gérer le changement de classe
  const handleClasseChange = (e) => {
    setClasseLocal(e.target.value);
  };

  // Fonction pour gérer le changement de l'heure de début
  const handleHeureDebutChange = (e) => {
    setHeureDebutLocal(e.target.value);
  };

  // Fonction pour gérer le changement de l'heure de fin
  const handleHeureFinChange = (e) => {
    setHeureFinLocal(e.target.value);
  };

  // Fonction pour gérer le changement du type
  const handleTypeChange = (e) => {
    setTypeLocal(e.target.value);
  };

  // Fonction pour gérer le changement de la date
  const handleDateChange = (e) => {
    setDateLocal(e.target.value);
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
            <h1><i className="bi bi-table"></i> Séances</h1>
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
                <h3 className="tile-title">Modifier une séance</h3>
                <div className="tile-body">
                  {/* Formulaire pour modifier la séance */}
                  <form onSubmit={handleSave}>
                    <div className="row">
                      {/* Colonne pour le champ de code */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Code</label>
                        {/* Champ de code désactivé car il ne peut pas être modifié */}
                        <input className="form-control" type="text" value={code} placeholder="Entrer le code" required disabled />
                      </div>


                      {/* Colonne pour le champ de module */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Module</label>
                        {/* Champ de module modifiable */}
                        <select
                          className="form-control"
                          value={moduleLocal}
                          onChange={handleModuleChange}
                          required
                        >
                          {/* Options du menu déroulant pour les modules */}
                          <option value="module1">Module 1</option>
                          <option value="module2">Module 2</option>
                          {/* Ajoutez d'autres options au besoin */}
                        </select>
                      </div>
                      {/* Colonne pour le champ d'enseignant */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Enseignant</label>
                        {/* Champ d'enseignant modifiable */}
                        <select
                          className="form-control"
                          value={enseignantLocal}
                          onChange={handleEnseignantChange}
                          required
                        >
                          {/* Options du menu déroulant pour les enseignants */}
                          <option value="enseignant1">Enseignant 1</option>
                          <option value="enseignant2">Enseignant 2</option>
                          {/* Ajoutez d'autres options au besoin */}
                        </select>
                      </div>
                      {/* Colonne pour le champ de classe */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Classe</label>
                        {/* Champ de classe modifiable */}
                        <select
                          className="form-control"
                          value={classeLocal}
                          onChange={handleClasseChange}
                          required
                        >
                          {/* Options du menu déroulant pour les classes */}
                          <option value="classe1">Classe 1</option>
                          <option value="classe2">Classe 2</option>
                          {/* Ajoutez d'autres options au besoin */}
                        </select>
                      </div>
                      {/* Colonne pour le champ de l'heure de début */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Heure de début</label>
                        {/* Champ d'heure de début modifiable */}
                        <input
                          className="form-control"
                          type="text"
                          value={heureDebutLocal}
                          placeholder="Entrer l'heure de début"
                          onChange={handleHeureDebutChange}
                          required
                        />
                      </div>
                      {/* Colonne pour le champ de l'heure de fin */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Heure de fin</label>
                        {/* Champ d'heure de fin modifiable */}
                        <input
                          className="form-control"
                          type="text"
                          value={heureFinLocal}
                          placeholder="Entrer l'heure de fin"
                          onChange={handleHeureFinChange}
                          required
                        />
                      </div>
                      {/* Colonne pour le champ du type */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Type</label>
                        {/* Champ du type modifiable */}
                        <select
                          className="form-control"
                          value={typeLocal}
                          onChange={handleTypeChange}
                          required
                        >
                          {/* Options du menu déroulant pour les types */}
                          <option value="cours">Cours</option>
                          <option value="td">TD</option>
                          <option value="tp">TP</option>
                          {/* Ajoutez d'autres options au besoin */}
                        </select>
                      </div>
                      {/* Colonne pour le champ de la date */}
                      <div className="col-6 mb-3">
                        <label className="form-label">Date</label>
                        {/* Champ de date modifiable */}
                        <input
                          className="form-control"
                          type="text"
                          value={dateLocal}
                          placeholder="Entrer la date"
                          onChange={handleDateChange}
                          required
                        />
                      </div>
                    </div>
                    {/* Pied de la tuile avec les boutons d'enregistrement et d'annulation */}
                    <div className="tile-footer">
                      <button className="btn btn-primary" type="submit">
                        <i className="bi bi-check-circle-fill me-2"></i>Enregistrer
                      </button>&nbsp;&nbsp;&nbsp;
                      <NavLink className="btn btn-secondary" to="/seances">
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

export default EditSeance;
