import format from "../formatCustomPropertiesName";

describe("format custom properties name util", () => {
  it("should format name", () => {
    expect(format("--color")).toEqual("--color");
    expect(format("-font")).toEqual("--font");
    expect(format("width")).toEqual("--width");
    expect(format("Height")).toEqual("--height");
    expect(format("backgroundImage")).toEqual("--background-image");
    expect(format("-backgroundPosition")).toEqual("--background-position");
    expect(format("--paddingLeft")).toEqual("--padding-left");
    expect(format("--padding-top")).toEqual("--padding-top");
    expect(format("-padding-right")).toEqual("--padding-right");
    expect(format("PaddingBottom")).toEqual("--padding-bottom");
    expect(format("-marginLeft")).toEqual("--margin-left");
    expect(format("--marginTop")).toEqual("--margin-top");
    expect(format("--margin-right")).toEqual("--margin-right");
    expect(format("-margin-bottom")).toEqual("--margin-bottom");
  });
});
