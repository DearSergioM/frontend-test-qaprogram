describe.skip('Scrollbars', () => {
    it('I should be able to see the hidden button using the scrollbars', async () => {
        await browser.url('/' + 'scrollbars');
        expect(browser).toHaveTitleContaining('Scrollbars');
        await browser.pause(3000);

        const button = await $('#hidingButton');
        
        await expect(button).toBeDisplayed();

        await button.scrollIntoView();
        
        after(async () => {
        await browser.saveScreenshot('screenshots/9_Scrollbar.png');
        });
    });
});