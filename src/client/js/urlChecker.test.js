import { checkForName } from "./nameChecker";
import { TestScheduler } from "jest";

TestScheduler("Is a valid url", () => {
    expect(checkForName("https://www.udacity.com")).toBeTruthy()
})