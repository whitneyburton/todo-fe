export const fetchData = async (path, method, data = null) => {
  let options;
  switch (method) {
    case 'DELETE':
      options = { method };
      break
    case 'GET':
      options = data;
      break
    default:
      options = {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
        }
      };
  };

  const url = 'http://localhost:3001/api/v1' + path;
  const response = await fetch(url, options);

  if (response.status === 204) return 'success'

  const json = await response.json();
  if (response.ok) {
    return json;
  } else {
    throw Error(json);
  }
}