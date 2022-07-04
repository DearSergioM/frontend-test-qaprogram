describe('AJAX Data', () => {
    it('Make wait for the page to load and see de button after the delay', async () => {
        await browser.url('/' + 'ajax');

        expect(browser).toHaveTitleContaining('AJAX Data');

        let waitButton = await $('#ajaxButton');
        await waitButton.click();

        await browser.pause(15000);

        let text = await $('.bg-success');

        await expect(text).toBeDisplayed();
        console.log('Text is displayed? ' + await text.isDisplayed());
        await expect(text).toHaveTextContaining('Data loaded with AJAX get request.');

        await browser.saveScreenshot('screenshots/5_AJAXData.png');
    });
});