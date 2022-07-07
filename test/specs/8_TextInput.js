describe.skip('Text Input', () => {
    it('I should be able to set the name of button throught the input text when I add a value and make click on the button', async () => {
        //Load Page
        await browser.url('/' + 'textinput');
        expect(browser).toHaveTitleContaining('Text Input');
        await browser.pause(3000);

        //Set the value of the input text
        const input = await $('#newButtonName');
        await expect(input).toBeDisplayed();
        await input.setValue('From test automation');

        //Click on the button
        const button = await $('#updatingButton');
        await expect(button).toBeDisplayed();
        await expect(button).toBeClickable();
        await button.click();

        //Verify if the button has the new name
        await expect(button).toHaveText('From test automation');
        await browser.pause(3000);

        
        after(async () => {
        await browser.saveScreenshot('screenshots/8_TextInput.png');
        });
    });
});