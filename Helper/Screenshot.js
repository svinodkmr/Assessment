
class Screenshot{
    async takeScreenshot( Date, name){
    await browser.saveScreenshot('./Screenshots/'+name+'_'+Date+'.png')
}
}

export default new Screenshot();