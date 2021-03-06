describe.skip('Visibility', () => {
    it('I should be able to clic on the Hide button, and verify that the other elements are not displayed', async () => {
        //Load Page
        await browser.url('/' + 'visibility');
        expect(browser).toHaveTitleContaining('Visibility');
        await browser.pause(3000);

        const hideButton = await $('#hideButton');
        const removedButton = await $('#removedButton');
        const zeroWidthButton = await $('#zeroWidthButton');
        const overlappedButton = await $('#overlappedButton');
        const opacityButton = await $('#transparentButton');
        const visibilityHiddenButton = await $('#invisibleButton');
        const displayNoneButton = await $('#notdisplayedButton');
        const offscreenButton = await $('#offscreenButton');

        const hiddingLayer = await $('#hidingLayer');
        //Verify if the button is visible on the page
        await expect(hideButton).toBeDisplayed
        await expect(removedButton).toBeDisplayed
        await expect(zeroWidthButton).toBeDisplayed
        await expect(overlappedButton).toBeDisplayed
        await expect(opacityButton).toBeDisplayed
        await expect(visibilityHiddenButton).toBeDisplayed
        await expect(displayNoneButton).toBeDisplayed
        await expect(offscreenButton).toBeDisplayed

        await hideButton.click();

        await expect(hiddingLayer).toBeDisplayed;

        //Verify if the button is visible on the page trhough the console
        console.log(
            'Remove button is displayed = ' + await removedButton.isDisplayed() + '\n' +
            'Zero width button is displayed = ' + await zeroWidthButton.isDisplayed() + '\n' +
            'Overlapped button is displayed = ' + await overlappedButton.isDisplayed() + '\n' +
            'Opacity button is displayed = ' + await opacityButton.isDisplayed() + '\n' +
            'Visibility hidden button is displayed = ' + await visibilityHiddenButton.isDisplayed() + '\n' +
            'Display none button is displayed = ' + await displayNoneButton.isDisplayed() + '\n' +
            'Offscreen button is displayed = ' + await offscreenButton.isDisplayed());


        after(async () => {
        await browser.saveScreenshot('screenshots/13_Visibility.png');
        });
    });
});

