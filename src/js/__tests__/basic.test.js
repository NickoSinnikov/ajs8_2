import ErrorRepository, { newMap } from "../app";
newMap.set(1, "Ошибка добавления");

test("show add new error ant read description", () => {
  const newError = new ErrorRepository(5, "Ошибка");
  const equal = "Ошибка";
  expect(newError).toEqual({});
  expect(ErrorRepository.translate(5)).toEqual(equal);
});

test(" show not error by code ", () => {
  const equal = "Unknown error";
  expect(ErrorRepository.translate(3)).toEqual(equal);
});
