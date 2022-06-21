import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <React.Fragment>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
            <div className='container'>
                <Link to={'/'} className="navbar-brand">
                   <i className='fa fa-mobile text-warning'/> CONTACT <span className="text-warning">MANAGER</span>
                </Link>
            </div>
        </nav>
    </React.Fragment>
  )
}
