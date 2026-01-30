import express from 'express';
import sqlite, { type Database } from 'better-sqlite3';
import cors from 'cors';

import { DUMMY_NEWS } from '../dummy-news';

type NewsRow = {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
  image: string;
};

const db: Database = sqlite('data.db');

function initDb(): void {
  db.prepare(
    'CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)'
  ).run();

  const { count } = db.prepare('SELECT COUNT(*) as count FROM news').get() as {
    count: number;
  };

  if (count === 0) {
    const insert = db.prepare(
      'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
    );

    DUMMY_NEWS.forEach((news) => {
      insert.run(news.slug, news.title, news.content, news.date, news.image);
    });
  }
}

const app = express();

app.use(cors());

app.get('/news', (_req, res) => {
  const news = db.prepare('SELECT * FROM news').all() as NewsRow[];
  res.json(news);
});

initDb();

app.listen(8080);
