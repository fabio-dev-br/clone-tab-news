import database from "infra/database.js";

export default async function status(request, response) {
  const databasename = process.env.POSTGRES_DB;
  //return postgresql version
  const databaseVersion = await database
    .query(`SHOW server_version`)
    .then((value) => {
      return value.rows[0].server_version;
    });

  const maxConnections = await database
    .query(`SHOW max_connections`)
    .then((value) => {
      return value.rows[0].max_connections;
    });

  const databaseOpenedConnections = await database.query({
    text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1`,
    values: [databasename],
  });
  const openedConnections = databaseOpenedConnections.rows[0].count;

  // console.log(result2.rows);
  const updatedAt = new Date().toISOString();

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion,
        max_connections: maxConnections,
        connections_used: openedConnections,
      },
    },
  });
}
