
const typeDefs = `
type User {
    name: String!
    roles: [HAS_ROLE]
}  

type Role {
    type: String!
    user: HAS_ROLE
    requests: [CREATES]
    approves: [APPROVES]
    memberOf: [MEMBER_OF]
}

type GenomicFile {
    type: String!
    curator: CURATES
    processedBy: [PROCESSED]
    requested: [REQUESTED_DATA]
}

type Lab {
    name: String!
    curatedFiles: [CURATES]
    members: [MEMBER_OF]
}

type REQUEST {
    dateTime: String!
    createdBy: CREATES
    approvedBy: APPROVES
    requestedData: [REQUESTED_DATA]
}

type MACHINE {
    type: String!
    files: [PROCESSED]
}

type HAS_ROLE @relation(name: "HAS_ROLE") {
    from: User
    to: Role
    dateTime: DateTime
}

type APPROVES @relation(name: "APPROVES") {
    from: Role
    to: REQUEST
    dateTime: DateTime
}
type CREATES @relation(name: "CREATES") {
    from: Role
    to: REQUEST
    dateTime: DateTime
}

type CURATES @relation(name: "CURATES") {
    from: Lab
    to: GenomicFile
    dateTime: DateTime
}
type MEMBER_OF @relation(name: "MEMBER_OF") {
    from: Role
    to: Lab
    dateTime: DateTime
}
type PROCESSED @relation(name: "PROCESSED") {
    from: MACHINE
    to: GenomicFile
    dateTime: DateTime
}
type REQUESTED_DATA @relation(name: "REQUESTED_DATA") {
    from: REQUEST
    to: GenomicFile
    dateTime: DateTime
}

`;

module.exports = typeDefs;