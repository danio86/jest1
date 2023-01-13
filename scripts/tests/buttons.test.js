/**
 * @jest-environment jsdom
 */

//Tests functions in buttons.js


beforeAll(() => {
    let fs = require("fs");
    //This is a file system handling module built into  Node that allows us to open read and write files.
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
//das läuft before each test startet! > document.body.innerHTML = ein p mit id=par
//Das kreiert ein Mockdown/Vorschau von diesem HTML Teil, dass getestet werden soll.

/* describe("DOM tests", () => {
    // die describe-line is optional
    test("Expects content to change", () => {
        //test beschreiben
        buttonClick();
        //function wird ausgeführt
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
            //Ergebnis > toEqual ist test-syntax (wie toBe)
    });
}); */

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});