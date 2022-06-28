import { test, expect } from "@jest/globals";
import { getByTopic, getByDate } from "./models";

test("When given a topic does the getByTopic function filter the table ", async () => {
  const expected = [
    {
      date: " 14-06-2022 ",
      id: 11,
      topics: "Use Effect",
      notes: "Can be use with async funtions",
    },
  ];
  const actual = await getByTopic("Effect");

  expect(actual).toStrictEqual(expected);
});

test(" When given a date does the getByDate function filter the table ", async () => {
  const expected = [
    {
      date: " 14-06-2022 ",
      id: 11,
      topics: "Use Effect",
      notes: "Can be use with async funtions",
    },
  ];
  const actual = await getByDate(" 14-06-2022 ");

  expect(actual).toStrictEqual(expected);
});
