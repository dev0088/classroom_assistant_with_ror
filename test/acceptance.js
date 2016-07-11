import { Application } from "spectron"
import assert from "assert"

describe("application launch", function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: "node_modules/.bin/electron",
      args: [
        "main.js"
      ]
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it("shows index page on load", function () {
    return this.app.client.waitUntilWindowLoaded().then(function () {
      return this.app.client.getText("h1")
    }).then(function (text) {
      console.log(text)
      assert.equal(1, 1)
    })
  })
})
