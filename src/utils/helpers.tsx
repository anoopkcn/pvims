import reactStringReplace from 'react-string-replace';


export const MakeMatName = (material: string) => {
  return reactStringReplace(material, /(\d+)/g, (match, i) => (<sub key={i}>{match}</sub>));
}
export const fixPrecision = (num: number | null | undefined) => {
  if (num == null) return '-';
  return num.toFixed(4);
}