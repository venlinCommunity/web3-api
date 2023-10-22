import express from "express";
import { readFileSync } from "fs";

const app = express();
const PORT = 4321;

const participants = JSON.parse(readFileSync("participants.json", "utf8"));

app.use("/kzg", async (req, res) => {
  const { address } = req.query;
  if (address && typeof address === "string") {
    const find = participants.find((item) =>
      item.toLowerCase().endsWith(address.toLowerCase())
    );
    if (find) {
      res.json({
        data: find,
      });
    } else {
      res.json({
        data: '',
      });
    }
  } else {
    res.json({
      data: '',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
