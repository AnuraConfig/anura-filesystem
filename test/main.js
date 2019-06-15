import chai from "chai"
import path from "path"
import fs from "fs"
import rimraf from "rimraf"
import FileSystemManager from "../src"
import { commonTest } from "anura-data-manager"
import { newService, generalMocks } from "anura-data-manager/lib/tests/mocks"
const expect = chai.expect

describe("FileSystem data manager ", function () {
    describe("check requests", function () {
        beforeEach(function () {
            this.filePath = path.join(__dirname, `./tempFiles/temps_configs_${Math.random()}`) //reduce the probability of conflict 
            fs.mkdirSync(this.filePath)
            this.dataManager = new FileSystemManager({ location: this.filePath, log: generalMocks.logMock })
            this.dataManager.createService(newService)
        });

        commonTest()

        afterEach(function () {
            if (fs.existsSync(this.filePath))
                rimraf.sync(this.filePath);
        });
    })
})