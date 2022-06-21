import React from 'react'
import './App.css';
import {Routes , Route , Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import ViewContact from './components/ViewContact';
import EditContact from './components/EditContact';
// import Spinner from './components/spinner';


function App() {
  return (
   <>
   <React.Fragment>
     {/* <Spinner/> */}
     <Navbar />
     <Routes> 
       <Route path= {'/'} element={<Navigate to={'./contact/list'} /> } />
       <Route path= {'/contact/list'} element={<ContactList />} />
       <Route path= {'/contact/add'} element={<AddContact />} />
       <Route path= {'/contact/view/:contactID'} element={<ViewContact />} />
       <Route path= {'/contact/edit/:contactId'} element={<EditContact />} />
       
      </Routes>
   </React.Fragment>
   </>
   
  );
}

export default App;
