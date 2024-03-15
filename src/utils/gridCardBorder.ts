export function gridCardBorder(index: number, length: number) {
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
}
