import { NavLink } from 'react-router-dom';
import Approutes from "../../../routes/Approutes"
import Search from '../Search/Search';
const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-primary navbar-primary">
            <div className="container-fluid">
                <NavLink className="text-decoration-none me-5 fw-bolder fs-5" to="/">LilShop</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mt-2 text-black">
                        <NavLink className={({ isActive }) => (isActive ? "text-success text-decoration-none " : "text-decoration-none ")} aria-current="page" to="/">Products</NavLink>
                        </li>
                       
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Admin
                            </a>
                                 <ul class="dropdown-menu">
                                    <li><NavLink to="/Admin" style={{"color":'black'}}><i className="zmdi zmdi-home text-decoration-none fw-bolder" ></i><span>Products</span></NavLink></li>
                                    <li className="active open" style={{"color":'black'}}><NavLink className="text-decoration-none fw-bolder" to="/Admin/addproduct" style={{"color":'black'}}><i className="zmdi zmdi-home"></i><span>NewProduct</span></NavLink></li>
                                 </ul>
                        </li>
                       
                    </ul>

                    <Search />
                    <NavLink className="me-5 W-100 h-100" to="/panier">
                        <i className="zmdi zmdi-shopping-cart"></i>
                    </NavLink>
                </div>
            </div>
        </nav>
       
        
    </>
  )
}

export default NavBar