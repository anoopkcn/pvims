import reactStringReplace from 'react-string-replace';


export const MakeMatName = (material: string) => {
  return reactStringReplace(material, /(\d+)/g, (match, i) => (<sub key={i}>{match}</sub>));
}
export const fixPrecision = (num: number | null | undefined) => {
  if (num == null) return '-';
  return num.toFixed(4);
}

export const  makeDataFrom =(
  datums: number,
  useR?: boolean
) => {
  const length = datums;
  const nullChance = 0;
  const min = 0;
  const max = 100;
  const rMin = 2;
  const rMax = 20;
  return [...new Array(length)].map((_, i) => {
    let x = Math.random() < nullChance ? null : min + Math.round(Math.random() * (max - min));

    const distribution = 1.1;

    const y = Math.random() < nullChance ? null : min + Math.round(Math.random() * (max - min));

    const r = !useR ? null : rMax - Math.floor(
        Math.log(Math.random() * (distribution ** rMax - rMin) + rMin) /
        Math.log(distribution) );

    return {
      primary: x,
      secondary: y,
      radius: r,
    };
  })
}

