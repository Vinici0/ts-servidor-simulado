import { Request, Response } from 'express';

interface RepositoryData {
  id: number;
  state: number;
}

const getRepos = (req: Request, res: Response) => {

  const repositories: RepositoryData[] = [
    { id: 1, state: 604 },
    { id: 2, state: 605 },
    { id: 3, state: 606 },
  ];

  res.json(repositories);
};

export default  getRepos;

