import * as util from "util";

util.inspect("foo", "test");

type Foo = {
  bar: string;
};

const foo: Foo = {
  bar: 123,
};
