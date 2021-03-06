describe.skip('Progress Bar', () => {
    it('I should be able to click on the start button, when the progress bar reach 75% it should stop by clicking on stop button', async () => {
        //Load Page
        await browser.url('/' + 'progressbar');
        expect(browser).toHaveTitleContaining('Progress Bar');
        await browser.pause(3000);

        const startButton = await $('#startButton');
        const stopButton = await $('#stopButton');
        const progressBar = await $('#progressBar');

        //Click on the start button
        await startButton.click();
        //Verfiy if the progress bar reach 75%
        await progressBar.waitUntil(
            async () => (await $('#progressBar').getText()) === '75%',
            {
                timeout: 30000,
            }
        );
        
        //Click on the stop button
        await stopButton.click();

        after(async () => {
        await browser.saveScreenshot('screenshots/12_ProgressBar.png');
        });
    });
});