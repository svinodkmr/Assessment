import Base from '../SetUp/Base'
import HomePage from '../Pages/HomePage'
import CompanyPage from '../Pages/CompanyPage'
import CsvWriter from '../Helper/CsvWriter'
import Config from '../config'

describe('UI Test Automation Using JavaScript', async () => {

    var dt = new Date();
    var myMap = new Map();
    it('GivenUserToNavigateURL', async () => {
        await Base.launchUrl();
        await expect(browser).toHaveTitle('BetterCloud: SaaS Management Platform (SMP)');
    })

    it('GivenUserToClickOnCompanyInTheNavigationBarAndVerifyText', async () => {
        await HomePage.selectCompany();
        await expect(CompanyPage.headerText).toHaveText('About BetterCloud');
    })

    it('GivenUserClickOnTheBoardAndExtractMemberDetails', async () => {

        await CompanyPage.clickBoard();
        var memberCount = await CompanyPage.getBoardMembersCount();
        console.log('Count: ' + memberCount);
        for (var i = 1; i <= memberCount; i++) {
            var key = await CompanyPage.getBoardMemberName(i);
            var value = await CompanyPage.getBoardMemberExcerpt(i);
            myMap.set(key, value)
        }
    })


    it('GivenUserSaveBoardMemberDataInCSV', async () => {

        var headerData = ['Name', 'Excerpt'];
        var records = myMap.entries();

        await CsvWriter.createFile();
        await CsvWriter.writeCsvFile(Config.csvFilePath, headerData, records);
    })

})