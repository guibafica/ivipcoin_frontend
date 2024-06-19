export default function getValidationErrors(err: unknown) {
  const validationErrors = {};

  // @ts-expect-error 'Error type'
  err.inner.forEach((error) => {
    // @ts-expect-error 'Unknown type'
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
