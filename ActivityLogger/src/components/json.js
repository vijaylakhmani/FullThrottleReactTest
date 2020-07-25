import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import { Table, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css/"

var members = { members: [] }
var activityArray =[{}]

export default () => {
  const data = useStaticQuery(
    graphql`
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
    `
  )
  return (
    <>
      {getMemberData(data)}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Real Name</th>
            <th>Time Zone</th>
          </tr>
        </thead>
        <tbody>
          {data.allComponentsJson.edges[0].node.members.map(
            ({ activity_periods, id, real_name, tz, start_time,end_time }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{real_name}</td>
                <td>{tz}</td>
                {/* {getActivityPeriods(activity_periods)} */}
                {/* {for */}
                {console.log({activity_periods})}
              </tr>
            )
          )}
        </tbody>
      </Table>
      {/* {console.log(activityArray)} */}
    </>
  )
}

function getMemberData(data) {
  const membersArray = []
  data.allComponentsJson.edges[0].node.members.forEach(item =>
    members.members.push(item)
  )
  return membersArray
}

// function getActivityPeriods(data) {
//   data.map(({start_time,end_time}))=>{
//     return console.log(start_time,end_time)
//   }
// }

