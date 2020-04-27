import {
    handleSubmit, postData
} from "./formHandler"
import { TestScheduler } from "jest"

test("It should return true", async () => {
    expect(handleSubmit).toBeDefined();
});

test("it should be a funcion", async () => {
    expect(typeof handleSubmit).tobe("function")
})