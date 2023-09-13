describe("test2", () => {
  it("succeeds", () => {
    expect(true).toBe(true);
  });

  it("fails", () => {
    expect(true).toBe(false);
  });

  it("foo", async () => {
    await new Promise((resolve) => setTimeout(resolve, 60000));
  }, 120000);
});
