import {short} from '../lib/timeout.js'
import {mobile, tablet} from '../lib/device.js'

describe("Tests", ()=>{
    it("launch the browser", async()=>{
       await browser.url("https://example.com/")
       await browser.pause(short)
        await expect(browser).toHaveUrl('https://example.com/')
    })
    it("launch the browser 2", async()=>{
        await browser.url("https://example.com/")
        const link = await $('a')
        await expect(link).toHaveLink('https://www.iana.org/domains/example')
     })

     it("Get Element text",async ()=>{
         const text = await $('h1')
         console.log(await text.getText())
         await expect(text).toHaveText('Example Domain')
     })

     it("Get attribute ",async ()=>{
        await browser.url("https://www.iana.org/domains/reserved")
        const image  = await $("[alt='Homepage']")
        expect(image).toHaveAttrContaining('img','helo')
     })

     it('take screenshot',()=>{
         browser.saveScreenshot('./screenshots/yourname.png')
     })

     it("set mobile view",async ()=>{
        await browser.setWindowSize(mobile[0], mobile[1])
       await browser.pause(short)
     })

     it("set tablet view", async()=>{
       await browser.setWindowSize(tablet[0], tablet[1])
       await browser.pause(short)
    })

})