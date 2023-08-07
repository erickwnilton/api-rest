import { api } from "./config.js";
import { app, startDatabase } from "./app.js";

const port = api.api.port

app.listen(port, async () => {
  await startDatabase();
  console.log(`Server started on port ${port}`)
})