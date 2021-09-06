export default function makeGraph(percentage: number): string {
  const completeBar = new Array(25 + 1).join("█");
  const uncompleteBar = new Array(25 + 1).join("░");


  const bar =
    completeBar.substring(0, Math.round(percentage / 100 * 25)) +
    uncompleteBar.substring(0, Math.round((1.0 - percentage / 100) * 25));
  
  return bar.substr(0, 25);
}

