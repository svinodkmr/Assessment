//import Base from '../SetUp/Base'

class CompanyPage {

    get headerText(){
        return $('h1')
    }

    get board(){
        return $('//div[@class="tab-list__inner"]//h3[contains(text(),"Board")]')
    }

    get boardMembersCount(){
        return $$('//*[@Class="board-members"]//div[@data-in-viewport]')
    }

    async boardMemberName(index){
        return $('//*[@Class="board-members"]//div['+index+']//child::div[@class="profile__name"]')
    }

    async boardMemberExcerpt(index){
        return $('//*[@Class="board-members"]//div['+index+']//child::div[@class="profile__excerpt"]')
    }

    async getHeaderText(){
        await(await this.headerText).waitForExist();
        return await (await this.headerText).getText();
    }

    async clickBoard(){
        await (await this.board).waitForExist();
        await (await this.board).click();
    }

    async getBoardMembersCount(){
        //await(await this.boardMembersCount).waitForExist();
        await browser.pause(5000)
        return await (await this.boardMembersCount).length;
    }

    async getBoardMemberName(index){
        await(await this.boardMemberName(index)).waitForExist();
        await (await this.boardMemberName(index)).scrollIntoView();
        await browser.pause(2000)
        return await (await this.boardMemberName(index)).getText();
    }

    async getBoardMemberExcerpt(index){
        await(await this.boardMemberExcerpt(index)).waitForExist();
        //await (await this.boardMemberExcerpt(index)).scrollIntoView();
        await browser.pause(2000)
        return await (await this.boardMemberExcerpt(index)).getText();
    }
}

export default new CompanyPage();