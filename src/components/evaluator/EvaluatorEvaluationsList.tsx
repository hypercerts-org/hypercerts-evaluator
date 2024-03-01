import AttestationCard from "../attestation-card/AttestationCard";
import EvaluatorEvaluationsListSkeleton from "./EvaluatorEvaluationsListSkeleton";
import { Grid } from "@chakra-ui/react";
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

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={5}>
      {data?.attestations.map((attestationFragment, i) => (
        <AttestationCard key={i} data={attestationFragment} />
      ))}
    </Grid>
  );
}
