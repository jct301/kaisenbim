export function removeDupsAndLowerCase (array: string[]): string[] {
  if (array.length === 0) return array
  const lowercaseItems = array.map((str) => str.toLowerCase())
  const distinctItems = new Set(lowercaseItems)
  return Array.from(distinctItems)
}
