describe.skip('AJAX Data', () => {
    it('I should click on the button and wait for the text to be loaded', async () => {
        await browser.url('/' + 'ajax');

        expect(browser).toHaveTitleContaining('AJAX Data');

        const waitButton = await $('#ajaxButton');
        await waitButton.click();

        await browser.pause(15000);

        const text = await $('.bg-success');

        await expect(text).toBeDisplayed();
        await text.click();

        await expect(text).toHaveTextContaining('Data loaded with AJAX get request.');

        //Verify ig the text is displayed and is clickable
        console.log('Text is displayed? ' + await text.isDisplayed());
        console.log('Text is clickable? ' + await text.isClickable());
        after(async () => {
        await browser.saveScreenshot('screenshots/5_AJAXData.png');
        });
    });
});