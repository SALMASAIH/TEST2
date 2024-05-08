import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Mettez en place votre logique de réinitialisation du mot de passe ici
    // Simule une réinitialisation réussie pour l'exemple
    const isResetSuccessful = false;

    if (isResetSuccessful) {
      // Rediriger vers le tableau de bord après la réinitialisation réussie
      navigate('/home');
    } else {
      // Gérez l'échec de la réinitialisation, affichez un message d'erreur, etc.
      console.log('Échec de la réinitialisation du mot de passe');
      toast.info("L'échec de la réinitialisation du mot de passe. Veuillez réessayer.", {
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
        <div className="login-box">
          <form className="login-form" onSubmit={handleSubmit}>
            <h3 className="login-head"><i className="bi bi-person-lock me-2"></i>Mot de passe oublié ?</h3>
            <div className="mb-3">
              <label className="form-label">EMAIL</label>
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3 btn-container d-grid">
              <button className="btn btn-primary btn-block"><i className="bi bi-unlock me-2 fs-5"></i>RÉINITIALISER</button>
            </div>
            <div className="mb-3 mt-3">
              <p className="semibold-text mb-0"><NavLink to="/" data-toggle="flip"><i className="bi bi-chevron-left me-1"></i> Retour à la connexion</NavLink></p>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default ResetPassword;
