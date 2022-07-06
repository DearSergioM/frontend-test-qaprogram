describe.skip('Mouse Over', () => {
    it('I should be able to click on the link "Click me" and', async () => {
        await browser.url('/' + 'mouseover');
        expect(browser).toHaveTitleContaining('Mouse Over');

        const linkClickMe = await $('=Click me');
        await linkClickMe.moveTo();
        await expect(linkClickMe).toBeClickable();
        await linkClickMe.click();
        await linkClickMe.click();
        
        const coutlabel = await $('#clickCount');
        await expect(coutlabel).toHaveTextContaining('2');
        await browser.pause(3000);

        after(async () => {
        await browser.saveScreenshot('screenshots/15_MouseOver.png');
        });
    });
});