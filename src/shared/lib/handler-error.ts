export const handlerError = (e: any): string => {
  if (e.response?.data?.message) {
    return e.response.data.message;
  } else if (e.message) {
    return e.message;
  } else {
    return "Unknown error occurred";
  }
}
