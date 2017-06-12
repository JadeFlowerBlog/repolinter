const logSymbols = require('log-symbols');



const rulesToRun = [
  require('./rules/file_existence').bind(null, {name: 'License file', files: ['LICENSE*', 'COPYING*']}),
  require('./rules/file_existence').bind(null, {name: 'Readme file', files: ['README*']}),
  require('./rules/file_existence').bind(null, {name: 'Contributing file', files: ['CONTRIBUT*']}),
  require('./rules/file_contents').bind(null, {file: 'README.md', content: 'License'}),
  require('./rules/file_type_exclusion').bind(null, {type: '.dll'}),
  require('./rules/licensee_check').bind(null, {name: 'Licensee Check'}),
]

const targetDir = process.argv[2];
rulesToRun.forEach(rule => {
  const result = rule(targetDir);
<<<<<<< HEAD
  renderResults(result.failures, false);
  renderResults(result.passes, true);
});

function renderResults(results, success) {
  if (results) {
    results.forEach(result => renderResult(result, success));
  }
}

function renderResult(message, success) {
  console.log(success ? logSymbols.success : logSymbols.error, message);
}
=======
  if (result.passes) {
    console.log(result.passes);
  } else if (result.failures) {
    console.error(result.failures);
  };
});
>>>>>>> d30af6185cef11bd74fc386385e7184db20ac669
