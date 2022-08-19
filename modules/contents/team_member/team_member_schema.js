module.exports = {
    type: `
     type FullName {
        first:String
        last:String
     }
     type TeamMember {
        name:FullName
        designation:String
     }
     type TeamMemberList{
           teamMember:TeamMember
           totalCount:Int
     }
    input TeamMemberInput {
        name:FullNameInput
        designation:String
     }
    input FullNameInput {
        first:String
        last:String
       }
    input PageInput {
        skip:Int
        limit:Int
       }
    `,

    Query: `
       getAllTeamMember(input:PageInput):TeamMemberList
       getATeamMember(id:ID!):TeamMember
    `,
    Mutation: `
        addTeamMember(input:TeamMemberInput):String
    `


}