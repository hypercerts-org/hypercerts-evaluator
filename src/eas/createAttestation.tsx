import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { EVALUATIONS_SCHEMA, EVALUATIONS_SCHEMA_UID } from "../config";

import { AllEvaluationStates } from "./all-evaluation-states";
import { JsonRpcSigner } from "@ethersproject/providers";
import { getEasConfig } from "./getEasConfig";

export async function createAttestation({
  chainId,
  signer,
  claimId,
  allEvaluationStates,
  comments,
}: {
  chainId: number;
  signer: JsonRpcSigner;
  claimId: string;
  allEvaluationStates: AllEvaluationStates;
  comments: string;
}) {
  const easConfig = getEasConfig(chainId);
  if (!easConfig) {
    throw new Error("EAS config not found");
  }

  // Initialize EAS API with the EAS contract address
  const eas = new EAS(easConfig.address);
  eas.connect(signer);

  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder(EVALUATIONS_SCHEMA);

  // Encode the data according to schema
  const encodedData = schemaEncoder.encodeData([
    { name: "hypercert_id", value: claimId, type: "string" },
    {
      name: "evaluate_basic",
      value: allEvaluationStates.basics,
      type: "bytes32",
    },
    { name: "evaluate_work", value: allEvaluationStates.work, type: "bytes32" },
    {
      name: "evaluate_contributors",
      value: allEvaluationStates.contributors,
      type: "bytes32",
    },
    {
      name: "evaluate_properties",
      value: allEvaluationStates.properties,
      type: "bytes32",
    },
    { name: "comments", value: comments, type: "string" },
    { name: "tags", value: [], type: "string[]" },
  ]);

  const tx = await eas.attest({
    schema: EVALUATIONS_SCHEMA_UID,
    data: {
      recipient: "0x0000000000000000000000000000000000000000",
      expirationTime: BigInt(0),
      revocable: false,
      data: encodedData,
    },
  });
  return tx.wait();
}
