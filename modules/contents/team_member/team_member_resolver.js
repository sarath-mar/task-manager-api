module.exports = {
    Query: {
        getAllTeamMember: (parent, arg, context, info) => {

            return "sarath"
        },
        getATeamMember: (parent, arg, context, info) => {

            return "sarath"
        },
    },
    Mutation: {
        addTeamMember: (parent, arg, context, info) => {
            let sum = arg.a + arg.b
            let comment = "helloo addded"
            return {
                sum,
                comment
            }
        }
    }
}
