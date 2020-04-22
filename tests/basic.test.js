import { Selector } from 'testcafe'

//prettier ignore
fixture `Getting started with Testcafe`
    .page `http://52.221.252.110:50000/app`

test('My first testcafe test', async t => {
    const registerOrLogin = Selector('#portal-site > section > div > div > div.ant-col-xs-24.ant-col-sm-24.ant-col-md-8.ant-col-lg-5.ant-col-lg-offset-2 > div > div > button')
    const emailAddress = Selector('#loginEmailInput')
    const password = Selector('#loginPasswordInput')
    const loginBtn = Selector('#portal-site > section > div > div > div:nth-child(3) > button')
    
    await t.click(registerOrLogin)
    await t.typeText(emailAddress,'testsprint14@mailinator.com')
    await t.typeText(password,'admin')
    await t.click(loginBtn)
    await t.wait(5000)

    await t.expect(Selector('#portal > div > div.custom-sider.ant-layout-sider.ant-layout-sider-dark.ant-layout-sider-has-trigger > div.ant-layout-sider-children > ul > li:nth-child(10) > a')
    .innerText).contains('Log Out')
    
})