module.exports = {
  '*.@(j|t)s?(x)': ['eslint --max-warnings=0', 'prettier -w'],
  'src/**/*.ts?(x)': () => 'tsc-files --noEmit',
  '*.@(json|y?(a)ml|md|webmanifest)': ['prettier -w'],
};
