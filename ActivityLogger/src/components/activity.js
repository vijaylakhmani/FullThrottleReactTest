import React from "react"
import {  graphql, StaticQuery } from "gatsby"
import Table from "react-bootstrap/Table"
import "bootstrap/dist/css/bootstrap.min.css/"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { ButtonGroup } from "react-bootstrap"
import ListGroup from "react-bootstrap/ListGroup"

class Activity extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }
  handleClose = () => this.setState({ show: false })
  handleShow = () => this.setState({ show: true })

  handleButtonClick = event => this.setState({ rowId: event })
  render() {
    return (
      <>
        <StaticQuery
          query={graphql`
            query ActivityLog {
              allComponentsJson {
                edges {
                  node {
                    members {
                      id
                      real_name
                      activity_periods {
                        start_time
                        end_time
                      }
                      __typename
                      tz
                    }
                    ok
                    parent {
                      id
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <Table bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Real Name</th>
                  <th>Time Zone</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                {data.allComponentsJson.edges[0].node.members.map(
                  ({
                    activity_periods,
                    id,
                    real_name,
                    tz,
                    start_time,
                    end_time,
                  }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{real_name}</td>
                      <td>{tz}</td>
                      <td>
                        <ButtonGroup
                          onClick={event => {
                            this.handleButtonClick(event.target.value)
                            if (this.state.show === false) {
                              this.handleShow()
                            } else {
                              this.handleClose()
                            }
                          }}
                        >
                          <Button
                            value={id}
                            size="sm"
                            variant="secondary"
                            style={{
                              height: 25,
                              width: 25,
                              margin: `auto`,
                              textAlign: `center`,
                              padding: 0,
                            }}
                          >
                            i
                          </Button>
                        </ButtonGroup>
                      </td>
                      {this.state.show && (
                        <Modal
                          show={true}
                          onHide={this.handleClose}
                          backdrop="static"
                          keyboard={false}
                        >
                          <Modal.Header
                            closeButton
                            style={{ background: `#05386B`, color: `white` }}
                          >
                            <Modal.Title>Activity Log</Modal.Title>
                          </Modal.Header>
                          <Modal.Body style={{ background: `aliceblue` }}>
                            The user activity can be seen as follows.
                            <ListGroup style={{ paddingTop: `10px` }}>
                              <Table style={{ border: `none` }}>
                                <thead
                                  style={{
                                    border: `1px solid lightgrey`,
                                    width: `100%`,
                                    display: `inline-table`,
                                  }}
                                >
                                  <th>Start Time</th>
                                  <th>End Time</th>
                                </thead>
                                <tbody>
                                  {activity_periods.map((item, index) => (
                                    <ListGroup.Item eventKey={index}>
                                      <tr
                                        style={{
                                          border: `none 1px !important`,
                                        }}
                                      >
                                        <td className="modal-table">
                                          {" "}
                                          {item.start_time}
                                        </td>
                                        <td className="modal-table">
                                          {" "}
                                          {item.end_time}
                                        </td>
                                      </tr>
                                      {console.log(item.start_time, index)}
                                    </ListGroup.Item>
                                  ))}
                                </tbody>
                              </Table>
                            </ListGroup>
                          </Modal.Body>
                          <Modal.Footer style={{ background: `aliceblue` }}>
                            <Button
                              variant="secondary"
                              onClick={this.handleClose}
                            >
                              Dismiss
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      )}
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          )}
        />
      </>
    )
  }
}

export default Activity
