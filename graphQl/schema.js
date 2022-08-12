const { gql } = require("apollo-server")
const homeSchema = require("../modules/contents/home/schema")
const schemas=new Array()
schemas.push(homeSchema)
const query=new Array()
const type=new Array()
const mutation=new Array()
// for(let schema of schemas){
//     if(schema.Query){
//         query.pu
//     }
// }
const typeDefs = gql`
type Query{
  ${homeSchema.Query}
}
type ${homeSchema.type}
type Mutation{
    ${homeSchema.Mutation}
}
`
module.exports = typeDefs

// const typeDefs = gql`
// type Query{
//   ${homeSchema.Query}
// }
// type result{
//     sum:Int
//     comment:String
// }
// type Mutation{
//     addTwoNumber(a:Int b:Int):result
// }
// `