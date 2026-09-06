const DEG = Math.PI / 180;
const LAM0 = 105 * DEG;
const PHI1 = 25 * DEG;
const PHI2 = 47 * DEG;
const PHI0 = 0;
const N =
  Math.log(Math.cos(PHI1) / Math.cos(PHI2)) /
  Math.log(
    Math.tan(Math.PI / 4 + PHI2 / 2) / Math.tan(Math.PI / 4 + PHI1 / 2),
  );
const F = (Math.cos(PHI1) * Math.tan(Math.PI / 4 + PHI1 / 2) ** N) / N;
const RHO0 = F / Math.tan(Math.PI / 4 + PHI0 / 2) ** N;

export function projectLonLat(lon: number, lat: number): { x: number; y: number } {
  const lam = lon * DEG;
  const phi = lat * DEG;
  const rho = F / Math.tan(Math.PI / 4 + phi / 2) ** N;
  const theta = N * (lam - LAM0);
  return {
    x: rho * Math.sin(theta),
    y: RHO0 - rho * Math.cos(theta),
  };
}

export function toQuantized(
  lon: number,
  lat: number,
  bounds: [number, number, number, number],
  q: number,
): { x: number; y: number } {
  const p = projectLonLat(lon, lat);
  const span = Math.max(bounds[2] - bounds[0], bounds[3] - bounds[1]);
  return {
    x: Math.round(((p.x - bounds[0]) / span) * q),
    y: Math.round(((p.y - bounds[1]) / span) * q),
  };
}

export function shortProvinceName(name: string) {
  return name.replace(
    /维吾尔自治区|壮族自治区|回族自治区|特别行政区|自治区|省|市/g,
    "",
  );
}
