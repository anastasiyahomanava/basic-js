const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  
  sampleActivity = parseFloat(sampleActivity);

  if (sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0 || !isFinite(sampleActivity)) {
    return false;
  }

  const halfLife = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / sampleActivity) / halfLife;
  const ageRounded = Math.ceil(age);

  return ageRounded;
};
