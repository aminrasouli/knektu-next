import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Container, Row } from 'reactstrap'

const Layout = (props) => {
  return (
    <>
      <div className="main">
        <Header/>
        <Container fluid>
          <Row>
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {props.children}
            </main>
          </Row>
        </Container>
      </div>
      <Footer/>
    </>
  )
}

export default Layout