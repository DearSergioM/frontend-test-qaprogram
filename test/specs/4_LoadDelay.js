describe.skip('Load Delays', () => {
    it('I should wait for the page to load and see de button after the delay', async () => {
        await browser.url('/');
        let link = await $('a[href="/loaddelay"]');
        await link.click();
        await browser.pause(6000)

        expect(browser).toHaveTitleContaining('Load Delays');

        let blueButton = await $('.btn-primary');

        //Verify if the blue button is clickable
        await blueButton.isClickable();

        //Second click to the green button should not work, verify with console
        console.log('Blue Button is clickable? ' + await blueButton.isClickable());

        after(async () => {
            await browser.saveScreenshot('screenshots/4_LoadDelay.png');
        });
    });
});