// always use it in external calls

try {
  console.log("x");
} catch (e) {
  console.log(e);
}

// throw allows you to create custom error message
// with throw you can control program flow & raise custom errors

try {
  if (x > 20) {
    throw "too high";
  }
} catch (e) {
  return e;
}
// finally lets you execute code after try & catch, regardless of the result.

try {
  if (x > 20) {
    throw "too high";
  }
} catch (e) {
  return e;
} finally {
  // block of code to be executed regardless of result of try/ catch
}
