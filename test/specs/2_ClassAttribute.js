const assert = require('assert');

describe.skip('Class Attribute', () => {
    it('Make sure that it can identify the button using btn-primary class', async () => {
        //Load Page
        await browser.url('/' + 'classattr');
        await browser.pause(2000)
        expect(browser).toHaveTitleContaining('Class Attribute');

        //Click on the primary button
        const button = await $('.btn-primary');
        await expect(button).toExist();
        await button.click();
        await browser.pause(3000);

        //Accept the alert from the browser
        const alert_text = await browser.getAlertText();
        await browser.acceptAlert();
        assert.equal(alert_text, 'Primary button pressed');

        after(async () => {
            await browser.saveScreenshot('screenshots/2_ClassAttribute.png');

        });
    });
});