import format from "../formatCustomProperties";

describe("format custom properties util", () => {
  it("should format custom properties object", () => {
    expect(
      format({
        "--color": "#FFFFFF",
        "-font": "Arial",
        width: "100px",
        Height: "100px",
        backgroundImage: "url()",
        "-backgroundPosition": "0 0",
        "--paddingLeft": "10px",
        "--padding-top": "10px",
        "-padding-right": "10px",
        PaddingBottom: "10px",
        "-marginLeft": "10px",
        "--marginTop": "10px",
        "--margin-right": "10px",
        "-margin-bottom": "10px"
      })
    ).toEqual({
      "--color": "#FFFFFF",
      "--font": "Arial",
      "--width": "100px",
      "--height": "100px",
      "--background-image": "url()",
      "--background-position": "0 0",
      "--padding-left": "10px",
      "--padding-top": "10px",
      "--padding-right": "10px",
      "--padding-bottom": "10px",
      "--margin-left": "10px",
      "--margin-top": "10px",
      "--margin-right": "10px",
      "--margin-bottom": "10px"
    });
  });
});
