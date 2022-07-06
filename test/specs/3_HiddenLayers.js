describe.skip('Class Attribute', () => {
    it('I should not be able to click the green button twice', async () => {
        await browser.url('/' + 'hiddenlayers');
        await browser.pause(2000)

        expect(browser).toHaveTitleContaining('Hidden Layers');

            const greenButton = await $('.btn-success');
            const blueButton = await $('.btn-primary');

            //First click to the green button
            await greenButton.click();
            await blueButton.click();
            await blueButton.isClickable();

            //Second click to the green button should not work, verify with console
            console.log('Green Button is clickable? ' + await greenButton.isClickable());
            console.log('Blue Button is clickable? ' + await blueButton.isClickable());
            
            after(async () => {
                await browser.saveScreenshot('screenshots/3_HiddenLayers.png');
            });
    });
});