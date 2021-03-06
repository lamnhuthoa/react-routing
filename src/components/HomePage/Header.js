import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(props) {

    const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer);

    const renderLogin = () => {
        if(userLogin !== null){
            return <NavLink activeStyle={{ backgroundColor: '#fff', color: '#000' }} activeClassName="active" className="nav-link" to="/profile">Hello {userLogin.taiKhoan}!</NavLink>
        } else {
            return <NavLink activeStyle={{ backgroundColor: '#fff', color: '#000' }} activeClassName="active" className="nav-link" to="/login">Login</NavLink>
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink activeStyle={{ backgroundColor: '#fff', color: '#000' }} activeClassName="active" className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ backgroundColor: '#fff', color: '#000' }} activeClassName="active" className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ backgroundColor: '#fff', color: '#000' }} activeClassName="active" className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            {renderLogin()}
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/usestate">Use State</NavLink>
                                <NavLink className="dropdown-item" to="/useeffect">Use Effect</NavLink>
                                <NavLink className="dropdown-item" to="/reduxhook">Redux Hook</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Axios</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/ajaxrcc">Ajax React Class</NavLink>
                                <NavLink className="dropdown-item" to="/ajaxrfc">Ajax React Function</NavLink>
                                <NavLink className="dropdown-item" to="/apimiddleware">Api Middle Ware</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Routing</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
                                <NavLink className="dropdown-item" to="/hoc">HOC</NavLink>
                                <NavLink className="dropdown-item" to="/antd">Ant Design</NavLink>
                            </div>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    )
}