import fs from 'fs/promises';
import path from 'path';

export async function GET(request, context) {
  const { params } = await context;
  const { themeId } = params;
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'themes.json');

  try {
    const jsonData = await fs.readFile(filePath, 'utf8');
    const themes = JSON.parse(jsonData);
    const theme = themes.find(t => String(t.themeId) === themeId);

    if (!theme) {
      return new Response(JSON.stringify({ error: 'Theme not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(theme), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error reading themes.json:', error);
    return new Response(JSON.stringify({ error: 'Failed to load theme' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
