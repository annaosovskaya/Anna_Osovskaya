const { By, until } = require("selenium-webdriver");
const Add = require("./add");

class Home extends Add {
  constructor(driver) {
    super(driver);

    this.employeeName = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/input'
    );
    this.username = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input'
    );

    this.userRoleBox = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div'
    );
    this.statusBox = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div'
    );

    this.submit = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]'
    );

    this.adminBlock = By.xpath(
      '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a'
    );
    this.add = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button'
    );
    this.resetBtn = By.xpath(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[1]'
    );
    this.deleteBtn = By.css(
      ".oxd-table-row.oxd-table-row--with-border > div:nth-child(6) > div > button:nth-child(1)"
    );
    this.deleteConfirm = By.xpath(
      '//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]'
    );
    this.element = By.css(".oxd-table-row.oxd-table-row--with-border");
    this.elementsFields = By.className("oxd-table-cell");
  }

  async goToAdd() {
    await this.driver.findElement(this.adminBlock).click();
    await this.driver.wait(until.elementLocated(this.add), 3000).click();
  }

  async reset() {
    await this.driver.wait(until.elementLocated(this.resetBtn), 10000).click();
  }

  async remove(employeeName, username, password) {
    await this.addUser(employeeName, username, password);
    setTimeout(async () => {
      await this.driver.findElement(this.deleteBtn).click();
      await this.driver.findElement(this.deleteConfirm).click();
    }, 2000);
    return await this.checkAddedUser();
  }
}

module.exports = Home;
