describe.skip('Non-Breaking Space', () => {
    it('I should be able to click on the button using xPath with non-breaking space', async () => {
        await browser.url('/' + 'nbsp');
        expect(browser).toHaveTitleContaining('Non-Breaking Space');

        const mybutton = await $("/html/body/section/div/button[text()='My\u00A0Button']");
        await expect(mybutton).toBeClickable();
        await mybutton.click();

        
        after(async () => {
        await browser.saveScreenshot('screenshots/16_NonBreakingSpace.png');
        });
    });
});
