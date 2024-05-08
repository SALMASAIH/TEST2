import React, { useState } from 'react';
import MyTable from '../common/MyTable';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { textFilter } from 'react-bootstrap-table2-filter';
import { NavLink, useNavigate } from 'react-router-dom';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import Footer from '../common/Footer';

function Module() {
  // État pour gérer la visibilité de la barre latérale
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  // État pour gérer la visibilité du modal de confirmation de suppression
  const [showModal, setShowModal] = useState(false);
  // État pour stocker le module à supprimer
  const [moduleToDelete, setModuleToDelete] = useState(null);

  // Fonction pour basculer la visibilité de la barre latérale
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Données de démo pour les modules
  const data = [
    { id: 1, code: 'df4', nom: 'Maths', niveau: '1', semestre: 'S1' },
    { id: 2, code: 'DG5', nom: 'linux', niveau: 1, semestre: 'S4' },
    { id: 3, code: 'gk8', nom: 'gestion de projet', niveau: 2, semestre: 'S2' },
    { id: 4, code: 'gF7', nom: 'c++', niveau: 2, semestre: 'S5' },
    { id: 5, code: 'Sk3', nom: 'oracle ', niveau: 2, semestre: 'S3' },
    { id: 6, code: 'gl1', nom: 'tec', niveau: 2, semestre: 'S2' },
  ];
  // Hook de navigation pour rediriger vers la page d'édition
  const navigate = useNavigate();


  // Fonction pour gérer l'édition d'un module (à implémenter)
  const handleEdit = (row) => {
    // Implémentez votre logique d'édition ici
    navigate(`/edit-module/${row.id}/${row.code}/${row.nom}/${row.niveau}/${row.semestre}`);

  };

  // Fonction pour gérer la suppression d'un module
  const handleDelete = (row) => {
    // Stockez le module à supprimer dans l'état
    setModuleToDelete(row);
    // Affichez le modal de confirmation de suppression
    setShowModal(true);
  };

  // Fonction pour confirmer la suppression d'un module
  const handleConfirmDelete = () => {
    // Implémentez votre logique de suppression ici
    console.log('Suppression confirmée pour le module avec le code :', moduleToDelete.code);

    // Fermez le modal de confirmation
    setShowModal(false);
  };

  // Fonction pour annuler la suppression d'un module
  const handleCancelDelete = () => {
    // Annulez la suppression, fermez simplement le modal de confirmation
    setShowModal(false);
  };

  // Filtres personnalisés pour les colonnes de la table
  const customCodeFilter = textFilter({
    placeholder: 'Chercher par Code',
  });

  const customNomFilter = textFilter({
    placeholder: 'Chercher par Nom',
  });

  const customNiveauFilter = textFilter({
    placeholder: 'Chercher par Niveau',
  });

  const customSemestreFilter = textFilter({
    placeholder: 'Chercher par Semestre',
  });

  // Colonnes de la table
  const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'code', text: 'Code', filter: customCodeFilter },
    { dataField: 'nom', text: 'Nom', filter: customNomFilter },
    { dataField: 'niveau', text: 'Niveau', filter: customNiveauFilter },
    { dataField: 'semestre', text: 'Semestre', filter: customSemestreFilter },
    {
      dataField: 'actions',
      text: 'Actions',
      formatter: (cellContent, row) => (
        <div className="d-flex align-items-center">
          <button className="btn btn-info btn-sm me-2" onClick={() => handleEdit(row)}>
            <i className="bi bi-pencil"></i>
          </button>
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
          <div class="row">
            <div class="col-md-12">
              <div class="tile">
                <div class="row">
                  <div class="col-md-11">
                    <h4>Liste des modules</h4>
                  </div>
                  <div class="col-md-1">
                    <NavLink className="btn btn-primary bi bi-plus" to="/ajout-module"></NavLink>
                  </div>
                </div>
                <div class="tile-body mt-3">
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
          Êtes-vous sûr de vouloir supprimer le module avec le code : {moduleToDelete && moduleToDelete.code} ?
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100">
            <Col xs={6} className="text-start">
              <Button variant="danger" onClick={handleConfirmDelete} className="w-60">
                <i className="bi bi-trash"></i> Supprimer
              </Button>
            </Col>
            <Col xs={6} className="text-start">
              <Button variant="secondary" onClick={handleCancelDelete} className="w-40">
                <i className="bi bi-x-circle-fill"></i> Annuler
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Module;
