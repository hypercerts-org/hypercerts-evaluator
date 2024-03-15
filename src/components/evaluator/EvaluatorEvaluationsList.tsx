import AttestationCard from "../attestation-card/AttestationCard";
import EvaluatorEvaluationsListSkeleton from "./EvaluatorEvaluationsListSkeleton";
import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
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

  const cardBorder = (index: number, length: number) => {
    let styles: {
      borderBottom?: string;
      borderRight?: string;
    } = { borderBottom: "1px solid black" }; // All rows get bottom border by default
    if (index % 2 === 0) {
      // Odd rows in zero-indexed system are even numbers
      styles.borderRight = "1px solid black"; // Odd rows get right border
    }
    if (
      (length % 2 === 0 && index >= length - 2) || // If even number of rows, last two rows get no bottom border
      (length % 2 !== 0 && index === length - 1)
    ) {
      // If odd number of rows, last row gets no bottom border
      delete styles.borderBottom;
    }
    return styles;
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      border="1px solid black"
      className="evaluations-list"
    >
      {data?.attestations.map((attestationFragment, i) => (
        <AttestationCard
          key={i}
          data={attestationFragment}
          style={cardBorder(i, data.attestations.length)}
        />
      ))}
    </Grid>
  );
}
