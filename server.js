import express from "express";
import { events, eventMap } from "./src/data/events.js";
import {
  renderDetailPage,
  renderHomePage,
  renderNotFoundPage
} from "./src/lib/render.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.status(200).send(renderHomePage(events));
});

app.get("/events/:slug", (req, res, next) => {
  const event = eventMap.get(req.params.slug);
  if (!event) {
    return next();
  }
  return res.status(200).send(renderDetailPage(event));
});

app.use((_req, res) => {
  res.status(404).send(renderNotFoundPage());
});

app.listen(PORT, () => {
  console.log(`SoundScout server running at http://localhost:${PORT}`);
});
