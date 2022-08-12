module.exports = {
    Query: {
        name: (parent, arg, context, info) => {

            return "sarath"
        },
        age: (parent, arg, context, info) => {

            return arg.name
        }
    },
    Mutation: {
        addTwoNumber: (parent, arg, context, info) => {
            let sum = arg.a + arg.b
            let comment = "helloo addded"
            return {
                sum,
                comment
            }
        }
    }
}
