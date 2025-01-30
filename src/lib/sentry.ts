export function captureException(error: Error) {
  // TODO: Implement Sentry
  // Sentry.captureException(error);
  // eslint-disable-next-line no-console
  console.error({ message: error.message, stack: error.stack });
}
