import database from "../../../infra/database.js";

export default async function status(request, response) {
  const result = await database.query("SELECT NOW() AS data_e_hora_atual");
  console.log(result.rows);
  // your code here
  response.status(200).json({ status: "OK" });
}
