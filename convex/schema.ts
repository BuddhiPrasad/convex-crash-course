import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema ({
    user : defineTable({
        first_name: v.string(),
        last_name: v.string(),
        age: v.number(),
        marride: v.boolean(),
    }),
    Address : defineTable({
        city: v.string(),
        postal_code: v.number(),
        country : v.string(),
    }),
});