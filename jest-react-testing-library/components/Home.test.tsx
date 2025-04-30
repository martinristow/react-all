import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

function sum(a:number, b:number){
    return a + b;
}

test("adds 2+3 should be equal to 5", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(3, 3)).not.toBe(5);
});

test("object assigment:", () => {
    const data: any = {one: 1};
    data["two"] = 2;
    expect(data).toEqual({one: 1, two: 2});
})


test('There is a "stop in Christoph', ()=> {
    expect("Christoph").toMatch(/stop/);
})

async function getResponse() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve({value: "Hello World"});
        }, 100);
    });
}


describe("Combine Promise response value", () => {
    test("async getResponse should return Hello World", async () => {
        const response = await getResponse();
        expect(response).toEqual({value: "Hello World"});
    });

    test("async getResponse should return not abcd", async () => {
        const response = await getResponse();
        expect(response).toEqual({value: "abcd"});
    });
});

