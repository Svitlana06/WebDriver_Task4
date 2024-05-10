const BasePage=require('./base.page')
const {ListHeaderComponent}= require('./../components')

class PrimaryPage extends BasePage{

    constructor (){
        super('https://cloud.google.com')
        this.listHeaderComponent=new ListHeaderComponent()
    }
}
module.exports= PrimaryPage