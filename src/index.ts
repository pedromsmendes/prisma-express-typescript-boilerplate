import 'reflect-metadata';
import type { Server } from 'http';

import { API_PORT } from '@/globals';
import express from '@/server';
import db from '@/db';

let server: Server;

const main = async () => {
  ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException']
    .forEach((eventType) => {
      process.on(eventType, async () => {
        if (db) {
          await db.$disconnect();
        }
        if (server) {
          server.close();
        }

        process.exit();
      });
    });

  server = express.listen(API_PORT, async () => {
    console.log('Server listening on ', API_PORT);
  });
};

main()
  .catch((PROGRAM_ERROR) => console.trace(new Error(PROGRAM_ERROR)));
