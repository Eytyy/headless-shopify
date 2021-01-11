exports.statusReturn = (code, body) => {
  return {
    statusCode: code,
    headers,
    body: JSON.stringify(body),
  }
}

exports.preparePayload = (query, variables) => ({
  query,
  variables,
})
