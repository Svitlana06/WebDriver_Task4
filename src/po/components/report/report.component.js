const BaseComponent= require ('./../common/base.component')

class ReportComponent extends BaseComponent{
    constructor(){
        super('')
    }
    get fieldNumberOfInstance(){ return $('span=Number of Instances')}
    get fieldOperationSystem(){ return $('span=Operating System / Software')}
    get fieldProvisioningModel(){ return $('span=Provisioning Model')}
    get fieldAddGpus(){ return $('span=Add GPUs')}
    get fieldNumberOfGpus(){ return $('span=Number of GPUs')}
    get fieldMachineType(){ return $('span=Machine type')}
    get fieldLocalSsd(){ return $('span=Local SSD')}
    get fieldDiscountOptions(){ return $('span=Committed use discount options')}
}
module.exports=ReportComponent;
