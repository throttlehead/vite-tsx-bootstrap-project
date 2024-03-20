function isSubset(subset: any[], superset: any[]) {
  for (let element of subset) {
    if (!superset.includes(element)) {
      return false;
    }
  }
  return true;
}

export default isSubset;
