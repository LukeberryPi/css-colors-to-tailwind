function convertCssToJs(cssText) {
  const cssObject = {};

  const lines = cssText.split("\n");
  for (const line of lines) {
    const match = line.match(/^\s*--([\w-]+):\s*([^;]+);/);
    if (match) {
      const propertyName = match[1];
      const propertyValue = match[2];
      const camelCaseName = propertyName.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      cssObject[camelCaseName] = `${propertyValue.trim()}`;
    }
  }

  return cssObject;
}

const cssText = `:root {
  --berry-blue: #79CBE3;
  --navy-dark: #00151f;
}`;

const colors = convertCssToJs(cssText);

console.error("colors:", colors);
