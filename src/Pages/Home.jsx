import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {

  const [uploadVideoServerResponce,setUploadVideoServerResponce] = useState({})
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add-videos">
          <Add setUploadVideoServerResponce = {setUploadVideoServerResponce} />
        </div>
        <Link to={'/watchhistory'} style={{textDecoration: 'none', color: 'blue'}}>Watch History</Link>  
      </div>      

      <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="all-videos col-lg-9">
          <h3>All Videos</h3>
          <View uploadVideoServerResponce = {uploadVideoServerResponce} />
        </div>
        
        <div className="category col-lg-3">
          <Category />
        </div>
      </div>  
    </>
  )
}

export default Home