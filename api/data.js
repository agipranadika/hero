import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  try {
    // arahkan ke folder yang benar (misal 'pahlawan_nasional.json')
    const filePath = join(process.cwd(), 'json', 'pahlawan_nasional.json');
    const jsonData = readFileSync(filePath, 'utf-8');
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(jsonData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read JSON file', detail: error.message });
  }
}
