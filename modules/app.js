import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

console.log(__fileName);
console.log(__dirName);
