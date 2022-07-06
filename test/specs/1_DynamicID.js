describe.skip('Dynamic ID', () => {
    it('Make sure that ID is not used for button identification', async () => {
        await browser.url('/' + 'dynamicid');
        await browser.pause(2000)

        expect(browser).toHaveTitleContaining('Dynamic ID');

        const exercice = await $('h3');

        await expect(exercice).toExist();
        await expect(exercice).toHaveTextContaining('Dynamic ID');

        const button = await $('.btn-primary');

        await expect(button).toExist();

        await button.click();
        await browser.pause(2000);
        after(async () => {
            await browser.saveScreenshot('screenshots/1_DynamicID.png');
        });
    });
});