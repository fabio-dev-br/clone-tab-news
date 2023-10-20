export default function status(request, response) {
  // your code here
  response.status(200).json({ status: "OK" });
}
