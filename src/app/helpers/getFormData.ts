export const getFormData = (body: any) => {
  const formData = new FormData();

  for (const prop in body) {
    formData.append(prop, body[prop]);
  }

  return formData;
};
