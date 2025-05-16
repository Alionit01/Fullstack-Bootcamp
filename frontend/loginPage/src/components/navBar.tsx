import { Link } from 'react-router-dom';
import { logout } from '../feature/auth/authSlice'; 
import { useDispatch, useSelector } from 'react-redux';
import { selectTokenValue } from '../feature/auth/authSelector';

const Navbar = () => {
 const token = useSelector(selectTokenValue);
 const dispatch = useDispatch();

 const handleLogout = () => {
   dispatch(logout());
 };

 if (!token) return null;

 return (
   <nav>
     <Link to="/dashboard">Dashboard</Link> |
     <Link to="/home"> Home</Link> |
     <Link to="/about"> About</Link> |
     <button onClick={handleLogout}>Logout</button>
   </nav>
 );
};
export default Navbar;