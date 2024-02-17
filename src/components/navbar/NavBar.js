import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
  return (
    <header>
      <nav>
        <h1 className="logo">ACQUIRE</h1>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/#about'}>About</Link>
          </li>
          <li>
            <Link to={'/#subjects'}>Subjects</Link>
          </li>
          <li>
            <Link to={'/#tutors'}>Tutors</Link>
          </li>
          <li>
            <Link to={"/#contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default NavBar