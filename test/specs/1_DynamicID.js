describe.skip('Dynamic ID', () => {
    it('Make sure that ID is not used for button identification', async () => {
        //Load Page
        await browser.url('/' + 'dynamicid');
        await browser.pause(2000)
        expect(browser).toHaveTitleContaining('Dynamic ID');

        //Verify the title of the exercise
        const exercice = await $('h3');

        await expect(exercice).toExist();
        await expect(exercice).toHaveTextContaining('Dynamic ID');

        //Click on the button
        const button = await $('/html/body/section/div/button');

        await expect(button).toExist();
        await button.click();
        await browser.pause(2000);

        //Save screenshot
        after(async () => {
            await browser.saveScreenshot('screenshots/1_DynamicID.png');
        });
    });
});
