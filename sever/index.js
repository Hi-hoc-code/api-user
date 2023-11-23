// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "user",
//   password: "mysecretpassword",
//   port: 5432,
// });

// module.exports = { pool };
const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString:
  "postgresql://Hi-hoc-code:1qQbdPvcDWK5@ep-lucky-voice-99485450.ap-southeast-1.aws.neon.tech/users?sslmode=require",
  ssl: {
    require: true,
  },
});

module.exports = { pool };