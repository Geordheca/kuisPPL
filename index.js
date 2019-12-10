const {Builder, By, Key, until} = require('selenium-webdriver');
 
async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://demo.1crmcloud.com/login.php');
    const username = By.name('user_name');
    const password = By.name('user_password');
    await driver.findElement(username).sendKeys('admin');
    await driver.wait(password).sendKeys('admin', Key.ENTER);

    const dash2 = By.className('meta-profile');
    await driver.sleep(10000);
    await driver.findElement(dash2).then(res => {
        res.click();
    });
}
example();