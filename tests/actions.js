describe("Browser actions", ()=>{
    it("open url", async()=>{
        await browser.url("https://devexpress.github.io/testcafe/example/");
        const input = await $('#developer-name')
        await input.setValue('Mike')
        await browser.pause(5000)
        await input.clearValue();
        await input.setValue('Tanuj')
        
    })

    it("add value url", async()=>{
        await browser.url("https://devexpress.github.io/testcafe/example/");
        const input = await $('#developer-name')
        await input.addValue('Append')
        await browser.pause(5000)
        
    })

    it("click", async()=>{
        await browser.url("https://devexpress.github.io/testcafe/example/");
        const input = await $('#developer-name')
        await input.addValue('Append')
        const pop = await $('#populate')
        await pop.click()
        await browser.pause(5000)
        await browser.acceptAlert();// accept alert
    })

    it("radio button check boxes", async()=>{
        await browser.url("https://devexpress.github.io/testcafe/example/");
        const check = await $('#remote-testing')
        check.click();
        await browser.pause(5000)
    })

    it('select box',async ()=>{
        await browser.url("https://devexpress.github.io/testcafe/example/");
        const sel =  await $('#preferred-interface')
        await sel.waitForExist()
        await sel.selectByVisibleText('JavaScript API')
        await browser.pause(5000)
    })
})