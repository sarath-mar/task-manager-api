const { ApolloServer} = require("apollo-server")
const resolvers = require("./graphQl/resolver")
const typeDefs = require("./graphQl/schema")

const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,

    cache: 'bounded',
    // introspection: true,
    context: (req, res) => { return req },
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});