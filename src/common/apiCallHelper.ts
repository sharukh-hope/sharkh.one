export const postCallApi = async <T>(
  url: string,
  postObj: object,
  callbackFunction: (data: T) => void,
  callbackOnError: (err: unknown) => void,
) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObj),
    });
    const data: T = await res.json();
    callbackFunction(data);
  } catch (err: unknown) {
    callbackOnError(err);
  }
};
