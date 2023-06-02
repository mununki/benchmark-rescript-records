var Benchmark = require("benchmark");
var record = require("./record/run");
var recordOptional = require("./record_optional/run");
var recordSpread = require("./record_spread/run");
var recordSpreadOptional = require("./record_spread_optional/run");

var suite = new Benchmark.Suite();

suite
  .add("Normal record", function () {
    record.run();
  })
  .add("Record with spread", function () {
    recordSpread.run();
  })
  .add("Record with optional", function () {
    recordOptional.run();
  })
  .add("Record with spread and optional", function () {
    recordSpreadOptional.run();
  })
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run();
