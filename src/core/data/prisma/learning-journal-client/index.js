
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DateEntryScalarFieldEnum = {
  id: 'id',
  date: 'date'
};

exports.Prisma.JournalEntryScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  slug: 'slug',
  description: 'description',
  materialId: 'materialId',
  content: 'content',
  dateEntryId: 'dateEntryId'
};

exports.Prisma.MaterialScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  type: 'type',
  content: 'content'
};

exports.Prisma.TagScalarFieldEnum = {
  name: 'name',
  createdAt: 'createdAt',
  slug: 'slug',
  id: 'id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.MaterialType = exports.$Enums.MaterialType = {
  LINK: 'LINK',
  QUOTE: 'QUOTE',
  CODE: 'CODE',
  IMAGE: 'IMAGE'
};

exports.Prisma.ModelName = {
  DateEntry: 'DateEntry',
  JournalEntry: 'JournalEntry',
  Material: 'Material',
  Tag: 'Tag'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\duymi\\Codes\\ledminh.dev.v2\\src\\core\\data\\prisma\\learning-journal-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../../.env",
    "schemaEnvPath": "../../../../../.env"
  },
  "relativePath": "../../../../../prisma",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "LEARNING_JOURNAL_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgID0gIi4uL3NyYy9jb3JlL2RhdGEvcHJpc21hL2xlYXJuaW5nLWpvdXJuYWwtY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJMRUFSTklOR19KT1VSTkFMX0RBVEFCQVNFX1VSTCIpCn0KCgovLy8gVGhpcyBtb2RlbCBjb250YWlucyByb3cgbGV2ZWwgc2VjdXJpdHkgYW5kIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2V0dXAgZm9yIG1pZ3JhdGlvbnMuIFZpc2l0IGh0dHBzOi8vcHJpcy5seS9kL3Jvdy1sZXZlbC1zZWN1cml0eSBmb3IgbW9yZSBpbmZvLgptb2RlbCBEYXRlRW50cnkgewogIGlkICAgICAgICAgICBTdHJpbmcgICAgICAgICBAaWQKICBkYXRlICAgICAgICAgRGF0ZVRpbWUgICAgICAgQHVuaXF1ZSBAZGVmYXVsdChub3coKSkKICBKb3VybmFsRW50cnkgSm91cm5hbEVudHJ5W10KfQoKLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgcm93IGxldmVsIHNlY3VyaXR5IGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9yb3ctbGV2ZWwtc2VjdXJpdHkgZm9yIG1vcmUgaW5mby4KbW9kZWwgSm91cm5hbEVudHJ5IHsKICBpZCAgICAgICAgICBTdHJpbmcgICAgIEBpZAogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgRGF0ZVRpbWUKICB0aXRsZSAgICAgICBTdHJpbmcKICBzbHVnICAgICAgICBTdHJpbmcgICAgIEB1bmlxdWUKICBkZXNjcmlwdGlvbiBTdHJpbmcKICBtYXRlcmlhbElkICBTdHJpbmcgICAgIEB1bmlxdWUKICBjb250ZW50ICAgICBTdHJpbmcKICBkYXRlRW50cnlJZCBTdHJpbmc/CiAgRGF0ZUVudHJ5ICAgRGF0ZUVudHJ5PyBAcmVsYXRpb24oZmllbGRzOiBbZGF0ZUVudHJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIE1hdGVyaWFsICAgIE1hdGVyaWFsICAgQHJlbGF0aW9uKGZpZWxkczogW21hdGVyaWFsSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIFRhZyAgICAgICAgIFRhZ1tdCn0KCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIHJvdyBsZXZlbCBzZWN1cml0eSBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2Qvcm93LWxldmVsLXNlY3VyaXR5IGZvciBtb3JlIGluZm8uCm1vZGVsIE1hdGVyaWFsIHsKICBpZCAgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQKICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgICAgICBAZGVmYXVsdChub3coKSkKICB0eXBlICAgICAgICAgTWF0ZXJpYWxUeXBlCiAgY29udGVudCAgICAgIFN0cmluZwogIEpvdXJuYWxFbnRyeSBKb3VybmFsRW50cnk/Cn0KCi8vLyBUaGlzIG1vZGVsIGNvbnRhaW5zIHJvdyBsZXZlbCBzZWN1cml0eSBhbmQgcmVxdWlyZXMgYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9ucy4gVmlzaXQgaHR0cHM6Ly9wcmlzLmx5L2Qvcm93LWxldmVsLXNlY3VyaXR5IGZvciBtb3JlIGluZm8uCm1vZGVsIFRhZyB7CiAgbmFtZSAgICAgICAgIFN0cmluZyAgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpCiAgc2x1ZyAgICAgICAgIFN0cmluZyAgICAgICAgIEB1bmlxdWUKICBpZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgQGlkCiAgSm91cm5hbEVudHJ5IEpvdXJuYWxFbnRyeVtdCn0KCmVudW0gTWF0ZXJpYWxUeXBlIHsKICBMSU5LCiAgUVVPVEUKICBDT0RFCiAgSU1BR0UKfQo=",
  "inlineSchemaHash": "7356b8dd34e1c93dfcd64ed6a504f2a3f45d3c08b210eb4ab62f10e2d42024f0",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/core/data/prisma/learning-journal-client",
    "core/data/prisma/learning-journal-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"DateEntry\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JournalEntry\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JournalEntry\",\"relationName\":\"DateEntryToJournalEntry\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.\"},\"JournalEntry\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"materialId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateEntryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DateEntry\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateEntry\",\"relationName\":\"DateEntryToJournalEntry\",\"relationFromFields\":[\"dateEntryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Material\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Material\",\"relationName\":\"JournalEntryToMaterial\",\"relationFromFields\":[\"materialId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tag\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tag\",\"relationName\":\"JournalEntryToTag\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.\"},\"Material\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MaterialType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JournalEntry\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JournalEntry\",\"relationName\":\"JournalEntryToMaterial\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.\"},\"Tag\":{\"dbName\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JournalEntry\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JournalEntry\",\"relationName\":\"JournalEntryToTag\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.\"}},\"enums\":{\"MaterialType\":{\"values\":[{\"name\":\"LINK\",\"dbName\":null},{\"name\":\"QUOTE\",\"dbName\":null},{\"name\":\"CODE\",\"dbName\":null},{\"name\":\"IMAGE\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/core/data/prisma/learning-journal-client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/core/data/prisma/learning-journal-client/schema.prisma")
