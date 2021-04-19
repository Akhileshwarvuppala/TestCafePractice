import { Selector } from 'testcafe'

fixture `Getting started with testcafe`
    .page `https://devexpress.github.io/testcafe/example/`
    
test('My first testcafe test', async t =>{
    const name= Selector('#developer-name')
    const submit_button= Selector('#submit-button')
    const articleText=Selector('#article-header').innerText
    await t.takeScreenshot({ fullpage: true})
    
    await t.typeText(name,'akhil')
    //await t.wait(3000)
    await t.click(submit_button)

    await t.expect(articleText).contains('akhil')
})