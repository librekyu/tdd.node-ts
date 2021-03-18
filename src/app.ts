import 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { HTTP_METHOD, HTTP_STATUS_CODE } from './container/common/common.type';

const port = process.env.PORT || '5000';

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    if (request.method === HTTP_METHOD.GET) {
      response.statusCode = HTTP_STATUS_CODE.NotFound;
      response.end();
    }
  },
);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
