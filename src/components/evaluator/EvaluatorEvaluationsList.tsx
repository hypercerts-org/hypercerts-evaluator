import EvaluatorEvaluationsListItem from "./EvaluatorEvaluationsListItem";
import EvaluatorEvaluationsListSkeleton from "./EvaluatorEvaluationsListSkeleton";
import { Grid } from "@chakra-ui/react";
import { attestationCardFragment } from "../../eas/fragments/attestation-card.fragment";
import { gridCardBorder } from "../../utils/gridCardBorder";
import { readFragment } from "gql.tada";
import { useEvaluatorAttestations } from "../../eas/useEvaluatorAttestations";

export default function EvaluatorEvaluationsList({
  address,
}: {
  address: string;
}) {
  const { data, isPending, error } = useEvaluatorAttestations(address);

  if (isPending) {
    return <EvaluatorEvaluationsListSkeleton />;
  }

  if (error) {
    console.error(error);
    return <div>Error loading evaluations</div>;
  }

  if (!data?.attestations.length) {
    return <div>No evaluations found.</div>;
  }

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      border="1px solid black"
      className="evaluations-list"
    >
      {data?.attestations.map((attestation, i) => {
        const _attestation = readFragment(attestationCardFragment, attestation);
        if (!attestation) return null;
        const attestationData = JSON.parse(_attestation.decodedDataJson);

        return (
          <EvaluatorEvaluationsListItem
            key={i}
            created={_attestation.timeCreated}
            data={attestationData}
            style={gridCardBorder(i, data.attestations.length)}
          />
        );
      })}
    </Grid>
  );
}
