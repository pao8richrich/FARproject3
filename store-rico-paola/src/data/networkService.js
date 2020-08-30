const baseUrl = "https://coding-challenge-api.aerolab.co";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM1NDJmYTc1MTI2YzAwNmQwOGJiMDYiLCJpYXQiOjE1OTczMjYwNzR9.31SDbCf2qkqMAB0ZENf7K8Z87jmNyK11_ODaHVYTl2c";

export async function consumeService({endpoint: path, method:method, body:body }) {
  let request = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (method === "POST") request = { ...request, body: JSON.stringify(body) };

  const response = await fetch(baseUrl + path, request);
  const dataSource = await response.json();
  return dataSource;
}
