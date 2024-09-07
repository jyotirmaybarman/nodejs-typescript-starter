import app from "./app";
import { initCache } from "./providers/cache/cache";
import dataSource from "./providers/db/typeorm.data-source";
import { env } from "./utils/env";

/** DB initialization */
dataSource
.initialize()
.then(() => { console.log("Database connected")})
.catch((error) => console.log(error));

/** Cache initialization */
initCache();

app.listen(env.PORT, () => {
  console.log("listening on http://localhost:" + env.PORT);
});
