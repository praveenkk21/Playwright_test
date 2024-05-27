exports.openPage= class openpage{

    constructor(page) {
        this.page=page ;       
    }

    async openpage(url){
       await this.page.goto(url);
    }
}