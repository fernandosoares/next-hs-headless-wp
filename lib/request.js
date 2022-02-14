export async function request(query, { variables } = {}) {
  const init = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables,
    }),
  }
  const response = await fetch(process.env.CMS_ENDPOINT, init)
  const json = await response.json()

  if (json.errors) {
    console.log('ERROR -> ', json.errors)
  }

  return json.data
}
