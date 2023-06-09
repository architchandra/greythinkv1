module.exports = function(config) {
  config.addPassthroughCopy({ 'src/assets': 'build' });
  config.addWatchTarget('./styles/');

  config.addFilter('version', function (value) {
    const now = String(Date.now());
    return value + '?v' + now;
  });
  
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};