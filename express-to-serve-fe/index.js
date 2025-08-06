import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";

app.use(
  express.static(
    path.join(
      path.dirname(fileURLToPath(import.meta.url)),
      "../",
      "fe-to-be-served"
    )
  )
);

app.listen(3000, () => {
  console.log(import.meta.url); // file:///C:/Users/Manoj/Desktop/serve-static-files/express-to-serve-fe/index.js
  console.log(fileURLToPath(import.meta.url)); // C:\Users\Manoj\Desktop\serve-static-files\express-to-serve-fe\index.js
  console.log(path.dirname(fileURLToPath(import.meta.url))); // C:\Users\Manoj\Desktop\serve-static-files\express-to-serve-fe
  console.log(
    path.join(
      path.dirname(fileURLToPath(import.meta.url)),
      "../",
      "fe-to-be-served"
    )
  ); // C:\Users\Manoj\Desktop\serve-static-files\fe-to-be-served
  console.log("app is listening on port ", 3000);
});
