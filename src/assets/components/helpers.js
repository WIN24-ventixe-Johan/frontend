export function currentDateTime() {
  const tzOffset = new Date().getTimezoneOffset() * 60000; 
  const localISO = new Date(Date.now() - tzOffset)
                    .toISOString()
                    .slice(0, 16); 
  return localISO;
}

export default currentDateTime;