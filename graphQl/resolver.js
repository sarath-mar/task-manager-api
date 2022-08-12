const homeResolver = require("../modules/contents/home/resolver")
const textResolver = require("../modules/contents/text/resolver")

// ----------------
let allResolvers = new Array

allResolvers.push(homeResolver)

// ------------------
let query = new Array()
let mutation = new Array()
for (let resolver of allResolvers) {
    if (resolver.Query) {
        query.push({ ...resolver.Query })
    }
    if (resolver.Mutation) {
        mutation.push({ ...resolver.Mutation })
    }

}
const resolvers = {
    Query: {
        ...query[0]
    }
    ,
    Mutation: {
        ...mutation[0]
    }
}
module.exports = resolvers