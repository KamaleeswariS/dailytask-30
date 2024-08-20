import React, { createContext, useEffect, useState } from 'react'
import CreateForm from "./CreateForm";
import axios from 'axios';
import DetailsCard from "./DetailsCard";
import EditDetails from "./EditDetails";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./Navbar";

let Data = createContext();

function App() {
  let [Details, setDetails] = useState([])
  let [EditID, setEditID] = useState(3)

  async function fetchData () {
    try {
      const response = await axios.get('https://65ba3b73b4d53c0665525c3c.mockapi.io/posts/users');
      setDetails(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);    

  return (<BrowserRouter>
  <Data.Provider value ={{Details, setDetails, EditID, setEditID, fetchData}}>
    <Navbar />
    <Routes>
      <Route path='/create' element={<CreateForm />}/>
      <Route path='/edit/:id' element={<EditDetails />}/>
      <Route path='/card-details' element={<DetailsCard /> }/>
    </Routes>
    </Data.Provider>
    </BrowserRouter>
  )
}

export { App as default, Data }