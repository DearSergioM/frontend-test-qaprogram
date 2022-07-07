describe.skip('Non-Breaking Space', () => {
    it('I should be able to click on the button using xPath with non-breaking space', async () => {
        //Load Page
        await browser.url('/' + 'nbsp');
        expect(browser).toHaveTitleContaining('Non-Breaking Space');

        //Click on the button
        const mybutton = await $("/html/body/section/div/button[text()='My\u00A0Button']");
        await expect(mybutton).toBeClickable();

        //Verify if the button is clickable
        console.log('My button is clickable = ' + await mybutton.isClickable());
        await mybutton.click();

        
        after(async () => {
        await browser.saveScreenshot('screenshots/16_NonBreakingSpace.png');
        });
    });
});
