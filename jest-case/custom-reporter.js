class CustomReporter {
  onTestResult(test, testResult, results) {
    console.log('\n');
    console.log('Stack is:\n', testResult.testResults[0].failureDetails[0].stack);
  }
}

module.exports = CustomReporter;
