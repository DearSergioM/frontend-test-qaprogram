describe.skip('Click', () => {
    it('I should be able to click on the button', async () => {
        //Load Page
        await browser.url('/' + 'click');
        expect(browser).toHaveTitleContaining('Click');
        await browser.pause(3000);

        //Click on the button
        const button = await $('#badButton');

        await button.click();
        await expect(button).toBeClickable();
        await expect(button).toHaveTextContaining('Button That Ignores DOM Click Event')
        await browser.pause(3000);
        
        //Verify if the green button is clickable
        console.log('Button is clickable? ' + await button.isClickable());
        after(async () => {
        await browser.saveScreenshot('screenshots/7_Click.png');
        });
    });
});