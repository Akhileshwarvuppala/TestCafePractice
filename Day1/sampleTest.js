import { Selector } from 'testcafe';

fixture `Getting Started`
    .page (`https://www.google.com`);

    test('My first test', async t => {
        await t
         .typeText('input[name="q"]', 'testcafe')
         .click('input[name="btnK"]')
         //.expect(Selector('div').innerText).contains('TestCafe')

    });    