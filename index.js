const {ApolloServer,gql} = require("apollo-server")

const typeDefs=gql`
type Query{
    name:String
}
`
const resolvers={
    Query:{
        name:()=>{
            return "sarath"
        }
    }
}
const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });