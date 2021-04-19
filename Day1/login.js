import {Selector} from 'testcafe'

fixture `Login Page`
    .page `http://automationpractice.com/index.php`

test ('first sign in', async t=>{
    const signInButton = Selector('a').withText('Sign in')
    await t.click(signInButton)
    const emailInput =Selector('#email')
    await t.typeText( emailInput,'povemat518@tlhao86.com',{paste: true})
    const passInput =Selector('#passwd')
    await t.typeText(passInput,'PoveMat@518',{paste: true})
    const submitBut =Selector('#SubmitLogin')
    await t.click(submitBut)
})