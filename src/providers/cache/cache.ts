import { Cache, createCache } from "cache-manager";
import { redisStore } from "cache-manager-ioredis-yet"
import { env } from "../../utils/env";

export let cache: Cache;
export async function initCache() {
    try {
        const store = await redisStore({
            host: env.REDIS_HOST,
            port: env.REDIS_PORT,
            password: env.REDIS_PASSWORD
        })
        cache = createCache(store);
        console.log("Cache initialized");
    } catch (error) {
        console.log(error);
    }
}
