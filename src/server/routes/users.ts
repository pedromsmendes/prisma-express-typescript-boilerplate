import db from '@/db';
import { Request, Response } from 'express';

const getUsers = async (_req: Request, res: Response) => {
  const users = await db.userExample.findMany();

  return res.send(`
  <html>
    <head>
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }

        th,td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid black;
        }
      </style>
    </head>

    <body>
      <table>
        <thead>
          <th>
            ID
          </th>
          <th>
            NAME
          </th>
          <th>
            CREATED AT
          </th>
        </thead>

        <tbody>
          ${users.map((user) => (`
            <tr>
              <td>
                ${user.id}
              </td>
              <td>
                ${user.name}
              </td>
              <td>
                ${new Date(user.createdAt).toLocaleString('pt')}
              </td>
            </tr>
          `))}
        </tbody>
      </table>
    </body>
  </html>
  `);
};

export default getUsers;
