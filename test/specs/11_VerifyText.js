describe.skip('Verify Text', () => {
    it('I should be able to see Welcome UserName! text', async () => {
        await browser.url('/' + 'verifytext');
        expect(browser).toHaveTitleContaining('Verify Text');
        await browser.pause(3000);

        const text = await (await $("//span[normalize-space(.)='Welcome UserName!']")).getText();

        await expect(text).toEqual('Welcome UserName!');

        after(async () => {
        await browser.saveScreenshot('screenshots/11_VerifyText.png');
        });
    });
});

