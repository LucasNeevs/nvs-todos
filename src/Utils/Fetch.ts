export const FetchingProccess = async (url: string, user: string): Promise<unknown> => {
  const fetchResult = await fetch(`${url}/${user}/followers`)
    .then((response): unknown => response.json())
    .then((data): unknown => data)
    .catch((err): void => {
      console.error(err);
    });

  return fetchResult;
}