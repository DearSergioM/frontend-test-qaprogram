describe('Scrollbars', () => {
    it('I should be able to set the name of button throught the input text when I add a value and make click on the button', async () => {
        await browser.url('/' + 'scrollbars');
        expect(browser).toHaveTitleContaining('Scrollbars');
        await browser.pause(3000);

        let button = await $('#hidingButton');
        
        await expect(button).toBeDisplayed();

        await button.scrollIntoView();
        
        after(async () => {
        await browser.saveScreenshot('screenshots/9_Scrollbar.png');
        });
    });
});