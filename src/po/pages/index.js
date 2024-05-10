
const CalculatorPage = require('./calculator.page');
const PrimaryPage = require('./primary.page');
const ReportPage = require('./report.page');
const ResultSearchPage = require('./resultsSearch.page');
const CalculatorSettingsComponent = require ('./calculatorSettings.page');

function pages(name) {
    const items = {
        calculator: new CalculatorPage(),
        primaryPage: new PrimaryPage(),
        report: new ReportPage(),
        resultSearch: new ResultSearchPage(),
        calculatorSettings: new CalculatorSettingsComponent,
    }
    return items[name];
}
module.exports = {
    CalculatorPage,
    PrimaryPage,
    ReportPage,
    ResultSearchPage,
    pages,
    CalculatorSettingsComponent,
}