import fs from 'fs/promises';
import path from 'path';

export async function GET(request, context) {
  // Vänta på context och hämta params
  const { params } = context;
  // Eftersom mappen heter [theme] så kommer parametern att heta "theme"
  const { theme } = await  params;
  
  // Ange sökvägen till din JSON-fil
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'themes.json');

  try {
    // Läs in JSON-filen
    const jsonData = await fs.readFile(filePath, 'utf8');
    const themes = JSON.parse(jsonData);
    // Leta efter temat vars "themeUrl" matchar "theme" från URL:en
    const foundTheme = themes.find(t => String(t.themeUrl) === theme);

    if (!foundTheme) {
      return new Response(JSON.stringify({ error: 'Theme not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(foundTheme), {
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
