import React, { useEffect, useState } from 'react'
import { Row , Col } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideo } from '../services/allAPI' 

function View({uploadVideoServerResponce}) {
  const [allVideos,setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]  = useState(false)

  const getUploadedVideos = async ()=>{
    // make api call
    const {data} = await getAllVideo()
    // console.log(data);
    setAllVideos(data);
  }

  // console.log(allVideos);

  useEffect(()=> {
    getUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponce,deleteVideoStatus])

  return (
    <>
    <Row>
      {
        allVideos.length>0?
        allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
          </Col>
        ))
        :<p className='fs-5 fw-5 text-danger'>Nothing to Display</p>
      }

    </Row>
    </>
  )
}

export default View