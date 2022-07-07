describe.skip('Overlapped Element', () => {
    it('I should be able add text to the fields after scrolling the bar', async () => {
        //Load Page
        await browser.url('/' + 'overlapped');
        expect(browser).toHaveTitleContaining('Overlapped Element');
        await browser.pause(3000);

        const idField = await $('#id');
        const nameField = await $('#name');
        
        //Set values to the id field
        await expect(idField).toBeDisplayed();
        await idField.setValue('t1e2s3t4');

        //Set values to the name field
        await expect(nameField).toBeDisplayed();
        await nameField.scrollIntoView();
        await nameField.setValue('test.name');


        after(async () => {
        await browser.saveScreenshot('screenshots/17_OverlappedElement.png');
        });
    });
});