//import Base from '../SetUp/Base'

class HomePage {

    get company(){
        return $('//ul[@id="menu-primary-menu"]//a[@href="https://www.bettercloud.com/company/"]')
    }

    async selectCompany(){
       await (await this.company).waitForExist();
       await (await this.company).click();
    }
}

export default new HomePage();