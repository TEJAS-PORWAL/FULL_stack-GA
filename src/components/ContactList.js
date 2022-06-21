import React, { useEffect, useState } from 'react'
import { ContactServices } from '../services/ContactServices';
import {Link} from 'react-router-dom'
import Spinner from './spinner';

let ContactList = () => {

    // let [state, setState] = useState ({initialState: { loading: false, contacts : [], errorMessage: '' }});

    // useEffect({effect: async () => {
    //     try{
    //         setState({value: {...state,  loading: true}}); 
    //         let response = await ContactServices.getAllContacts();
    //         setState({value: {
    //             ...state,
    //             loading: false,
    //             contacts: response.data
    //         }})
    //     }

    //     catch(error) {
    //         setState({value: {
    //             ...state,
    //             loading: false,
    //             errorMessage: error.message
    //         }})
    //     }
    // } , inputs:[]});

    // let {loading, contacts, errorMessage} = state; 

  return (
    <React.Fragment>
        {/* <pre>{JSON.stringify(contacts)}</pre> */}
        <section className='contact-search'>
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold"> 
                                contact MANAGER 
                                <Link to={'/contact/add'} className="btn btn-primary mx-2"> 
                                    <i className='fa fa-plus'> </i> new
                                </Link>
                            </p>
                            <p className='fst-italic'>Welcome to the HASHTAG CONTACT BOOK WEBSITE</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className='row'>
                                <div className="col">
                                    <div className="mb-2">
                                        <input type="text" className='form-control' placeholder='search names'/>
                                    </div>
                                </div>
                                <div className="col">
                                <div className="mb-2">
                                    <input type="submit" className='btn btn-darkn' value='search'/>
                                </div>
                                </div>
                               
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <React.Fragment>
                             <section className='contact-list'>
                                <div className="container">
                                    <div className="row">
                                     
                                        
                                        <div className="col-md-6">
                                         <div className="card my-2">
                                            <div className="card-body">
                                                <div className="row align-items-center d-flex justify-content-around">
                                                    <div className="col-md-4">
                                                        <img src='https://cdn-icons-png.flaticon.com/512/17/17797.png' className='img-fluid contact-img'/>
                                                    </div>
                                                    <div className="col-md-7">
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
                                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                                        <Link to= {'/contact/view/${contacts.Id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-eye' />
                                                        </Link>
                                                        <Link to= {'/contact/edit/${contacts.id}'} className='btn btn-info my-1'>
                                                            <i className='fa fa-pen' />
                                                        </Link>
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-trash' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  

                                        <div className="col-md-6">
                                         <div className="card my-2">
                                            <div className="card-body">
                                                <div className="row align-items-center d-flex justify-content-around">
                                                    <div className="col-md-4">
                                                        <img src='https://cdn-icons-png.flaticon.com/512/17/17797.png' className='img-fluid contact-img'/>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Name : <span className='fw-bold'> shivam</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            E-Mail : <span className='fw-bold'> shivam010@gmail.com</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Mobile : <span className='fw-bold'> 9987225013</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            City : <span className='fw-bold'> lucknow</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-eye' />
                                                        </Link>
                                                        <Link to= {'/contact/edit/${contacts.id}'} className='btn btn-info my-1'>
                                                            <i className='fa fa-pen' />
                                                        </Link>
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-trash' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  

                                        <div className="col-md-6">
                                         <div className="card my-2">
                                            <div className="card-body">
                                                <div className="row align-items-center d-flex justify-content-around">
                                                    <div className="col-md-4">
                                                        <img src='https://cdn-icons-png.flaticon.com/512/17/17797.png' className='img-fluid contact-img'/>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Name : <span className='fw-bold'> harsh</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            E-Mail : <span className='fw-bold'> harsh0@gmail.com</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Mobile : <span className='fw-bold'> 6387343243</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            City : <span className='fw-bold'> ranchi</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                                        <Link to= {'/contact/view/${contact.Id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-eye' />
                                                        </Link>
                                                        <Link to= {'/contact/edit/${contacts.id}'} className='btn btn-info my-1'>
                                                            <i className='fa fa-pen' />
                                                        </Link>
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-trash' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 

                                        <div className="col-md-6">
                                         <div className="card my-2">
                                            <div className="card-body">
                                                <div className="row align-items-center d-flex justify-content-around">
                                                    <div className="col-md-4">
                                                        <img src='https://cdn-icons-png.flaticon.com/512/17/17797.png' className='img-fluid contact-img'/>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Name : <span className='fw-bold'> shivu</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            E-Mail : <span className='fw-bold'> shivu@gmail.com</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Mobile : <span className='fw-bold'> 6242233013</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            City : <span className='fw-bold'> kanpur</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-eye' />
                                                        </Link>
                                                        <Link to= {'/contact/edit/${contacts.id}'} className='btn btn-info my-1'>
                                                            <i className='fa fa-pen' />
                                                        </Link>
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-trash' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 

                                        <div className="col-md-6">
                                         <div className="card my-2">
                                            <div className="card-body">
                                                <div className="row align-items-center d-flex justify-content-around">
                                                    <div className="col-md-4">
                                                        <img src='https://cdn-icons-png.flaticon.com/512/17/17797.png' className='img-fluid contact-img'/>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Name : <span className='fw-bold'> unknown</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            E-Mail : <span className='fw-bold'> user@gmail.com</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Mobile : <span className='fw-bold'> 6387225013</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            City : <span className='fw-bold'> kanpur</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-eye' />
                                                        </Link>
                                                        <Link to= {'/contact/edit/${contacts.id}'} className='btn btn-info my-1'>
                                                            <i className='fa fa-pen' />
                                                        </Link>
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-trash' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  

                                        <div className="col-md-6">
                                         <div className="card my-2">
                                            <div className="card-body">
                                                <div className="row align-items-center d-flex justify-content-around">
                                                    <div className="col-md-4">
                                                        <img src='https://cdn-icons-png.flaticon.com/512/17/17797.png' className='img-fluid contact-img'/>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Name : <span className='fw-bold'> lotus</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            E-Mail : <span className='fw-bold'> lotus@gmail.com</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Mobile : <span className='fw-bold'> 343135013</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            City : <span className='fw-bold'> L.A</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-eye' />
                                                        </Link>
                                                        <Link to= {'/contact/edit/${contacts.id}'} className='btn btn-info my-1'>
                                                            <i className='fa fa-pen' />
                                                        </Link>
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-trash' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 

                                        <div className="col-md-6">
                                         <div className="card my-2">
                                            <div className="card-body">
                                                <div className="row align-items-center d-flex justify-content-around">
                                                    <div className="col-md-4">
                                                        <img src='https://cdn-icons-png.flaticon.com/512/17/17797.png' className='img-fluid contact-img'/>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Name : <span className='fw-bold'> lovely</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            E-Mail : <span className='fw-bold'> lovely@gmail.com</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            Mobile : <span className='fw-bold'> 6387225013</span>
                                                            </li>
                                                            <li className="list-group-item list-group-ite,-action">
                                                            City : <span className='fw-bold'> shimla</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-eye' />
                                                        </Link>
                                                        <Link to= {'/contact/edit/${contacts.id}'} className='btn btn-info my-1'>
                                                            <i className='fa fa-pen' />
                                                        </Link>
                                                        <Link to= {'/contact/view/${contacts.id}'} className='btn btn-warning my-1'>
                                                            <i className='fa fa-trash' />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                                      
                        </div>
                    </div>
                </section>
            </React.Fragment>
        
    </React.Fragment>
  )
}

export default ContactList;
