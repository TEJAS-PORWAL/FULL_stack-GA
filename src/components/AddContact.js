import React from 'react'
import {Link} from 'react-router-dom' 

export default function AddContact() {
  return (
    <React.Fragment>
        <section className='add-contact p-3'>
            <div className="containter">
                <div className="col">
                    <p className='h3 text-success'>
                        create contact
                    </p>
                    <p>
                        {/* add anything of your choice */}
                    </p>
                </div>
                <div className='row align-items-justify d-flex left-content-around '>
                    <div className="col-md-4">
                        <form>
                            <div className="mb-2">
                                <input type='text' className='form-control' placeholder='Name'/>
                            </div>
                            <div className="mb-2">
                                <input type='text' className='form-control' placeholder='E-mail'/>
                            </div>
                            <div className="mb-2">
                                <input type='text' className='form-control' placeholder='Mobile'/>
                            </div>
                            <div className="mb-2">
                                <input type='text' className='form-control' placeholder='City'/>
                            </div>
                            <div className="mb-2">
                                <input type='text' className='form-control' placeholder='Photo-URL'/>
                            </div>
                            
                            {/*   #  add few additional row of your choice accordingly   */}

                            {/* <div className="mb-2">
                            <input type='text' className='form-control' placeholder='City'/>
                            </div> */}
                            {/* <div className="mb-2">
                                <input type='text' className='form-control' placeholder='City'/>
                            </div> */}
                            {/* <div className="mb-2">
                                <input type='text' className='form-control' placeholder='City'/>
                            </div> */}
                            
                            <div className="mb-2">
                                <input type='submit' className='btn btn-success' value="create"/>
                                <Link to={'/contact/list'} className="btn btn-dark ms-2">cancel</Link> 
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
