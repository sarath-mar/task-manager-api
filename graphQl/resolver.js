const homeResolver = require("../modules/contents/home/resolver")
const homeSchema = require("../modules/contents/home/schema")
const query=new Array()
const mutation=new Array()
const type=new Array()
query.push(...homeSchema.Query)
const allQyery=query.join("/n")
const resolvers = {
    Query: {
        name: (parent, arg, context, info) => {
console.log(query)
console.log(allQyery)
            return "sarath"
        },
        // ...homeResolver.Query,

    },
    Mutation: {
        ...homeResolver.Mutation
    }
}
module.exports = resolvers