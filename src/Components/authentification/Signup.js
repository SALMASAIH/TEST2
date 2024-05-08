import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Add state for role
  const [telephone, setTelephone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implement your registration logic here
    // Simulate successful registration for the example
    const isRegistrationSuccessful = true;

    if (isRegistrationSuccessful) {
      // Redirect to the dashboard after successful registration
      navigate('/home');
    } else {
      // Handle registration failure, show an error message, etc.
      console.log('Échec de l\'inscription');
      toast.error('Échec de l\'inscription. Veuillez réessayer.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <section className="material-half-bg">
        <div className="cover"></div>
      </section>
      <section className="login-content">
        <div className="logo">
          <h1>Gestion de l'emploi du temps</h1>
        </div>
        <div className="login-box " id="signup">
          <form className="login-form" onSubmit={handleSubmit}>
            <h3 className="login-head"><i className="bi bi-person me-2"></i>INSCRIPTION</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">NOM</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nom"
                    autoFocus
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">PRÉNOM</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Prénom"
                    required
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </div>
              </div>

            <div className="col-md-6">

            <div className="mb-3">
              <label className="form-label">EMAIL</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            </div>
            <div className="col-md-6">

            <div className="mb-3">
              <label className="form-label">MOT DE PASSE</label>
              <input
                className="form-control"
                type="password"
                placeholder="Mot de passe"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            </div>
            <div className="col-md-6">

            <div className="mb-3">
              <label className="form-label">RÔLE</label>
              <select
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled>Sélectionnez un rôle</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            </div>
            <div className="col-md-6">

            <div className="mb-3">
              <label className="form-label">TÉLÉPHONE</label>
              <input
                className="form-control"
                type="tel"
                placeholder="Téléphone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            </div>
              </div>
            <div className="mb-3 btn-container d-grid">
              <button className="btn btn-primary btn-block" type="submit">
                <i className="bi bi-box-arrow-in-right me-2 fs-5"></i>INSCRIPTION
              </button>
              <p className="semibold-text mt-3 mb-2">
                Vous avez déjà un compte? <NavLink to="/">Connexion</NavLink>
              </p>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Signup;
