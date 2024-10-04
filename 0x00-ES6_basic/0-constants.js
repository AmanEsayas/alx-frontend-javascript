export function taskFirst() {
  const taskFirst = 'I prefer const when I can.';
  return taskFirst;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let taskNext = 'But sometimes let';
  return taskNext + getLast();
}

