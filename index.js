const {ApolloServer, gql } = require('apollo-server');

// Define my GraphQL schema 
const typeDefs = gql'
type Startup { 
    name: String
    description: String 
    founder: String
    FoundedYear: Int
}

type Query {
    startups: [Startup]
}

//Hardcoded array of startups 
const startups = [
{name: 'Startup A', description: 'Description of Startup A', foundedYear: 2020},
{name: 'Startup B', description: 'Description of Startup B', foundedYear: 2021},
{name: 'Startup C', description: 'Description of Startup C', foundedYear: 2019},
]

// Define resolvers to connect the schema to actual data 
const server = {
    Query: {
        startups: () => startups,
    }
}

const server = new ApolloServer({ typeDefs, resolvers});

//Start the server 
server.listen().then(({ url })) => {
    console.log(Server ready at ${url'} );
});