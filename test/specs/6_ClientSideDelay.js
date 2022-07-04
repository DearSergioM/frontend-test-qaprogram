describe('Client Side Delay', () => {
    it('I should click on the button and wait for the text to be loaded', async () => {
        await browser.url('/' + 'clientdelay');

        expect(browser).toHaveTitleContaining('Client Side Delay');

        let waitButton = await $('#ajaxButton');
        await waitButton.click();

        await browser.pause(15000);

        let text = await $('.bg-success');

        await expect(text).toBeDisplayed();
        await text.click();

        await expect(text).toHaveTextContaining('Data calculated on the client side.');

        //Verify ig the text is displayed and is clickable
        console.log('Text is displayed? ' + await text.isDisplayed());
        console.log('Text is clickable? ' + await text.isClickable());
        after(async () => {
        await browser.saveScreenshot('screenshots/6_ClientSideDelay.png');
        });
    });
});