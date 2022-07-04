describe('Class Attribute', () => {
    it('Make sure that green button can not be hit twice', async () => {
        await browser.url('/' + 'hiddenlayers');
        await browser.pause(2000)

        expect(browser).toHaveTitleContaining('Hidden Layers');

            let greenButton = await $('.btn-success');
            let blueButton = await $('.btn-primary');

            //First click to the green button
            await greenButton.click();
            await blueButton.click();
            await blueButton.isClickable();

            //Second click to the green button should not work, verify with console
            console.log('Green Button is clickable? ' + await greenButton.isClickable());
            console.log('Blue Button is clickable? ' + await blueButton.isClickable());
            

            await browser.saveScreenshot('screenshots/3_HiddenLayers.png');
    });
});