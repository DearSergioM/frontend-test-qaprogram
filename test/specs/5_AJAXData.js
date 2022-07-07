describe.skip('AJAX Data', () => {
    it('I should click on the button and wait for the text to be loaded', async () => {
        //Load Page
        await browser.url('/' + 'ajax');
        expect(browser).toHaveTitleContaining('AJAX Data');

        //Click on the button
        const waitButton = await $('#ajaxButton');
        await waitButton.click();
        //Wait for the text to be loaded
        await browser.pause(15000);
        const text = await $('.bg-success');

        //Verify if the text is loaded
        await expect(text).toBeDisplayed();
        await text.click();
        await expect(text).toHaveTextContaining('Data loaded with AJAX get request.');

        //Verify if the text is displayed and is clickable
        console.log('Text is displayed? ' + await text.isDisplayed());
        console.log('Text is clickable? ' + await text.isClickable());
        
        after(async () => {
        await browser.saveScreenshot('screenshots/5_AJAXData.png');
        });
    });
});