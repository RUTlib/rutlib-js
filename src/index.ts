function cleanRut(rut: string): string {
  /**
   * Delete all non-numeric characters from a RUT.
   * @param rut  RUT string
   * @return {string} RUT without non-numeric characters.
   */
  return typeof rut === 'string'
    ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
    : '';
}

function validateRut(rut: string): boolean {
  /**
   * Verify if a RUT is valid.
   * @param rut  RUT string
   * @return {boolean} true if RUT is valid, false otherwise.
   */
  if (/^0+/.test(rut)) {
    return false;
  }
  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
    return false;
  }
  const cleanedRut = cleanRut(rut);

  let rutNumbers = parseInt(cleanedRut.slice(0, -1), 10);
  const rutLastDigit = cleanedRut.slice(-1);
  let M = 0,
    S = 1;
  for (; rutNumbers; rutNumbers = Math.floor(rutNumbers / 10))
    S = (S + (rutNumbers % 10) * (9 - (M++ % 6))) % 11;
  const lastDigitValid =  (S ? S - 1 : 'K').toString();
  return lastDigitValid === rutLastDigit;
}



function getLastDigitOfRut(rutNumbers:number): string {
  /**
   * Get de verificator digit from a number .
   * @param rutNumbers  RUT numbers
   * @return {string} as verificator digit.
   */

  let M = 0,
    S = 1;
  for (; rutNumbers; rutNumbers = Math.floor(rutNumbers / 10))
    S = (S + (rutNumbers % 10) * (9 - (M++ % 6))) % 11;
  const lastDigitValid =  (S ? S - 1 : 'K').toString();
  return lastDigitValid;
}

function formatRut (rut:string, withDots:boolean = true): string  {
  /**
   * Format a RUT to a valid format.
   * @param rut  RUT string
   * @param withDots  true if RUT should be formatted with dots, false otherwise.
   * @return {string} RUT formatted.
   */
  rut = cleanRut(rut);
  let rutFormatted; 
  if (withDots) {
    rutFormatted = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1);
    for (let i = 4; i < rut.length; i += 3) {
      rutFormatted = rut.slice(-3 - i, -i) + '.' + rutFormatted;
    }
  } else {
    rutFormatted = rut.slice(0, -1) + '-' + rut.substr(rut.length - 1);
  }

  return rutFormatted;
}

function generateRut (length:number = 8, formated:boolean=true): string  {
  /**
   * Generate a RUT with a random number.
   * @param length  RUT length
   * @param formated  true if RUT should be formatted, false otherwise.
   * @return {string} RUT generated.
   */
  if (length === 0) {
    return '';
  }
  let rutNumbers = Math.floor(Math.random() * Math.pow(10, length));
  const lengthRutNumbers = rutNumbers.toString().length;
  while (lengthRutNumbers < length) {
    rutNumbers = Math.floor(Math.random() * Math.pow(10, length));
  }
  const rutLastDigit = getLastDigitOfRut(rutNumbers);
  const rutGenerated = formatRut(rutNumbers.toString() + rutLastDigit, formated);
  return rutGenerated;
}

export { 
  cleanRut, 
  validateRut, 
  getLastDigitOfRut, 
  formatRut,
  generateRut 
};         
