
export const QUESTION_OPENED = 'QUESTION_OPENED';

export function markQuestionAsOpened(number) {
  return {
    type: QUESTION_OPENED,
    payload: number
  };
}
