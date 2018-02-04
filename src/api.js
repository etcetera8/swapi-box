export const fetchAndJson = async(url) => {
  try {
    const promiseResponse = await fetch(url);
    return await promiseResponse.json();
  } catch (error) {
    return "Error";
  }
};


