import express from "express";
import { getAllEvents, getEventBySlug } from "./src/lib/event-store.js";
import {
  renderDetailPage,
  renderHomePage,
  renderNotFoundPage
} from "./src/lib/render.js";
import { verifyDatabaseConnection } from "./src/lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", async (_req, res, next) => {
  try {
    const events = await getAllEvents();
    res.status(200).send(renderHomePage(events));
  } catch (error) {
    next(error);
  }
});

app.get("/events/:slug", async (req, res, next) => {
  try {
    const event = await getEventBySlug(req.params.slug);
    if (!event) {
      return next();
    }

    return res.status(200).send(renderDetailPage(event));
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).send("Internal server error");
});

app.use((_req, res) => {
  res.status(404).send(renderNotFoundPage());
});

async function startServer() {
  await verifyDatabaseConnection();

  app.listen(PORT, () => {
    console.log(`SoundScout server running at http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start SoundScout.");
  console.error(error);
  process.exit(1);
});
