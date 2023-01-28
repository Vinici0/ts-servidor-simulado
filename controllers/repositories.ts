import { Request, Response } from 'express';
import fs from 'fs';
//json2csv
import { Parser } from 'json2csv';

interface RepositoryData {
  id: number;
  state: number;
}

const repositories: RepositoryData[] = [
  { id: 1, state: 604 },
  { id: 2, state: 605 },
  { id: 3, state: 606 },
];

export  const getRepos = (req: Request, res: Response) => {
  res.json(repositories);
}

export const getCSV = (req: Request, res: Response) => {
  const fields = ['id', 'state'];
  const opts = { fields };
  try {
    const parser = new Parser(opts);
    const csv = parser.parse(repositories);
    if (!fs.existsSync('csv')) {
      fs.mkdirSync('csv');
    }
    fs.writeFileSync('csv/repositories.csv', csv);
    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(csv);
  } catch (err) {
    console.error(err);
  }
};


