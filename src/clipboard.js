export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert("Tailwind object copied successfully: ");
  } catch (error) {
    console.error("Unable to copy text. ", error)
  }
}