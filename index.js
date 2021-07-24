import {
    valueList
} from "../pub.config.js";
export default (cfg) => class MyClass {
    constructor() {
        console.log(cfg,valueList);
    }
}