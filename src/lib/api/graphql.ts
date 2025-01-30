const MORPHO_API_URL = 'https://blue-api.morpho.org/graphql';

export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const response = await fetch(MORPHO_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseData = await response.json();

  if (responseData.errors) {
    throw new Error(
      'GraphQL request failed: ' + responseData.errors[0].message
    );
  }

  return responseData.data;
}
