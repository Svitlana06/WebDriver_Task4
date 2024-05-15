const BaseComponent = require('./../common/base.component')

class CalculatorSettingsComponent extends BaseComponent {

    constructor() {
        super()
    }

    get numberOfInstances() { return $$('.wX4xVc-Bz112c-LgbsSe')[1]}

    get operationSystemCurrentValue() { return $$('.VfPpkd-uusGie-fmcmS')[3]}

    get operationSystemOptions() { return $$('.VfPpkd-O1htCb-OWXEXe-SfQLQb-M1Soyc-Bz112c')[1]}

    get operationSystemRequired() { return $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')[9] }


get regularBtn() { return $$('.oLWDHd')[0]}

    get machineFamilyCurrentValue() {return $$('.VfPpkd-uusGie-fmcmS')[4]}

    get machineFamilyOptions() { return $$('.VfPpkd-O1htCb-OWXEXe-ztc6md')[1];}

    get machineFamilyRequired() {return $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-aSi1db-MCEKJb')[0]}

    get seriesCurrentValue() {return $$('.VfPpkd-uusGie-fmcmS')[5]}

    get seriesOptions() { return $$('.VfPpkd-O1htCb-OWXEXe-INsAgc')[4]}

    get seriesRequired() {return $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-aSi1db-MCEKJb')[4]}

    get machineTypeCurrentValue() {return $$('.VfPpkd-uusGie-fmcmS-haAclf')[6]}

    get machineTypeOptions() { return $$('.VfPpkd-O1htCb-OWXEXe-ztc6md')[3]}

    get machineTypeRequired() {return $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-aSi1db-MCEKJb')[19]}

    get gpusBtn() { return $$('.eBlXUe-scr2fc-OWXEXe-uqeOfd')[4]}
    

    get gpuTypeCurrentValue() {return $$('.VfPpkd-uusGie-fmcmS')[7]}

    get gpuTypeOptions() { return $$('.VfPpkd-TkwUic')[7] }

    get gpuTypeRequired() {return $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')[22]}

    get numberOfGpusCurrentValue() {return $$('.VfPpkd-uusGie-fmcmS')[8]}

    get numberOfGpusOptions() { return $$('.VfPpkd-TkwUic')[8]}

    get numberOfGpusRequired() {return $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')[24]}

    get localSsdCurrentValue() {return $$('.VfPpkd-uusGie-fmcmS')[9]}

    get localSsdOptions() { return $$('.VfPpkd-TkwUic')[9]}

    get localSsdRequired() {return $$('.VfPpkd-rymPhb-ibnC6b-OWXEXe-SfQLQb-Woal0c-RWgCYc')[30]}

    get discountOptionBtn() { return $$('.oLWDHd')[8]}

    get priceInMonth() {return  $$('.MyvX5d')[1]}

    get estimatedCost() { return $('.gt0C8e')}

    get shareBtn() { return $('.AXySwf')}   

}
module.exports = CalculatorSettingsComponent;