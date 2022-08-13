const { ApolloServer } = require("apollo-server")
const resolvers = require("./graphQl/resolver")
const typeDefs = require("./graphQl/schema")
const mongoose = require("mongoose")


const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');
const { db } = require("./config");

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
mongoose.connect(
    db.url, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("data base is connected")
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
})
