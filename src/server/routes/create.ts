import db from '@/db';
import { Request, Response } from 'express';
import names from '../../names';

const create = async (_req: Request, res: Response) => {
  const randomName = names[Math.floor(Math.random() * names.length)];

  const newUser = await db.userExample.create({ data: { name: randomName } });

  return res.send(`
  <html>
    <head>
    </head>

    <body>
      <h2>New user "${newUser.name}" created.</h2>
      <a href="/users">Go to /users to check them out</a>
    </body>
  </html>
  `);
};

export default create;
