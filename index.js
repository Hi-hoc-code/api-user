const express = require("express");
const { pool } = require("./sever");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { uploadImageSingle } = require("./service/multer");
const { cloudinary } = require("./service/cloundinary");

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/user", (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
});

app.post("/user", (request, response) => {
  const { name, email } = request.body
  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
});

app.post(
  "/user/add-img/:id",
  uploadImageSingle().single("image"),
  async (request, response) => {

    const { file } = request;
    const { id } = request.params;
    const result = await cloudinary.uploader.upload(file.path, () => { }, {
        resource_type: "auto",
        folder: "Poster",
        use_filename: true
    });
    pool.query(
        "update users set avatar = $1 where id = $2",
        [ result.url, id],
        (error, results) => {
          if (error) {
            throw error;
          }
          response.status(201).json({
            messsage: "THanh cong",
          });
        }
      );
  }
);
app.listen(process.env.PORT || port, () => {
  console.log(`App running on port ${port}`);
});


