const { Builder } = require("selenium-webdriver");
const View = require("../pages/view");
var expect = require("chai").expect;
const Login = require("../pages/login");
const Add = require("../pages/add");
const Home = require("../pages/home");
require("chromedriver");

describe("Create and delete user", function () {
  let driver;
  let view;
  let login;
  let add;
  let home;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    view = new View(driver);
  });

  it("Open main Page", async () => {
    const baseurl =
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    await view.goToUrl(baseurl);
  }).timeout(10000);

  it("Login", async () => {
    const username = "Admin";
    const password = "admin123";
    login = new Login(driver);
    await login.login(username, password);
    let check = await login.ifLogged();
    expect(check);
  }).timeout(10000);

  it("Go to add page", async () => {
    home = new Home(driver);
    await home.goToAdd();
    expect(await home.getURL()).to.equal(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser"
    );
  }).timeout(10000);

  it("Add User", async () => {
    add = new Add(driver);
    let checkAdded = await add.addUser(
      "Odis  Adalwi",
      "Paul Collings",
      "admin123H^"
    );
    expect(checkAdded);
  }).timeout(15000);

  it("Delete User", async () => {
    await home.reset();
    let checkRemoved = await home.remove(
      "Odis  Adalwi",
      "Paul Collings",
      "functionUsedForSearch"
    );
    expect(checkRemoved);
  }).timeout(15000);

  after(async () => {
    setTimeout(() => {
      driver.quit();
    }, 8000);
  });
});
