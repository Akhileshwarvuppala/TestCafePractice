import {Selector} from 'testcafe'

fixture `send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test ("Feedback form submit", async t => {
    const linkToFeedback= Selector('#feedback')
    const form_name = Selector('#name')
    const form_email = Selector('#email')
    const form_subject = Selector('#subject')
    const form_comment = Selector('#comment')
    const form_submitButton = Selector('input').withAttribute(
        'value',
        'Send Message'
    ) 
    const message = Selector('div').innerText

    await t.click(linkToFeedback)
    await t.typeText(form_name,'Name',{paste: true})
    await t.typeText(form_email,'email@12.com',{paste: true})
    await t.typeText(form_subject,'subject',{paste: true})
    await t.typeText(form_comment,'Your comment',{paste: true})

    await t.click(form_submitButton)

    await t.expect(message).contains('Thank you for your comments')
})