module.exports = {
    type: `
        input NameInput{
           first:String
           last:String
        }
        input PageInput{
           limit:Int
           skip:Int
        }
        input TeamMemberInput{
            name:String
            designation: String
        }
        type Name{
            first:String
            last:String
        }
        type TeamMember{
           name:Name
           designation: String
        }
        type TeamMembersList{
            teamMembers:TeamMember
            totalCount:Int
        }
    `,
    Query: `
        teamMembers(input:PageInput):TeamMembersList
    `,
    Mutation: `
        createTeamMember(input:TeamMemberInput)
    `


}