import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const filePath = join(process.cwd(), 'data.json');
  const jsonData = readFileSync(filePath, 'utf-8');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(jsonData);
}
