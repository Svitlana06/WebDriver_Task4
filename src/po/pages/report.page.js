const BasePage=require('./base.page');
const {ReportComponent}= require('./../components')

class ReportPage extends BasePage{
    constructor (){
        super()
        this.reportComponent=new ReportComponent()
    }

}
module.exports=ReportPage;
