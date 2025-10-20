import { integer, pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";

// Decks table - each deck belongs to a user and contains multiple cards
export const decksTable = pgTable("decks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: text(),
  userId: varchar({ length: 255 }).notNull(), // Clerk user ID
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

// Cards table - each card belongs to a deck and has front/back content
export const cardsTable = pgTable("cards", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  deckId: integer().notNull().references(() => decksTable.id, { onDelete: "cascade" }),
  front: text().notNull(), // Front side of the card (e.g., "Dog" or "When was the battle of Hastings?")
  back: text().notNull(), // Back side of the card (e.g., "Anjing" or "1066")
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});
