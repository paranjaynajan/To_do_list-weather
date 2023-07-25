import React from 'react'
import { Container, Button } from 'react-bootstrap';

function Aside() {
    const databutton=["programming","eductaion","skills","music","dance","sports"]
  return (<>
      <Container  style={{height:"2000px"}} >
          <div className='mt-4 position-sticky'  style={{top:"0px"}} >{
        databutton.map((e) => {
            return<span className='m-1'><Button>{e}</Button></span>
        })}
      </div>
      <div className='m-3 border-bottom'>
        <p className='text-left'>See more topics</p>
      </div>
    </Container>
  </>
  )
}

export default Aside
