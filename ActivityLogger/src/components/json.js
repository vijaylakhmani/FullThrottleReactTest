import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import { Table } from "rsuite"
import 'rsuite/dist/styles/rsuite-default.css';

const { Column, HeaderCell, Cell, Pagination } = Table

// var person
var members = { members: [] }
// export default function Json() {
//   return (
//     <StaticQuery
//     query={graphql`
//       query ActivityLog {
//         allComponentsJson {
//           edges {
//             node {
//               members {
//                 id
//                 real_name
//                 activity_periods {
//                   start_time
//                   end_time
//                 }
//                 __typename
//                 tz
//               }
//               ok
//               parent {
//                 id
//               }
//             }
//           }
//         }
//       }
//
//
//       `}
//       render={data => (
//         <div>
// <div dangerouslySetInnerHTML={Dataa(data)}></div>
// <div>{data.allComponentsJson.edges[0].node.members[0].real_name}yo</div>
//  <div>{data.allComponentsJson.edges[0].node.members[0].id}yo</div>
//  {members.members.forEach(
//    (member) => (<div>ypyp</div>)
//  )}

// {data.allComponentsJson.edges[0].node.members.map(({ member }) => (
//   console.log(member.id);
//   <div>{member.id}</div>
// )}
//  uppp
// </div>

// function Dataa (data){
//    data.allComponentsJson.edges[0].node.members.forEach(member =>{
//      let real_name= member.real_name
//      console.log(member)
//      console.log("members array before",members);
//      members.members.push(member)
//      console.log("members array later: ",members)
//      return <div>yo000000000</div>
//    })}

// )}/>

// export default function Json() {
//   return (
//     <StaticQuery
//       query={graphql`
//         query ActivityLog {
//           allComponentsJson {
//             edges {
//               node {
//                 members {
//                   id
//                   real_name
//                   activity_periods {
//                     start_time
//                     end_time
//                   }
//                   __typename
//                   tz
//                 }
//                 ok
//                 parent {
//                   id
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={data => (
//         <div>
//
// {data.allComponentsJson.edges[0].node.members.map(({ member }) => (
// <div>yoyo</div>
// )}
//
//         </div>
//       )}
//     />
//   )
// }

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

      <Table
        height={400}
        data={data.allComponentsJson.edges[0].node.members}
        onRowClick={data => {
          console.log(data)
        }}
      >
        <Column width={270} align="left" >
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={270} align="center" >
          <HeaderCell>Real Name</HeaderCell>
          <Cell dataKey="real_name"/>
        </Column>
        <Column width={270} align="right" >
          <HeaderCell>Time Zone</HeaderCell>
          <Cell dataKey="tz" />
        </Column>
      </Table>
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
