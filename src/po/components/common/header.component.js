const BaseComponent= require('./base.component')

class HeaderComponent extends BaseComponent{
    constructor(){
        super('.ZUAiPc')
    }
    get consoleBtn(){
        return this.rootEL.$('//a[text()="Console"]')
    }
}
module.exports=HeaderComponent;