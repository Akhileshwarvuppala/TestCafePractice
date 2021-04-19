import {Selector} from 'testcafe'

fixture `login test`
    .page `http://zero.webappsecurity.com/index.html`

test ('invalid login', async t=>{
    const signInButton=Selector('#signin_button')
    await t.click(signInButton)

    const loginForm=Selector('#login_form')
    await t.expect(loginForm.exists).ok()
    const usernameInput =Selector('#user_login')
    const passwordInput =Selector('#user_password')
    await t.typeText(usernameInput,'invalid ',{paste: true})
    await t.typeText(passwordInput,'invalid pass',{paste: true})

    const submitButton =Selector('.btn-primary')
    await t.click(submitButton)

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains('Login')
})

test('valid login', async t=>{
    const signInButton=Selector('#signin_button')
    await t.click(signInButton)

    const loginForm=Selector('#login_form')
    await t.expect(loginForm.exists).ok()
    //const usernameInput =Selector('#user_login')
    //const passwordInput =Selector('#user_password')
    //await t.typeText(usernameInput,'username',{paste: true})
    //await t.typeText(passwordInput,'password',{paste: true})

    //const submitButton1 =Selector('.btn-primary')
    //await t.click(submitButton1)

})
