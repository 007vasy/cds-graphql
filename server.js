
const {ApolloServer} = require('apollo-server');
const neo4j = require('neo4j-driver');
const {makeAugmentedSchema} = require('neo4j-graphql-js');
const typeDefs = require('./typeDefs');
const result = require('dotenv').config()
 
if (result.error) {
  console.log(">>> Use .env-template to create your .env file with the correct values!")
  throw result.error
}

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
  process.env.NEO4J_URL || 'bolt://localhost:7687',
  neo4j.auth.basic(process.env.NEO4J_USER || 'neo4j', process.env.NEO4J_PASS || 'letmein')
);

const server = new ApolloServer({ schema, context: { driver } });

server.listen(process.env.GRAPHQL_PORT || 3003, '0.0.0.0').then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});