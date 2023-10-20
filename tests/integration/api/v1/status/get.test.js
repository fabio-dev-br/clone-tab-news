test("GET /api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const json = await response.json();
  expect(json).toEqual({ status: "OK" });
});
