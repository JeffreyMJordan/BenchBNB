import {sum, screamify} from '../practice.js';

describe("sum", () => {
  test('adds two inputs together', () => { 
    expect(sum(1,2)).toEqual(3);
  });
});

describe('screamify', () => {
  test('makes phrase uppercase', ()=>{
    expect(screamify("aa")).toEqual("AA");
  });
});