import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

export default function BecomingCard () {
  return (
    <Row className="card-becoming-gutter">
      <Col md="3">
        <Card className="card-becoming mb-3">
          <Row noGutters>
            <Col md="2">
              <img className="svg-icon"
                   src="/assets/svg/file-search.svg"/>
            </Col>
            <Col md="7">
              <CardBody className="card-becoming-index">
                <span className="card-title">Teacher Reference/DfE Number</span>
                <p className="card-text text-danger font-weight-bold ">
                  Rejected
                </p>
              </CardBody>
            </Col>
            <Col md="3">
              <Button size="sm">Upload</Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="3">
        <Card className="card-becoming mb-3">
          <Row noGutters>
            <Col md="2">
              <img className="svg-icon"
                   src="/assets/svg/file-search.svg"/>
            </Col>
            <Col md="7">
              <CardBody className="card-becoming-index">
                <span className="card-title">DBS Reference</span>
                <p className="card-text text-dark font-weight-bold ">
                  Pending approval
                </p>
              </CardBody>
            </Col>
            <Col md="3">
              <Button size="sm">Upload</Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="3">
        <Card className="card-becoming mb-3">
          <Row noGutters>
            <Col md="2">
              <img className="svg-icon"
                   src="/assets/svg/file-certificate.svg"/>
            </Col>
            <Col md="7">
              <CardBody className="card-becoming-index">
                <span className="card-title">Proof of ID</span>
                <p className="card-text text-dark font-weight-bold ">
                  Pending approval
                </p>
              </CardBody>
            </Col>
            <Col md="3">
              <Button size="sm">Upload</Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md="3">
        <Card className="card-becoming mb-3">
          <Row noGutters>
            <Col md="2">
              <img className="svg-icon"
                   src="/assets/svg/file-certificate.svg"/>
            </Col>
            <Col md="7">
              <CardBody className="card-becoming-index">
                <span className="card-title">Qualifications</span>
                <p className="card-text text-success font-weight-bold ">
                  Approved
                </p>
              </CardBody>
            </Col>
            <Col md="3">
              <Button size="sm">Upload</Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
