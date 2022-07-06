describe.only('Shadow DOM', () => {
    it('I should be able to verify the clipboard match with the filed text', async () => {
        await browser.url('/' + 'shadowdom');
        expect(browser).toHaveTitleContaining('Shadow DOM');
        await browser.pause(3000);

        const generatorButton = await $('>>>.button-generate:not([hidden])')
        const copyButton = await $('>>>.button-copy:not([hidden])')

        await generatorButton.click();
        await copyButton.click();

        const field = await $('>>>.edit-field:not([hidden])');

        // ERROR ON THE BROWSER -> buttonCopy is not working
        await field.waitUntil(
            async () => (await $('>>>.edit-field:not([hidden])').getText()) === copyButton.getValue(),
            {
                timeout: 3000,
            }
        );

        after(async () => {
        await browser.saveScreenshot('screenshots/18_ShadowDom.png');
        });
    });
});