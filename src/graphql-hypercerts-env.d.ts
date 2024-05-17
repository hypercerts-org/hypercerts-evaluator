/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "attestations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GetAttestationsResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "count",
                "type": {
                  "kind": "ENUM",
                  "name": "CountKeys",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttestationWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttestationFetchInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "fractions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GetFractionsResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "count",
                "type": {
                  "kind": "ENUM",
                  "name": "CountKeys",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FractionWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "FractionFetchInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Metadata",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "count",
                "type": {
                  "kind": "ENUM",
                  "name": "CountKeys",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MetadataWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MetadataFetchInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contracts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GetContractsResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "count",
                "type": {
                  "kind": "ENUM",
                  "name": "CountKeys",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "BasicContractWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ContractFetchInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "hypercerts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GetHypercertsResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "count",
                "type": {
                  "kind": "ENUM",
                  "name": "CountKeys",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "HypercertsWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "HypercertFetchInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "attestationSchemas",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GetAttestationsSchemaResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "count",
                "type": {
                  "kind": "ENUM",
                  "name": "CountKeys",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttestationSchemaWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AttestationSchemaFetchInput",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GetAttestationsResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Attestation",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Attestation",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "supported_schemas_id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "attestation_uid",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "block_timestamp",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "attester_address",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "recipient_address",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "resolver",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "schema",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "attestation",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "hypercerts",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Hypercert",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "SCALAR",
        "name": "BigInt"
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "SCALAR",
        "name": "JSON"
      },
      {
        "kind": "OBJECT",
        "name": "Hypercert",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "contracts_id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "hypercert_id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "owner_address",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "token_id",
            "type": {
              "kind": "SCALAR",
              "name": "EthBigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "units",
            "type": {
              "kind": "SCALAR",
              "name": "EthBigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "uri",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "attestations",
            "type": {
              "kind": "OBJECT",
              "name": "GetAttestationsResponse",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "contracts",
            "type": {
              "kind": "OBJECT",
              "name": "GetContractsResponse",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "fractions",
            "type": {
              "kind": "OBJECT",
              "name": "GetFractionsResponse",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "OBJECT",
              "name": "GetMetadataResponse",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "EthBigInt"
      },
      {
        "kind": "OBJECT",
        "name": "GetContractsResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Contract",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Contract",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "chain_id",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "contract_address",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "start_block",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "OBJECT",
        "name": "GetFractionsResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Fraction",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Fraction",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "owner_address",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "units",
            "type": {
              "kind": "SCALAR",
              "name": "EthBigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "hypercert_id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GetMetadataResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Metadata",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Metadata",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "uri",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "allow_list_uri",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "contributors",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "external_url",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "impact_scope",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "impact_timeframe_from",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "impact_timeframe_to",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "properties",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "rights",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "work_scope",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "work_timeframe_from",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "work_timeframe_to",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CountKeys",
        "enumValues": [
          {
            "name": "COUNT"
          },
          {
            "name": "HEAD"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AttestationWhereInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IdSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "attestation_uid",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "supported_schemas_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "block_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "attester_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "recipient_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "resolver",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "schema",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "attestation",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "chain_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "contract_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "token_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "attestations",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicAttestationWhereInput",
              "ofType": null
            }
          },
          {
            "name": "hypercerts",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicHypercertWhereInput",
              "ofType": null
            }
          },
          {
            "name": "metadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicMetadataWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IdSearchOptions",
        "inputFields": [
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringSearchOptions",
        "inputFields": [
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NumberSearchOptions",
        "inputFields": [
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BasicAttestationWhereInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IdSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "attestation_uid",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "supported_schemas_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "block_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "attester_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "recipient_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "resolver",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "schema",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "attestation",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "chain_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "contract_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "token_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BasicHypercertWhereInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IdSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "token_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "owner_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "uri",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BasicMetadataWhereInput",
        "inputFields": [
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "uri",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "contributors",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringArraySearchOptions",
              "ofType": null
            }
          },
          {
            "name": "work_scope",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringArraySearchOptions",
              "ofType": null
            }
          },
          {
            "name": "impact_scope",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringArraySearchOptions",
              "ofType": null
            }
          },
          {
            "name": "rights",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringArraySearchOptions",
              "ofType": null
            }
          },
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "work_timeframe_from",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "work_timeframe_to",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "impact_timeframe_from",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "impact_timeframe_to",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringArraySearchOptions",
        "inputFields": [
          {
            "name": "contains",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AttestationFetchInput",
        "inputFields": [
          {
            "name": "by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AttestationSortOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AttestationSortOptions",
        "inputFields": [
          {
            "name": "attestation_uid",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "block_timestamp",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "attester_address",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "recipient_address",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "schema",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "SortOrder",
        "enumValues": [
          {
            "name": "ascending"
          },
          {
            "name": "descending"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FractionWhereInput",
        "inputFields": [
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "token_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "units",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "owner_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "hypercerts",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicHypercertWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FractionFetchInput",
        "inputFields": [
          {
            "name": "by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "FractionSortOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FractionSortOptions",
        "inputFields": [
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "token_id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "units",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "owner_address",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MetadataWhereInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IdSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "token_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "owner_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "uri",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "metadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicMetadataWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MetadataFetchInput",
        "inputFields": [
          {
            "name": "by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "MetadataSortOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MetadataSortOptions",
        "inputFields": [
          {
            "name": "description",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "external_url",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "metadata_id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "uri",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "allow_list_uri",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BasicContractWhereInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IdSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "contract_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "chain_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContractFetchInput",
        "inputFields": [
          {
            "name": "by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContractSortOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContractSortOptions",
        "inputFields": [
          {
            "name": "contract_id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "contract_address",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "chain_id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GetHypercertsResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Hypercert",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HypercertsWhereInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IdSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "token_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "owner_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "uri",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "contracts",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicContractWhereInput",
              "ofType": null
            }
          },
          {
            "name": "metadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicMetadataWhereInput",
              "ofType": null
            }
          },
          {
            "name": "attestations",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicAttestationWhereInput",
              "ofType": null
            }
          },
          {
            "name": "fractions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicFractionWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BasicFractionWhereInput",
        "inputFields": [
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "token_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "units",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "owner_address",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HypercertFetchInput",
        "inputFields": [
          {
            "name": "by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "HypercertSortOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HypercertSortOptions",
        "inputFields": [
          {
            "name": "hypercert_id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "creation_block_timestamp",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "token_id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "units",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "owner_address",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "last_block_update_timestamp",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "uri",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "claim_attestation_count",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GetAttestationsSchemaResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AttestationSchema",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AttestationSchema",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "chain_id",
            "type": {
              "kind": "SCALAR",
              "name": "BigInt",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "eas_schema_id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "resolver",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "revocable",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "schema",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "records",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Attestation",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AttestationSchemaWhereInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IdSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "eas_schema_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "chain_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "resolver",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "schema",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "revocable",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "attestations",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BasicAttestationSchemaWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BooleanSearchOptions",
        "inputFields": [
          {
            "name": "eq",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BasicAttestationSchemaWhereInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "IdSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "eas_schema_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "chain_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NumberSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "resolver",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "schema",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringSearchOptions",
              "ofType": null
            }
          },
          {
            "name": "revocable",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "BooleanSearchOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AttestationSchemaFetchInput",
        "inputFields": [
          {
            "name": "by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "AttestationSchemaSortOptions",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AttestationSchemaSortOptions",
        "inputFields": [
          {
            "name": "eas_schema_id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "chain_id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "resolver",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "revocable",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}