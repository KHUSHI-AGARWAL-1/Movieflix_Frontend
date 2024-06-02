import React from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
function Navbar() {
  const [authuser, setauth] = useAuth();
  const handleLogout = () => {
    try {
      setauth({
        ...authuser,
        user: null
      });
      localStorage.removeItem("Users");
      toast.success("Logged Out Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch (error) {
      toast.error("Error: " + error.message);
      setTimeout(() => { }, 3000);
    }
  }

  return (
    <nav className="navbar">
      <span className="navbar-brand">MovieFlix</span>

      <div className="navbar-buttons">
        {authuser ? (
          <>
            <button
              className="btn"
              onClick={handleLogout}
            >
              LogOut
            </button>
            <Link to='/watchlist' className="btn">WatchList</Link>
          </>
        ) : (
          <>
            <Link to='/signup' className="btn">Sign Up</Link>
            <Link to='/login' className="btn">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
