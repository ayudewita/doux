module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {
      inset: {
        '3': '3px',
        '-5': '-5px',
      }
    },
    variants: {},
    plugins: [],
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
  }