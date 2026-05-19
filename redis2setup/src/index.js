import express form "express";
import Redis form "ioredis";
import mongoose form "mongoose";
const app = express();
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
app.get("/redis", async(req,res))