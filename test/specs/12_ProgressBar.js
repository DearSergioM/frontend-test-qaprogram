describe.skip('Progress Bar', () => {
    it('I should be able to click on the start button, when the progress bar reach 75% it should stop by clicking on stop button', async () => {
        await browser.url('/' + 'progressbar');
        expect(browser).toHaveTitleContaining('Progress Bar');
        await browser.pause(3000);

        let startButton = await $('#startButton');
        let stopButton = await $('#stopButton');
        let progressBar = await $('#progressBar');

        await startButton.click();
        
        await progressBar.waitUntil(
            async () => (await $('#progressBar').getText()) === '75%',
            {
                timeout: 30000
            }
        );
        await stopButton.click();

        after(async () => {
        await browser.saveScreenshot('screenshots/12_ProgressBar.png');
        });
    });
});

