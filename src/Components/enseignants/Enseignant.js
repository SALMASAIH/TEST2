import React,{useState} from 'react';
import MyTable from '../common/MyTable';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { textFilter } from 'react-bootstrap-table2-filter';  // Import textFilter from react-bootstrap-table2-filter
import { NavLink, useNavigate } from 'react-router-dom';
import { Modal, Button, Row, Col } from 'react-bootstrap';



function Enseignant() {
  // Hook de navigation pour rediriger vers la page d'édition
  const navigate = useNavigate();
  const data = [
    { id: 1, nom: 'hanae', prenom: 'elbourimi', email: 'hanae@gmail.com', telephone: '0654328765' },
    { id: 2, nom: 'madiha', prenom: 'saih', email: 'maria@gmail.com', telephone: '0654328765' },
    { id: 3, nom: 'oumaima', prenom: 'sadik', email: 'mimi@gmail.com', telephone: '0654328765' },
    { id: 4, nom: 'wiam', prenom: 'sghir', email: 'sghir@gmail.com', telephone: '0654328765' },
    { id: 5, nom: 'oussama', prenom: 'hammach', email: 'hddddd@gmail.com', telephone: '0654328765' },
    { id: 6, nom: 'kamal', prenom: 'omari', email: 'amaomr@gmail.com', telephone: '0654328765' },
    { id: 6, nom: 'nizar', prenom: 'lkbir', email: 'lkbir@gmail.com', telephone: '0654328765' },



  ];
  // État pour gérer la visibilité du modal de confirmation de suppression
  const [showModal, setShowModal] = useState(false);
  // État pour stocker le module à supprimer
  const [enseignantToDelete, setEnseignantToDelete] = useState(null);
  // Fonction pour gérer la suppression d'un module
  const handleDelete = (row) => {
    // Stockez le module à supprimer dans l'état
    setEnseignantToDelete(row);
    // Affichez le modal de confirmation de suppression
    setShowModal(true);
  };

  // Fonction pour confirmer la suppression d'un module
  const handleConfirmDelete = () => {
    // Implémentez votre logique de suppression ici
    console.log('Suppression confirmée pour l enseignant avec le code :', enseignantToDelete.code);

    // Fermez le modal de confirmation
    setShowModal(false);
  };

  // Fonction pour annuler la suppression d'un module
  const handleCancelDelete = () => {
    // Annulez la suppression, fermez simplement le modal de confirmation
    setShowModal(false);
  };

  // Fonction pour gérer l'édition d'un module (à implémenter)
  const handleEdit = (row) => {
    // Implémentez votre logique d'édition ici
    navigate(`/edit-enseignant/${row.id}/${row.nom}/${row.prenom}/${row.email}/${row.tele}`);

  };

  const customPrenomFilter = textFilter({
    placeholder: 'Chercher par Prénom',
  });
  const customNomFilter = textFilter({
    placeholder: 'Chercher par Nom',
  });
  const customEmailFilter = textFilter({
    placeholder: 'Chercher par Email',
  });

  const customTelephoneFilter = textFilter({
    placeholder: 'Chercher par Téléphone',
  });
  const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'nom', text: 'Nom', filter: customNomFilter },
    { dataField: 'prenom', text: 'Prénom', filter: customPrenomFilter },
    { dataField: 'email', text: 'E-mail', filter: customEmailFilter },
    { dataField: 'telephone', text: 'Téléphone', filter: customTelephoneFilter },

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


  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);

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
              <li className="breadcrumb-item active"><a href="#">Enseignants</a></li>
            </ul>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tile">
                <div class="row">
                  <div class="col-md-11">
                    <h4>Liste des enseignants</h4>
                  </div>
                  <div class="col-md-1">
                    <NavLink className="btn btn-primary bi bi-plus" to="/ajout-enseignant"></NavLink>
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
          Êtes-vous sûr de vouloir supprimer l'enseignant avec le nom : {enseignantToDelete && enseignantToDelete.nom} ?
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

export default Enseignant;
