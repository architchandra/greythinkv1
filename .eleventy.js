module.exports = function(config) {
  config.addPassthroughCopy({ 'src/assets': 'build' });
  
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};