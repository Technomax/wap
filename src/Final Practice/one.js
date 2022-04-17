async function thisThrows() {
  throw new Error("Thrown from thisThrows()");
}
async function run() {
  try {
    await thisThrows();
  } catch (e) {
    console.log("Caught the error....");
    console.error(e);
  } finally {
    console.log("We do cleanup here");
  }
}
run();
