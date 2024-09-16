const fibonacci = (num) => {
  if (num <= 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }

  const node = fibonacci(num - 1);
  return [...node, node[node.length - 1] + node[node.length - 2]];
};
