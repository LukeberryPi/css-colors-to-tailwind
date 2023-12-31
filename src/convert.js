export function convertCssToJs(cssText) {
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

  const asString =
    "{ " +
    Object.keys(cssObject)
      .reduce((final, property) => {
        return final.concat(`${property}: "${cssObject[property]}"`);
      }, [])
      .join(", ") +
    " }";

  return `colors: ${asString}`;
}