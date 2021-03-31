import 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = process.env.PORT || '5000';

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    console.log(request);
  },
);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
