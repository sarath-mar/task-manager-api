module.exports = {
    Query: {
        // name: (parent, arg, context, info) => {

        //     return "sarath"
        // },
        aged: (parent, arg, context, info) => {

            return arg.one
        }
    },
    Mutation: {
        addaNumber: (parent, arg, context, info) => {
            let sum = arg.a + arg.b
            let comment = "helloo addded"
            return {
                sum,
                comment
            }
        }
    }
}
