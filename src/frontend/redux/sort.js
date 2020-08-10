export function compare(a, b) {
  if (a.filename < b.filename) {
    return -1;
  }
  if (a.filename > b.filename) {
    return 1;
  }
  return 0;
}

export function compareTimestamp(a, b) {
  if (a.lastModified < b.lastModified) {
    return -1;
  }
  if (a.lastModified > b.lastModified) {
    return 1;
  }
  return 0;
}

export function compareSize(a, b) {
  if (a.size < b.size) {
    return -1;
  }
  if (a.size > b.size) {
    return 1;
  }
  return 0;
}
