import { generateConfig, generateAnotherConfig } from "./demo";

test("测试 generateConfig", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    {
      "domain": "localhost",
      "port": 8080,
      "server": "http://locaohost",
      "time": Any<Date>,
    }
  `
  );
});

test("测试 generateAnotherConfig", () => {
  expect(generateAnotherConfig()).toMatchSnapshot({
    time: expect.any(Date),
  });
});
