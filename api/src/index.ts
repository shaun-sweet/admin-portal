import './config';
import { createServer } from './createServer';

console.log('sup');
const server = createServer();
server.start(
  {
    port: process.env.PORT,
    cors: {
      credentials: true,
      origin: process.env.UI_URL,
    },
  },
  (deets) => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  },
);
