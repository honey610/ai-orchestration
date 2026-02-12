import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import generateRoute from './routes/generate.route.js';
import rollBackRoute from './routes/rollBackRoute.js';
import historyRoute from './routes/history.routes.js';

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/generate",generateRoute);
app.use("/api/rollback", rollBackRoute);
app.use("/api/history", historyRoute);



app.listen(5000, () => {
  console.log("Server running on port 5000");
});