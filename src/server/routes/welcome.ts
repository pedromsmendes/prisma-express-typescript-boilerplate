import { Request, Response } from 'express';

const welcome = (_req: Request, res: Response) => res.send(`
  <html>
    <head>
    </head>

    <body>
      <a href="/create">Go to /create to create a new random user</a>
      <br>
      <a href="/users">Go to /users to check created users</a>
    </body>
  </html>
`);

export default welcome;
