const {pages} = require ('./../po');
const settingsofCalculator= require ('./../po/data/settings');
const { existsSync, mkdirSync } = require('fs');

describe('Google Cloud Platform Pricing Calculator', () => {

    before(async () => {
        await pages('primaryPage').open();
    })



    it('Searching of the calculator @smoke', async () => {
        
            await pages('primaryPage').listHeaderComponent.searchCalculatorBtn.click();
            await browser.pause(700);
            await pages('primaryPage').listHeaderComponent.setValueInSearch.setValue(settingsofCalculator.valueForSearch);
            await browser.keys("\uE007");
            await pages('resultSearch').resultSearchComponent.openLink.click();
            await browser.pause(700);
    })

    it('Creating a new calculator for compute engine', async () => {
        
            await pages('calculator').calculatorComponent.rootEL.click();
            await browser.pause(700);
            await pages('calculator').productComponent.rootEL.click();
    })
  

    it('Filling out the form with data', async () => {
        
            for (i = 0; i <= Number(settingsofCalculator.data['Number of Instances']); i++) {
                await pages('calculatorSettings').calculatorSettingsComponent.numberOfInstances.click(); // number of Instances
                i++;
            }

            if (await pages('calculatorSettings').calculatorSettingsComponent.operationSystemCurrentValue.getText() !== settingsofCalculator.data['Operating System / Software']) {
                await pages('calculatorSettings').calculatorSettingsComponent.operationSystemOptions.click(); // checking the current value of an operation system and choosing the correct one
                await pages('calculatorSettings').calculatorSettingsComponent.operationSystemRequired.click();
                await browser.pause(700);
            }

            await pages('calculatorSettings').calculatorSettingsComponent.regularBtn.click(); // regular
            await browser.pause(700);

            if (await pages('calculatorSettings').calculatorSettingsComponent.machineFamilyCurrentValue.getText() !== settingsofCalculator.data["Machine Family"]) {
                await pages('calculatorSettings').calculatorSettingsComponent.machineFamilyOptions.click();
                await pages('calculatorSettings').calculatorSettingsComponent.machineFamilyRequired.click(); // checking the current value of a machine family and choosing the correct one 
                await browser.pause(700);
            }

            if (await pages('calculatorSettings').calculatorSettingsComponent.seriesCurrentValue.getText() !== settingsofCalculator.data["Series"]) {
                await pages('calculatorSettings').calculatorSettingsComponent.seriesOptions.click();
                await pages('calculatorSettings').calculatorSettingsComponent.seriesRequired.click(); // checking the current value of series and choosing the correct one 
                await browser.pause(700);
            }

            if (await pages('calculatorSettings').calculatorSettingsComponent.machineTypeCurrentValue.getText() !== settingsofCalculator.data["Machine type"]) {
                await pages('calculatorSettings').calculatorSettingsComponent.machineTypeOptions.click();
                await pages('calculatorSettings').calculatorSettingsComponent.machineTypeRequired.click(); // checking the current value of a machine type and choosing the correct one 
                await browser.pause(700);
            }
        
            await pages('calculatorSettings').calculatorSettingsComponent.gpusBtn.click(); // adding GPUs
            await browser.pause(1000);
        
            if (await pages('calculatorSettings').calculatorSettingsComponent.gpuTypeCurrentValue.getText() !== settingsofCalculator.data["GPU type"]) {
                await pages('calculatorSettings').calculatorSettingsComponent.gpuTypeOptions.click();
                await pages('calculatorSettings').calculatorSettingsComponent.gpuTypeRequired.click(); // checking the current value of a GPU type and choosing the correct one
                await browser.pause(700);
            }
    
            if (await pages('calculatorSettings').calculatorSettingsComponent.numberOfGpusCurrentValue.getText() !== settingsofCalculator.data["Number of GPUs"]) {
                await pages('calculatorSettings').calculatorSettingsComponent.numberOfGpusOptions.click();
                await pages('calculatorSettings').calculatorSettingsComponent.numberOfGpusRequired.click(); // checking the current value of a number of GPUs and choosing the correct one 
                await browser.pause(700);
            }
        
            if (await pages('calculatorSettings').calculatorSettingsComponent.localSsdCurrentValue.getText() !== settingsofCalculator.data["Local SSD"]) { // checking the current value of a local SSD and choosing the correct one 
                await pages('calculatorSettings').calculatorSettingsComponent.localSsdOptions.click();
                await pages('calculatorSettings').calculatorSettingsComponent.localSsdRequired.click();
                await browser.pause(700);
            }
        
            await pages('calculatorSettings').calculatorSettingsComponent.discountOptionBtn.click();
        


        await browser.pause(1200);

        // items are not available on the website:
        // 1.  What are these instances for?: leave blank
        // 2. Datacenter location: Frankfurt (europe-west3)
    })
    it('Checking price and creating a report', async () => {

            let priceInMonth = await pages('calculatorSettings').calculatorSettingsComponent.priceInMonth;
            let estimatedCost = await pages('calculatorSettings').calculatorSettingsComponent.estimatedCost  // checking a price
            let estimatedCostText = await estimatedCost.getText();
            await expect(priceInMonth).toHaveText(estimatedCostText);
            await browser.pause(700);

            await pages('calculatorSettings').calculatorSettingsComponent.shareBtn.click();
            await browser.pause(700);

            await pages('calculatorSettings').shareEstimateComponent.rootEL.click();
            await browser.pause(700);

            let expectedUrl = await pages('calculatorSettings').shareEstimateComponent.rootEL.getAttribute("href");
            await browser.pause(700);

            await browser.switchWindow(expectedUrl);  // Opening a report
            await browser.pause(700);
        
    
    })

it('Сhecking the report', async () => {

        for (const key in settingsofCalculator.data) {
            if (key !=="Machine Family" && key !=="Series"){ //  fields absence in report
            const selector = `span=${key}`;
            const value = settingsofCalculator.data[key];
            const element = await $(selector).nextElement();
            await expect(element).toHaveText(value);
    }}

})



})