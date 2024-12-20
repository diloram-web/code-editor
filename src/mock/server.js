import { createServer } from 'miragejs';

export function makeServer() {
  createServer({
    routes() {
      this.post('/api/execute', (schema, request) => {
        const { language, code } = JSON.parse(request.requestBody);

        if (code.includes('error')) {
          return {
            status: 'error',
            error: 'SyntaxError: Unexpected token',
          };
        }

        return {
          status: 'success',
          output: `Executed code in ${language}: ${code}`,
        };
      });
    },
  });
}
