test("GET /api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();

  const { version, max_connections, connections_used } =
    responseBody.dependencies.database;

  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(parseFloat(version)).toBeGreaterThan(0);

  expect(parseInt(max_connections)).toBeGreaterThan(0);

  expect(parseInt(connections_used)).toBeGreaterThan(0);
});
