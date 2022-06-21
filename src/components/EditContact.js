import React from 'react'
import {Link} from 'react-router-dom'

export default function EditContact() {
  return (
    <React.Fragment>
    <section className='add-contact p-3'>
        <div className="containter">
            <div className="col">
                <p className='h4 text-info fw-bold'>
                    EditContact 
                </p>
                <p>
                    {/* add anything of your choice */}
                </p>
            </div>
            <div className='row align-items-center'>
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
                            <input type='text' className='form-control' placeholder='Image-URL'/>
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
                            <input type='submit' className='btn btn-primary' value="update"/>
                            <Link to={'/contact/list'} className="btn btn-primary ms-2">cancel</Link> 
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src='https://cdn-icons-png.flaticon.com/512/17/17797.png' className='contact-img'/>
                </div>
            </div>
        </div>
    </section>
</React.Fragment>
  )
}
