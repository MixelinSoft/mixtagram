export const getMessagePosition = (messages, index) => {
  const currentMessage = messages[index];
  const prevMessage = messages[index - 1];
  const nextMessage = messages[index + 1];

  if (
    (!prevMessage || prevMessage.isIncoming !== currentMessage.isIncoming) &&
    (!nextMessage || nextMessage.isIncoming !== currentMessage.isIncoming)
  ) {
    return 'single';
  }

  if (!prevMessage || prevMessage.isIncoming !== currentMessage.isIncoming) {
    return 'first';
  }

  if (!nextMessage || nextMessage.isIncoming !== currentMessage.isIncoming) {
    return 'last';
  }

  return 'middle';
};
