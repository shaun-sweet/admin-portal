import './config';
import { createServer } from './createServer';

console.log('sup');
const server = createServer();
server.start(
  {
    port: process.env.PORT || 4444,
    cors: {
      credentials: true,
      origin: process.env.UI_URL || "http://localhost:3000",
    },
  },
  (deets) => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  },
);
