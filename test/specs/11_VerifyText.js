describe.skip('Verify Text', () => {
    it('I should be able to see Welcome UserName! text', async () => {
        //Load Page
        await browser.url('/' + 'verifytext');
        expect(browser).toHaveTitleContaining('Verify Text');
        await browser.pause(3000);

        //Get the text from the page containing 'Welcome UserName!'
        const text = await (await $("//span[normalize-space(.)='Welcome UserName!']")).getText();

        //Verify if the text is displayed with the text 'Welcome UserName!'
        await expect(text).toEqual('Welcome UserName!');

        after(async () => {
        await browser.saveScreenshot('screenshots/11_VerifyText.png');
        });
    });
});

