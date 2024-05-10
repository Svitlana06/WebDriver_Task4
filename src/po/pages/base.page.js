
const {HeaderComponent} = require ('./../components');
const {FooterComponent} = require ('./../components')

class BasePage{

    constructor(url){
        this.url = url
        this.header = new HeaderComponent();
        this.footer = new FooterComponent();
    }

    open(){
        return browser.url(this.url)
    }
}
module.exports=BasePage;