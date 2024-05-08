import React, { useState } from 'react';
import MyTable from '../common/MyTable';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { textFilter } from 'react-bootstrap-table2-filter';
import { NavLink, useNavigate } from 'react-router-dom';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import Footer from '../common/Footer';

function Classe() {
  // État pour gérer la visibilité de la barre latérale
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // États pour gérer la visibilité du modal et la classe à supprimer
  const [showModal, setShowModal] = useState(false);
  const [classToDelete, setClassToDelete] = useState(null);

  // Fonction pour basculer la visibilité de la barre latérale
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    console.log("Sidebar visibility toggled");
  };

  // Données de classe (remplacez cela par vos données réelles)
  const data = [
    { id: 1, code: 'ce6é', niveau: 25 },
    { id: 2, code: 'ce3é', niveau: 15 },
    { id: 3, code: 'ce6é', niveau: 34 },
    { id: 4, code: 'ce8é', niveau: 44 },
    { id: 5, code: 'ce5é', niveau: 95 },
    { id: 6, code: 'ce1é', niveau: 55 },
  ];

  // Hook de navigation pour rediriger vers la page d'édition
  const navigate = useNavigate();

  // Gestionnaire pour l'édition d'une classe
  const handleEdit = (row) => {
    navigate(`/edit-classe/${row.id}/${row.code}/${row.niveau}`);
  };

  // Gestionnaire pour la suppression d'une classe
  const handleDelete = (row) => {
    setClassToDelete(row);
    setShowModal(true);
  };

  // Gestionnaire pour la confirmation de suppression
  const handleConfirmDelete = () => {
    // Ajouter ici la logique de suppression
    console.log('Suppression confirmée pour la classe avec le code :', classToDelete.code);

    // Fermer le modal
    setShowModal(false);
  };

  // Gestionnaire pour l'annulation de la suppression
  const handleCancelDelete = () => {
    // Annuler la suppression, simplement fermer le modal
    setShowModal(false);
  };

  // Filtres personnalisés pour les champs de code et de niveau
  const customCodeFilter = textFilter({
    placeholder: 'Chercher par Code',
  });

  const customNiveauFilter = textFilter({
    placeholder: 'Chercher par Niveau',
  });

  // Définition des colonnes de la table
  const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'code', text: 'Code', filter: customCodeFilter },
    { dataField: 'niveau', text: 'Niveau', filter: customNiveauFilter },
    {
      dataField: 'actions',
      text: 'Actions',
      formatter: (cellContent, row) => (
        <div className="d-flex align-items-center">
          {/* Bouton d'édition avec icône de crayon */}
          <button className="btn btn-info btn-sm me-2" onClick={() => handleEdit(row)}>
            <i className="bi bi-pencil"></i>
          </button>
          {/* Bouton de suppression avec icône de corbeille */}
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row)}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  // Options de la table
  const options = {
    custom: false,
    pageStartIndex: 1,
    prePageText: 'Précedent',
    nextPageText: 'Suivant',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    showTotal: false,
    paginationTotalRenderer: (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Affichage de {from} à {to} of {size} Results
      </span>
    ),
    sizePerPageList: [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: 'All', value: data.length },
    ],
    alwaysShowAllBtns: true,
  };

  // Rendu du composant
  return (
    <div className={`app ${isSidebarVisible ? '' : 'sidenav-toggled'}`}>
      {/* Barre d'en-tête */}
      <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      {/* Barre latérale */}
      <Sidebar />

      {/* Contenu principal */}
      <div>
        <main className="app-content">
          <div className="app-title">
            <div>
              {/* Titre avec icône d'ordinateur portable */}
              <h1><i className="bi bi-laptop"></i> Classes</h1>
            </div>
            {/* Fil d'Ariane */}
            <ul className="app-breadcrumb breadcrumb side">
              <li className="breadcrumb-item"><i className="bi bi-house-door fs-6"></i></li>
              <li className="breadcrumb-item">Dashboard</li>
              <li className="breadcrumb-item active"><a href="#">Classes</a></li>
            </ul>
          </div>
          {/* Contenu de la page */}
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <div className="row">
                  <div className="col-md-11">
                    {/* Titre de la liste des classes */}
                    <h4>Liste des classes</h4>
                  </div>
                  <div className="col-md-1">
                    {/* Bouton d'ajout avec icône plus */}
                    <NavLink className="btn btn-primary bi bi-plus" to="/new-class"></NavLink>
                  </div>
                </div>
                {/* Corps de la table */}
                <div className="tile-body mt-3">
                  <MyTable data={data} columns={columns} options={options} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>

      {/* Modal de confirmation de suppression */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Confirmation de suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Message de confirmation avec le code de la classe */}
          Êtes-vous sûr de vouloir supprimer la classe avec le code : {classToDelete && classToDelete.code} ?
        </Modal.Body>
        <Modal.Footer>
          {/* Bouton de suppression */}
          <Row className="w-100">
            <Col xs={6} className="text-start">
              <Button variant="danger" onClick={handleConfirmDelete} className="w-60">
                <i className="bi bi-trash"></i> Supprimer
              </Button>
            </Col>
            {/* Bouton d'annulation */}
            <Col xs={6} className="text-start">
              <Button variant="secondary" onClick={handleCancelDelete} className="w-40">
                <i className="bi bi-x"></i> Annuler
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Classe;
