import config from '../config'

class Base{

    async shortPause() {
        await browser.pause(config.minTime);
    }

    async mediumPause() {
        await browser.pause(config.mediumTime);
    }

    async maxPause() {
       await browser.pause(config.maxTime);
    }

   async launchUrl() {
    await browser.maximizeWindow();    
    await browser.url(config.url)
    }
}
export default new Base()