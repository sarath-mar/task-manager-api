const { gql } = require("apollo-server")

const homeSchema = require("../modules/contents/home/schema")
const textSchema = require("../modules/contents/text/schema")


// ................
const schemas = new Array()
schemas.push(homeSchema)
schemas.push(textSchema)

// ------------------
const query = new Array()
const type = new Array()
const mutation = new Array()
for (let schema of schemas) {
    if (schema.Query) {
        query.push(schema.Query)
    }
    if (schema.Mutation) {
        mutation.push(schema.Mutation)
    }
    if (schema.type) {
        type.push(schema.type)
    }
}
const typeDefs = gql`
type Query{
  ${query}
}
type ${type}
type Mutation{
    ${mutation}
}
`
module.exports = typeDefs