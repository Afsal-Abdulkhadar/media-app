import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigateUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={4}>
      <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, rem blanditiis, vel sint velit, aliquam consequatur necessitatibus vitae adipisci neque eos alias mollitia. Vero, iusto aperiam in perferendis repellat debitis!</p>
      <button onClick={()=>navigateUrl('/home')} className='mt-5 btn btn-info'>Get Start</button>
      </Col>
      <Col lg={6}>
        <img className='img-fliuid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkc7TQekqaMajeYEg0m8lJhjGctLatyqyz3g&usqp=CAU" alt="img" />
      </Col>
      <Col></Col>
    </Row>

    <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
      <h3>Features</h3>
      <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
        <Card className='p-4' style={{ width: '18rem' }}>
        <Card.Img width={'300px'} height={'300px'} variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>Play Everything</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
       </Card>

       <Card className='p-4' style={{ width: '18rem' }}>
        <Card.Img width={'300px'} height={'300px'} variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
       </Card>

       <Card className='p-4' style={{ width: '18rem' }}>
        <Card.Img width={'300px'} height={'300px'} variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>Categorized Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
       </Card>
      </div>
    </div>

    <div className="container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100">
      <div className="col-lg-5">
        <h3 className='mb-5 text-warning'>Simple,Powerful & Fast</h3>
        <h6 className='mb-3'><span className='fs-5 ft-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officiis voluptatem, perspiciatis, quidem eveniet rerum esse deserunt voluptatibus deleniti similique quod? Sed eos dolorum quae in distinctio repellendus quaerat optio.</h6>

        <h6 className='mb-3'><span className='fs-5 ft-bolder text-warning'>Managing Videos</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officiis voluptatem, perspiciatis, quidem eveniet rerum esse deserunt voluptatibus deleniti similique quod? Sed eos dolorum quae in distinctio repellendus quaerat optio.</h6>

        <h6 className='mb-3'><span className='fs-5 ft-bolder text-warning'>Categorized Videos</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officiis voluptatem, perspiciatis, quidem eveniet rerum esse deserunt voluptatibus deleniti similique quod? Sed eos dolorum quae in distinctio repellendus quaerat optio.</h6>
      </div>

      <div className="video col-lg-5">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/qcVMlDTtY7E?si=5UuklprwD2Fm6wFL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </>
  )
}

export default LandingPage