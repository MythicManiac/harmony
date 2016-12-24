"use strict";
const assert = require("assert");
const utils_1 = require("../src/utils");
describe("utils", function () {
    describe("parseArgs", function () {
        it("Should parse arguments properly", function () {
            assert.deepEqual(utils_1.parseArgs("some test arguments"), ["some", "test", "arguments"]);
            assert.deepEqual(utils_1.parseArgs("     some         test       arguments      "), ["some", "test", "arguments"]);
            assert.deepEqual(utils_1.parseArgs("some\"test arguments"), ["some", "test arguments"]);
            assert.deepEqual(utils_1.parseArgs("some\"test argum\"ents"), ["some", "test argum", "ents"]);
            assert.deepEqual(utils_1.parseArgs("some \"test\" \"arguments\""), ["some", "test", "arguments"]);
            assert.deepEqual(utils_1.parseArgs("\"some test\" arguments"), ["some test", "arguments"]);
            assert.deepEqual(utils_1.parseArgs("some test arguments\""), ["some", "test", "arguments"]);
        });
    });
});
