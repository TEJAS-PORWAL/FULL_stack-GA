import React from 'react'
import {Link} from 'react-router-dom'

export default function ViewContact() {
  return (
      <React.Fragment>
          <section className='view-contact-intro p-3'>
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <p className="h3 text-warning"> ViewContact</p>
                      </div>
                  </div>
              </div>
          </section>
          <section className="view-contact p-3">
              <div className="contianer">
                  <div className="row align-items-center">
                      <div className="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/17/17797.png" className='contact-img'/>
                      </div>
                      <div className="col-md-8">
                      <ul className="list-group">
                                            <li className="list-group-item list-group-ite,-action">
                                                Name : <span className='fw-bold'> tejas</span>
                                            </li>
                                            <li className="list-group-item list-group-ite,-action">
                                                E-Mail : <span className='fw-bold'> tejas010@gmail.com</span>
                                            </li>
                                            <li className="list-group-item list-group-ite,-action">
                                                Mobile : <span className='fw-bold'> 6387225013</span>
                                            </li>
                                            <li className="list-group-item list-group-ite,-action">
                                                City : <span className='fw-bold'> kanpur</span>
                                            </li>
                                        </ul>
                      </div>
                      <div className='row'>
                          <div className="col">
                            <Link to={'/contact/list'} className='btn btn-warning' >Back</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </React.Fragment>
  )
}
