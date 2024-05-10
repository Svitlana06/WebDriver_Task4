const BasePage=require('./base.page')
const {CalculatorComponent, ProductComponent}= require('./../components')

class CalculatorPage extends BasePage{

    constructor (){
        super()
        this.calculatorComponent=new CalculatorComponent();
        this.productComponent= new ProductComponent();
    }
}
module.exports= CalculatorPage