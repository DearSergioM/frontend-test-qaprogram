describe.skip('Scrollbars', () => {
    it('I should be able to see the hidden button using the scrollbars', async () => {
        //Load Page
        await browser.url('/' + 'scrollbars');
        expect(browser).toHaveTitleContaining('Scrollbars');
        await browser.pause(3000);

        //Click on the button
        const button = await $('#hidingButton');
        await expect(button).toBeDisplayed();

        //Verify if the button is visible on the page
        await button.scrollIntoView();
        
        after(async () => {
        await browser.saveScreenshot('screenshots/9_Scrollbar.png');
        });
    });
});