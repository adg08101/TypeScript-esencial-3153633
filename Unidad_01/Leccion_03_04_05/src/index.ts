function sumWithOptions(n: number | number[], total?: number): number | never {
  if (Array.isArray(n) && n.length > 0) {
    return n.reduce((counter, nextValue) => counter + nextValue, 0) / n.length;
  } else if (total && typeof n === "number") {
    return n / total;
  }
  throw Error("Error found");
}
try {
  console.log(sumWithOptions([]));
  console.log(sumWithOptions([1, 2, 34, 5], 10));
  console.log(sumWithOptions(34, 10));
  console.log(sumWithOptions([1, 2, 34, 5]));
  console.log(sumWithOptions([]));
} catch (e: unknown) {
  console.log(e);
}
