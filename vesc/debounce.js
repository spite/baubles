const queue = new Set();

function debounce(fn) {
  let queued = false;
  return () => {
    if (!queue.has(fn)) {
      queue.add(fn);
      queued = true;
    }
  };
}

function processQueue() {
  const fns = Array.from(queue.values());
  queue.clear();
  if (fns.length) {
    console.log(fns);
  }
  for (const fn of fns) {
    fn();
  }
  requestAnimationFrame(processQueue);
}

processQueue();

export { debounce };
