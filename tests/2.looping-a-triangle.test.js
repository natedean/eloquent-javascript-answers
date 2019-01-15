let outputStr = "";
test("Writes a loop that makes seven calls to console.log to output a triangle of hash marks", () => {
    console["log"] = jest.fn(str => outputStr += `${str}\n`);
    require('../2.looping-a-triangle.js');
    expect(outputStr).toBe(
        "#\n" +
        "##\n" +
        "###\n" +
        "####\n" +
        "#####\n" +
        "######\n" +
        "#######\n"
    );
});