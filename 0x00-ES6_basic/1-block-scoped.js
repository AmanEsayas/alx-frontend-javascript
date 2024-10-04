export default function taskBlock(trueOrFalse) {
  const task = false;
  let taskNext = true;

  if (trueOrFalse) {
    const taskFirst = true;
    taskNext = false;
  }

  return [task, taskNext];
}

