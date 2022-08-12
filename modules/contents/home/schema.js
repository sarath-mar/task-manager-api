module.exports = {
    type: `
       result{
        sum:Int
        comment:String
        }
    `,
    Query: `
        name:String
        age(name:String):String
    `,
    Mutation: `
        addTwoNumber(a:Int b:Int):result
    `


}