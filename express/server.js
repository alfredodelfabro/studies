import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import posts from './routes/posts.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Body parser middleware
app.use(express.json());
// Allow sending data from a form
app.use(express.urlencoded({ extended: false }));
// Logger middleware
app.use(logger);

// set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

// Error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => { console.log(`Server is running on port ${port}`); })