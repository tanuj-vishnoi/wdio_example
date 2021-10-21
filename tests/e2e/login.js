//username password
// login valid invalid and logout
describe("login page test", () => {
    it("invalid login", async () => {
        await browser.url("http://zero.webappsecurity.com/index.html");
        const signIn = await $("#signin_button");
        await signIn.click();
        const inp = await $("#user_login");
        await inp.addValue("asdfdsfsd");
        const pass = await $("user_password");
        await inp.addValue("asdffd");
        const login = await $("input[value='Sign in']");
        await login.click();
        const message = await $(".alert.alert-error");
        await expect(message).toHaveText("Login and/or password are wrong.")
    })

    it("valid login",async ()=> {
        const inp = await $("#user_login");
        await inp.addValue("username");
        const pass = await $("#user_password");
        await pass.click()
        await pass.addValue("password");
        const login = await $("input[value='Sign in']");
        await login.click();
        await browser.pause(5000);
        const accountsumary = await $("#account_summary_tab a")
        await expect(accountsumary).toHaveText("Account Summary")
    })

    it("logout", async ()=> {
        const out  = await $("[data-toggle='dropdown'] [class='icon-user']")
        await out.click()
        await expect(browser).toHaveURL("http://zero.webappsecurity.com/index.html");
    })

})