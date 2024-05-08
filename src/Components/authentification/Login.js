import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Mettez en place votre logique de connexion ici
    // Simule une connexion réussie pour l'exemple
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      // Rediriger vers le tableau de bord après la connexion réussie

      navigate('/home');
    } else {
      // Gérez l'échec de la connexion, affichez un message d'erreur, etc.
      console.log('Échec de la connexion');
      toast.error('Nom d\'utilisateur ou mot de passe incorrect', {
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
            <h3 className="login-head"><i className="bi bi-person me-2"></i>CONNEXION</h3>
            <div className="mb-3">
              <label className="form-label">NOM D'UTILISATEUR</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                autoFocus
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
            <div className="mb-3">
              <div className="utility">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" />
                    <span className="label-text">Rester connecté</span>
                  </label>
                </div>
                <p className="semibold-text mb-2">
                  <NavLink to="/mot-de-passe-oublié" data-toggle="flip">Mot de passe oublié ?</NavLink>
                </p>
              </div>
            </div>
            <div className="mb-3 btn-container d-grid">
              <button className="btn btn-primary btn-block" type="submit">
                <i className="bi bi-box-arrow-in-right me-2 fs-5"></i>CONNEXION
              </button>
              <p className="semibold-text mt-3 mb-2">
                Vous n'avez pas de compte? <NavLink to="/inscription">S'inscrire</NavLink>
              </p>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Login;
