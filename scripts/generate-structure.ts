import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// --- Type Definitions for Tree Structure ---
interface FileNode {
  type: 'file';
  name: string;
  path: string;
}

interface FolderNode {
  type: 'folder';
  name: string;
  path: string;
  children: TreeNode[];
}

type TreeNode = FileNode | FolderNode;

// Helper to get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Main Analysis Function ---
function analyzeDirectory(dirPath: string, projectRoot: string, exclude: Set<string>): FolderNode {
  const relativePath = path.relative(projectRoot, dirPath) || '.';
  const node: FolderNode = {
    type: 'folder',
    name: path.basename(dirPath) || '.', // handle root
    path: relativePath,
    children: [],
  };

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryName = entry.name;
    const fullPath = path.join(dirPath, entryName);

    // Skip excluded directories (and skip .DS_Store or other hidden files if desired)
    if (exclude.has(entryName)) {
      continue;
    }

    if (entry.isDirectory()) {
      node.children.push(analyzeDirectory(fullPath, projectRoot, exclude));
    } else if (entry.isFile()) {
      node.children.push({
        type: 'file',
        name: entryName,
        path: path.relative(projectRoot, fullPath),
      });
    }
  }

  // Sort children: folders first, then files, all alphabetically
  node.children.sort((a, b) => {
    if ((a as FolderNode).type === (b as FolderNode).type) {
      return a.name.localeCompare(b.name);
    }
    return (a as FolderNode).type === 'folder' ? -1 : 1;
  });

  return node;
}

// --- Execution Block ---
function main() {
  try {
    console.log('Starting project structure analysis...');

    // Project root relative to this script file (scripts folder -> .. = project root)
    const projectRoot = path.resolve(__dirname, '..');

    // If you want to force using the current working directory instead, use:
    // const projectRoot = process.cwd();

    const outputFilePath = path.join(projectRoot, 'structure.json');
    const excludedFolders = new Set(['node_modules', '.next', '.git', 'scripts']);

    const projectTree = analyzeDirectory(projectRoot, projectRoot, excludedFolders);

    // Adjust the root node's name and path for clarity
    projectTree.name = path.basename(projectRoot) || '.';
    projectTree.path = '.';

    const jsonOutput = JSON.stringify(projectTree, null, 2);
    fs.writeFileSync(outputFilePath, jsonOutput, 'utf-8');

    console.log(`✅ Analysis complete! Project structure saved to ${outputFilePath}`);
  } catch (error) {
    console.error('❌ An error occurred during analysis:', error);
  }
}

main();
