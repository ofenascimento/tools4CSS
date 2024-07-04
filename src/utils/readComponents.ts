// utils/readComponents.js
import fs from 'fs';
import path from 'path';

export const readComponents = (dir: string) => {
  const componentsDir = path.resolve(process.cwd(), dir);
  const componentFiles = fs.readdirSync(componentsDir);

  const components = componentFiles.map((file) => {
    const filePath = path.join(componentsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const componentPath = filePath.replace(process.cwd(), '').replace(/\\/g, '/');
    return { fileName: file, content, componentPath };
  });

  return components;
};
