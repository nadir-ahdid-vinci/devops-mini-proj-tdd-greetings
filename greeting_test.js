import { greet }   from "./greeting";
import {expect, test} from '@jest/globals';


test('greet', () => {
    expect(greet("nadir")).toBe("nadir");
});