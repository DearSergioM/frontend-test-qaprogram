describe.only('Dynamic Table', () => {
    it('I should be able to compare the value from the table and the label', async () => {
        await browser.url('/' + 'dynamictable');
        expect(browser).toHaveTitleContaining('Dynamic Table');
        await browser.pause(3000);

        const cpu = await (await $('/html/body/section/div/div/div[3]/*[contains(., "Chrome")]')).getText();
        const text = await (await $('.bg-warning')).getText();

        console.log('CPU: ' + cpu);
        console.log('Text: ' + text);


        after(async () => {
        await browser.saveScreenshot('screenshots/10_DynamicTable.png');
        });
    });
});

