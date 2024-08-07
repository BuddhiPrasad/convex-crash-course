import { v } from "convex/values";
import { mutation, query } from "./_generated/server";



export const getuser = query({
    args :{},
    handler: async(ctx, args) => {
        const user = await ctx.db.query('user').collect();
        return user;
    },
});

export const createuser = mutation({
    args: {
        first_name: v.string(),
        last_name: v.string(),
        age: v.number(),
    },
    handler: async(ctx, args) => {
        const userID = await ctx.db.insert('user',{first_name: args.first_name, last_name: args.last_name, age: args.age, marride:false});
        return userID;
    },
});


export const updateuser = mutation({
    args: {
        id: v.id('user'),
        first_name: v.string(),
        last_name : v.string(),
        age : v.number(),
    },
    handler: async(ctx, args) => {
        await ctx.db.patch(args.id, {first_name: args.first_name, last_name: args.last_name, age: args.age, marride:true});
    },
});

export const deleteuser = mutation ({
    args: {
        id: v.id('user'),
    },
    handler: async(ctx, args) => {
        await ctx.db.delete(args.id);
    },
});