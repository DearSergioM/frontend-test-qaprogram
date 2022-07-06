describe.skip('Sample App', () => {
    it('I should be able to fill the form and submited', async () => {
        await browser.url('/' + 'sampleapp');
        expect(browser).toHaveTitleContaining('Sample App');
        await browser.pause(3000);

        const username = await $('input[type="text"]');
        const password = await $('input[type="password"]');
        const buttonLogin = await $('#login')

        await username.setValue('test.user');
        await password.setValue('pwd');
        await buttonLogin.click();

        await browser.pause(3000);

        const messageWelcome = await $('#loginstatus');

        const userloggin = await (await $('input[type="text"]')).getText();
        await expect(messageWelcome).toHaveTextContaining('Welcome, ' + userloggin);

        after(async () => {
        await browser.saveScreenshot('screenshots/14_SampleApp.png');
        });
    });
});

