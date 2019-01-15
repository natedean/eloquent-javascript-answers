test("Writes a program that creates a string that represents an 8x8 grid, using newline characters to separate lines", () => {
    const run = require('../2.chessboard.js');

    expect(run()).toBe(
        " # # # #\n" +
        "# # # # \n" +
        " # # # #\n" +
        "# # # # \n" +
        " # # # #\n" +
        "# # # # \n" +
        " # # # #\n" +
        "# # # # "
    );
});

test("Writes a program that creates a string that represents an 4x4 grid, using newline characters to separate lines", () => {
    const run = require('../2.chessboard.js');

    expect(run(4)).toBe(
        " # #\n" +
        "# # \n" +
        " # #\n" +
        "# # "
    );
});