const BaseComponent= require('./base.component')

class FooterComponent extends BaseComponent{
    
    constructor(){
        super('.yuynp')
    }
    get SubscribeBtn(){
        return this.rootEL.$('//a[text()="Subscribe"]')
    }
}
module.exports=FooterComponent;