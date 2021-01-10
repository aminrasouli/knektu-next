import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

export default function HomeCard () {
  return (
    <Row>
      <Col md="4">
        <Card className="card-index mb-3">
          <Row noGutters>
            <Col md="7">
              <CardBody className="card-body-index">
                <h5 className="h6 card-title card-title-index">You are <span
                  className="text-danger">Offline</span></h5>
                <p className="card-text">0 minutes times
                  remaining</p>
                <p className="card-text">
                  <Button className="btn-index">Go Online</Button>
                </p>
              </CardBody>
            </Col>
            <Col md="5">
              <img src="/assets/image/wall.png" className="card-img"/>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="5">
        <Card className="card-index mb-3 card-disable">
          <Row noGutters>
            <Col md="9">
              <CardBody className="card-body-index">
                <span className="text-muted card-title card-title-sm-index">If you want to, you can update your availability</span>
                <p className="card-text mt-4">
                  <Row>
                    <Col md="6">
                      <form className="form-inline">
                        <input type="text"
                               className="form-control form-card-sm"/>
                        <span className="font-weight-bold"> : </span>
                        <input type="text"
                               className="form-control form-card-sm"/>
                      </form>
                    </Col>
                    <Col md="6"><Button
                      className="btn-index">Update</Button></Col>
                  </Row>
                </p>
              </CardBody>
            </Col>
            <Col md="3">
              <img src="/assets/image/wall.png" className="card-img"/>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
