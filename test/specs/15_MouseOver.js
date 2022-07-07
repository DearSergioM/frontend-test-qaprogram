describe.skip('Mouse Over', () => {
    it('I should be able to click on the link "Click me" and', async () => {
        //Load Page
        await browser.url('/' + 'mouseover');
        expect(browser).toHaveTitleContaining('Mouse Over');

        //Click on the link "Click me"
        const linkClickMe = await $('=Click me');
        await linkClickMe.moveTo();
        await expect(linkClickMe).toBeClickable();
        await linkClickMe.click();
        await linkClickMe.click();
        
        //Verify if the counter is incremented by 2
        const coutlabel = await $('#clickCount');
        await expect(coutlabel).toHaveTextContaining('2');
        await browser.pause(3000);

        after(async () => {
        await browser.saveScreenshot('screenshots/15_MouseOver.png');
        });
    });
});