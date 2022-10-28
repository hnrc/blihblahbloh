(async () => {
  while (true) {
    console.log(`Hello, Worker! [env=${process.env.ENV ?? 'unknown'}]`, new Date().toString());
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
})();