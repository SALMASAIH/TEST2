import React from 'react';
import '../Assets/css/main.css';
import '../Assets/js/main.js';
import { useNavigate, NavLink } from 'react-router-dom';
import photo from '../Assets/Images/profile.jpg';

const Sidebar = ({open}) => {

  const navigate = useNavigate();

 const handleClass = () => {

   navigate('/classe');
 };
  return (
    <div>
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
     <aside class="app-sidebar">
       <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src={photo} alt="User Image"/>
         <div>
           <p class="app-sidebar__user-name">Saih salma</p>
           <p class="app-sidebar__user-designation">Chef de Département</p>
         </div>
       </div>
       <ul class="app-menu">
         <li><NavLink className="app-menu__item" to="/home"><i class="app-menu__icon bi bi-speedometer"></i><span class="app-menu__label">Dashboard</span></NavLink></li>
         <li><NavLink className="app-menu__item" to="/classes" ><i class="app-menu__icon bi bi-laptop"></i><span class="app-menu__label">Classes</span></NavLink>
         </li>
         <li><NavLink className="app-menu__item"  to="/modules" ><i class="app-menu__icon bi bi-book"></i><span class="app-menu__label">Modules</span></NavLink>
         </li>
         <li><NavLink className="app-menu__item" to="/seances" ><i class="app-menu__icon bi bi-table"></i><span class="app-menu__label">Séances</span></NavLink>
         </li>
         <li><NavLink className="app-menu__item" to="/etudiants"><i class="app-menu__icon bi bi-mortarboard"></i><span class="app-menu__label">Etudiants</span></NavLink>

         </li>
         <li><NavLink className="app-menu__item" to="/enseignants"><i class="app-menu__icon bi bi-briefcase"></i><span class="app-menu__label">Enseignants</span></NavLink></li>
         <li><NavLink className="app-menu__item" to="/calendrier"><i class="app-menu__icon bi bi-calendar-check"></i><span class="app-menu__label">Calendrier</span></NavLink></li>

       </ul>
     </aside>
     </div>
  );
}

export default Sidebar;
