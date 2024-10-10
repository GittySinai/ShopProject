import data from './products.mjs' assert{type: "json"}
console.log(data)

const notebooks = data.notebooks;
const crafts = data.craft;

// הדפסת התוצאות לקונסול
console.log('Notebooks:', notebooks);
console.log('Crafts:', crafts);

export { notebooks, crafts };
