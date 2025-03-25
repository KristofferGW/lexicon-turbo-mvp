import fs from 'fs/promises';
import path from 'path';

export async function GET(request) {
    const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'themes.json');

    try {
        const jsonData = await fs.readFile(filePath, 'utf8');
        const themes = JSON.parse(jsonData);
        return new Response(JSON.stringify(themes), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error reading themes.json:', error);
        return new Response(JSON.stringify({ error: 'Failed to load themes' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}