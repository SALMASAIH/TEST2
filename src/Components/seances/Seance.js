import React, {useState} from 'react';
import MyTable from '../common/MyTable';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { textFilter } from 'react-bootstrap-table2-filter';  // Import textFilter from react-bootstrap-table2-filter
import { NavLink, useNavigate } from 'react-router-dom';
import { Modal, Button, Row, Col } from 'react-bootstrap';



function Seance() {

  const data = [
    { id: 1, code: 'df4',  module: 'Maths', enseignant: '1', classe: 'S1' ,heureDebut: '08:30', heureFin:'10:30', type: 'ratt', date: '12/03/2023' },
    { id: 2, code: 'DG5',  module: 'linux', enseignant: 1, classe: 'S4' ,heureDebut: '08:30', heureFin:'10:30',type: 'ratt', date: '12/03/2023'},
    { id: 3, code: 'gk8',  module: 'gestion de projet', enseignant: 2, classe: 'S2' ,heureDebut: '08:30', heureFin:'10:30',type: 'ratt', date: '12/03/2023'},
    { id: 4, code: 'gF7',  module: 'c++', enseignant: 2, classe: 'S5' ,heureDebut: '08:30', heureFin:'10:30',type: 'ratt', date: '12/03/2023'},
    { id: 5, code: 'Sk3',  module: 'oracle', enseignant: 2, classe: 'S3' ,heureDebut: '08:30', heureFin:'10:30',type: 'ratt', date: '12/03/2023'},
    { id: 6, code: 'gl1',  module: 'tec', nenseignant: 2, classe: 'S2' ,heureDebut: '08:30', heureFin:'10:30',type: 'ratt', date: '12/03/2023'},


  ];


  const customCodeFilter = textFilter({
    placeholder: 'Chercher par Code',
  });
  const customModuleFilter = textFilter({
    placeholder: 'Chercher par Module',
  });
  const customEnseignantFilter = textFilter({
    placeholder: 'Chercher par Enseignant',
  });

  const customClasseFilter = textFilter({
    placeholder: 'Chercher par Classe',
  });

  const customHeureDebutFilter = textFilter({
    placeholder: 'Chercher par Heure D',
  });

  const customHeureFinFilter = textFilter({
    placeholder: 'Chercher par Heure F',
  });
  const customHeureTypeFilter = textFilter({
    placeholder: 'Chercher par Type',
  });
  const customDateFilter = textFilter({
    placeholder: 'Chercher par Date',
  });

  const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'code', text: 'Code', filter: customCodeFilter },
    { dataField: 'module', text: 'Module', filter: customModuleFilter },
    { dataField: 'enseignant', text: 'Enseignant', filter: customEnseignantFilter },
    { dataField: 'classe', text: 'Classe', filter: customClasseFilter },
    { dataField: 'heureDebut', text: 'HeureDébut', filter: customHeureDebutFilter },
    { dataField: 'heureFin', text: 'HeureFin', filter: customHeureFinFilter },
    { dataField: 'type', text: 'Type', filter: customHeureTypeFilter },
    { dataField: 'date', text: 'Date', filter: customDateFilter },

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

  // État pour gérer la visibilité du modal de confirmation de suppression
  const [showModal, setShowModal] = useState(false);
  // État pour stocker le module à supprimer
  const [seanceToDelete, setSeanceToDelete] = useState(null);

  // Hook de navigation pour rediriger vers la page d'édition
  const navigate = useNavigate();

  const formatDateForURL = (originalDate) => {
    const dateObject = new Date(originalDate);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Les mois vont de 0 à 11
    const day = String(dateObject.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Fonction pour gérer l'édition d'un module (à implémenter)
  const handleEdit = (row) => {
    // Implémentez votre logique d'édition ici

    navigate(`/edit-seance/${row.id}/${row.code}/${row.module}/${row.enseignant}/${row.classe}/${row.heureDebut}/${row.heureFin}/${formatDateForURL(row.date)}/${row.type}`);

  };

  // Fonction pour gérer la suppression d'un module
  const handleDelete = (row) => {
    // Stockez le module à supprimer dans l'état
    setSeanceToDelete(row);
    // Affichez le modal de confirmation de suppression
    setShowModal(true);
  };

  // Fonction pour confirmer la suppression d'un module
  const handleConfirmDelete = () => {
    // Implémentez votre logique de suppression ici
    console.log('Suppression confirmée pour la séance avec le code :', seanceToDelete.code);

    // Fermez le modal de confirmation
    setShowModal(false);
  };

  // Fonction pour annuler la suppression d'un module
  const handleCancelDelete = () => {
    // Annulez la suppression, fermez simplement le modal de confirmation
    setShowModal(false);
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
              <li className="breadcrumb-item active"><a href="#">Séances</a></li>
            </ul>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tile">
                <div class="row">
                  <div class="col-md-11">
                    <h4>Liste des séances</h4>
                  </div>
                  <div class="col-md-1">
                    <NavLink className="btn btn-primary bi bi-plus" to="/ajout-seance"></NavLink>
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
          Êtes-vous sûr de vouloir supprimer la séance avec le code : {seanceToDelete && seanceToDelete.code} ?
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

export default Seance;
