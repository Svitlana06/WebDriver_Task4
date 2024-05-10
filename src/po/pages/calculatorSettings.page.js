const BasePage=require('./base.page')
const {CalculatorSettingsComponent, ShareEstimateComponent}= require('./../components')

class CalculatorSettingsPage extends BasePage{

    constructor (){
        super()
        this.calculatorSettingsComponent=new CalculatorSettingsComponent();
        this.shareEstimateComponent = new ShareEstimateComponent;
    }
}
module.exports= CalculatorSettingsPage