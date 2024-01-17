
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { Col , Row } from 'react-bootstrap';
import VideoCard from './VideoCard';


function Category() {
  
  const [categoryName,setCategoryName] = useState("")

  const [allCategories,setAllCategories] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async ()=>{
    if(categoryName){
      // create key for rendering list
      let body={
        categoryName,allVideos:[]
      }
      // Make api call
      const responce = await addCategory(body)
      console.log(responce);

      if(responce.status>=200 && responce.status<300){
        // hide modal
        handleClose()
        // reset state
        setCategoryName("")
        // get categories
        getCategories()
      }else{
      toast.error("Something went wrong")
      }
    }else{
      toast.warning("Please provide category name!!")
    } 
  }

  const getCategories = async()=>{
    // make a api call
    const {data} = await getAllCategory()
    // console.log(data);
    setAllCategories(data);
  }

  console.log(allCategories);

  useEffect(()=>{
    getCategories()
  },[])

  const handleDelete = async(id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const videoDrop = async (e,categoryId)=>{
    console.log("Video dropped inside the category:"+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("Video card Id:"+videoId);
    // get video detail
    const {data} = await getAVideo(videoId)
    console.log(data);
    // get category details
    const selectedCategory = allCategories?.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    // make api call
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }

  const dragOver = (e)=>{
    console.log("video drag over category");
    e.preventDefault()
  }

  return (
    <>
    <div className="d-grid ms-3">
      <button onClick={handleShow} className='btn btn-info'>Add New Category</button>
    </div>

    {
      allCategories?.length>0?allCategories?.map(item=>(
        <div className='m-5 border rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>handleDelete(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </div>

          <Row>
            {
              item?.allVideos && item?.allVideos.map(
                card=>(
                  <Col sm={12}>
                    <VideoCard displayData={card} insideCategory={true} />
                  </Col>
                )
              )
            }
          </Row>
        </div>
      )):<p className='fs-5 fw-5 text-danger'>No Categories Added</p>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form className='border border-secondary rounded p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Category Name</Form.Label>
              <Form.Control type="email" placeholder=" Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer 
      position='top-center'
      theme='colored'
      autoClose={2000}/>
    </>
  )
}

export default Category