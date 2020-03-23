const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

function timestamp(joinChar) {
  let joinWith = joinChar || ' '; 
  let joinTimeWith = joinChar || ':';
  let d = new Date();
  let time = [
    pad(d.getHours()),
    pad(d.getMinutes()),
    pad(d.getSeconds())
  ].join(joinTimeWith);
  return [d.getDate(), months[d.getMonth()], time].join(joinWith);
}

function generateNumberBetween(min, max) {
  min = parseInt(min);
  max = parseInt(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeANSIColors(string) {
  const ESCAPE_REGEX = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
  return string.replace(ESCAPE_REGEX, '');
}

function removeRepeatedText(string) {
  if(string.includes('Expected') || string.includes('but got:')) {
      const splittedArr = string.split(' Expected'); 
      return splittedArr[0]; // just keep the first part of the string
  }
  return string;
}

function cleanUpAssertions(results) {
 const modules = results.modules;
  
  Object.keys(modules).forEach((module) => {
    let currentModule = modules[module];
    let moduleCompletedTests = currentModule.completed;

    Object.keys(moduleCompletedTests).forEach((completedTest) => {     
      let currentCompletedTest = currentModule.completed[completedTest];
      let currentTestAssertions = currentCompletedTest.assertions;
  
      currentTestAssertions.forEach((assertion) => {
        assertion.message = removeANSIColors(assertion.fullMsg);
        assertion.message = removeRepeatedText(assertion.message);
      })
    })
  })
}

function addTestsRunTime(results) {
  let testsRunTime = 0;
  const modules = results.modules;

  Object.keys(modules).forEach((module) => {
    let currentModule = modules[module];
    let moduleCompletedTests = currentModule.completed;

    Object.keys(moduleCompletedTests).forEach((completedTest) => {     
      let currentCompletedTest = currentModule.completed[completedTest]
      let currentCompletedTestTime = parseFloat(currentCompletedTest.time);
      testsRunTime += currentCompletedTestTime;
    })
  })
  results.testsRunTime = testsRunTime.toFixed(2);
}


function addNumberOfTests(results) {
  let numberOfTests = 0;
  const modules = results.modules;

  Object.keys(modules).forEach((module) => {
    let currentModule = modules[module];
    let testsCount = currentModule.testsCount;
    numberOfTests += testsCount;
  })
  results.numberOfTests = numberOfTests;
}

function formatResults(results) {
  cleanUpAssertions(results);
  addTestsRunTime(results);
  addNumberOfTests(results);
  return results;
}


module.exports = {
  timestamp,
  generateNumberBetween,
  formatResults
}
