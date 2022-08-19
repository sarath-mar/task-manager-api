const { gql } = require("apollo-server")

const teamMemberSchema = require("../modules/contents/team_member/team_member_schema")


// ................
const schemas = new Array()

schemas.push(teamMemberSchema)

// ------------------
const query = new Array()
const type = new Array()
const input = new Array()
const mutation = new Array()
for (let schema of schemas) {
    // console.log(typeof (schema.type))
    if (schema.type) {
        type.push(schema.type)
    }
    if (schema.input) {
        input.push(schema.input)
    }
    // if (schema.type.trim() !== '') {
    //     console.log("hey1")
    // }
    // console.log("helooi")
    if (schema.Query) {
        query.push(schema.Query)
    }
    if (schema.Mutation) {
        mutation.push(schema.Mutation)
    }

}
// console.log(type)
// console.log(query)
// console.log(input)

const typeDefs = gql`
 
 ${type}
   

type Query{
  ${query}
}
type Mutation{
    ${mutation}
}
`
module.exports = typeDefs