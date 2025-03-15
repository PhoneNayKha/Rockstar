const jwt = require("jsonwebtoken");
const user = { id: 1, name: "John Doe", password: "password" };

const secret = "sfji2u1294309#$$";
const token = jwt.sign(user, secret);
// console.log(token);

const output =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTc0MTUxMjQyOX0.0ipwrRU-Q4cEJCsmWYqQvRzlH73fLnRIc5KQTrJbtXE";

console.log(jwt.decode(output, secret));
