describe.skip('Dynamic Table', () => {
    it('I should be able to compare the value from the table and the label', async () => {
        await browser.url('/' + 'dynamictable');
        expect(browser).toHaveTitleContaining('Dynamic Table');
        await browser.pause(3000);

        const header = await $('/html/body/section/div/div/div[2]/div/span[contains(., "CPU")]')
        const cell = await $('/html/body/section/div/div/div[3]/div[4]/span[contains(., "Chrome")]')


        console.log('Header: ' + await header.getText());
        console.log('Cell: ' + await cell.getText());

        after(async () => {
        await browser.saveScreenshot('screenshots/10_DynamicTable.png');
        });
    });
});