import * as assert from 'assert'

import { parseArgs } from '../utils'

describe("utils", function() {
  describe("parseArgs", function() {
    it("Should parse arguments properly", function() {
      assert.deepEqual(
        parseArgs("some test arguments"),
        ["some", "test", "arguments"]
      )
      assert.deepEqual(
        parseArgs("     some         test       arguments      "),
        ["some", "test", "arguments"]
      )
      assert.deepEqual(
        parseArgs("some\"test arguments"),
        ["some", "test arguments"]
      )
      assert.deepEqual(
        parseArgs("some\"test argum\"ents"),
        ["some", "test argum", "ents"]
      )
      assert.deepEqual(
        parseArgs("some \"test\" \"arguments\""),
        ["some", "test", "arguments"]
      )
      assert.deepEqual(
        parseArgs("\"some test\" arguments"),
        ["some test", "arguments"]
      )
      assert.deepEqual(
        parseArgs("some test arguments\""),
        ["some", "test", "arguments"]
      )
    })
  })
})
