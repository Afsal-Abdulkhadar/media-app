import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'

function WatchHistory() {

  const [history,setHistory]=useState([])

  const handleHistory = async ()=>{
    // Make api call
    const {data} = await getAllHistory()
    // console.log(data);
    setHistory(data);
  }
  console.log(history);

  useEffect(()=>{
    handleHistory()
  },[])

  const handleDeleteHistory = async (id)=>{
    // make api call
    await deleteHistory(id)
    // get remaining history
    handleHistory()
  }

  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration: 'none' , fontSize: '20px', color: 'blueviolet'}}>Back To Home</Link>
    </div>

    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Capital</th>
          <th>URL</th>
          <th>Timestrap</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {
          history.length>0?history?.map((item,index)=>(
            <tr key = {index}>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td>{item?.embedLink}</td>
              <td>{item?.timeStamp}</td>
              <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
        </tr>
          )):<p className='fs-5 fw-5 text-danger'>Nothing to Display</p>
        }

      </tbody>
    </table>
    </>
  )
}

export default WatchHistory