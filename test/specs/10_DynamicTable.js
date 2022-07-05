describe.skip('Dynamic Table', () => {
    it('I should be able to compare the value from the table and the label', async () => {
        await browser.url('/' + 'dynamictable');
        expect(browser).toHaveTitleContaining('Dynamic Table');
        await browser.pause(3000);


        after(async () => {
        await browser.saveScreenshot('screenshots/10_DynamicTable.png');
        });
    });
});