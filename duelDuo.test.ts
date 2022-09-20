
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw Button displays choices', async () =>{
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click();
    const choiceDiv = await driver.findElement(By.id('choices'))
    await driver.sleep(2000)
    const displayed = await choiceDiv.isDisplayed();
    expect(displayed).toBe(true);
})

test('Display Player-duo when "add to duo" button is clicked', async () =>{
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click();
    await driver.sleep(2000)
    const duoBtn = await driver.findElement(By.xpath(`//*[@id="choices"]/div[1]/button`))
    duoBtn.click();
    const playerDiv = await driver.findElement(By.id('your-duo-header'))
    await driver.sleep(2000)
    const displayed = await playerDiv.isDisplayed();
    expect(displayed).toBe(true);
})
