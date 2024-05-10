const BasePage=require('./base.page');
const {ResultSearchComponent}= require('./../components')

class ResultSearchPage extends BasePage{
    constructor (){
        super()
        this.resultSearchComponent=new ResultSearchComponent()
    }

}
module.exports=ResultSearchPage;