import { timestamps } from '@/lib/utils';
import { relations } from 'drizzle-orm';
import type { AdapterAccountType } from 'next-auth/adapters';
import {
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar
} from 'drizzle-orm/pg-core';
export const userRoleEnum = pgEnum('user_role', [
  'ADMIN',
  'WHEREHOUSE_WORKER',
  'VIEWER',
  'MAINTENANCE',
  'SUPERVISOR',
  'MANAGER',
  'INVENTORY_MANAGER'
]);

export const userTable = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  role: userRoleEnum('role').notNull().default('VIEWER'),
  ...timestamps
});

export const loginLogTable = pgTable('login_logs', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id')
    .references(() => userTable.id)
    .notNull(),
  loginAt: timestamp('login_at').notNull().defaultNow()
});

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => userTable.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state')
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId)
  })
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull()
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(userTable, {
    fields: [sessions.userId],
    references: [userTable.id]
  })
}));
