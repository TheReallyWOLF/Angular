function f(...arg: number[]): number {
  return arg.reduce((acc, item) => {
    return acc + item;
  }, 0);
}
