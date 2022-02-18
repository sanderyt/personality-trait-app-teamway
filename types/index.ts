export type Answer = {
  id: number;
  answer: string;
  score: number;
};

export type QuestionResponse = {
  question: Question;
};

export type Question = {
  id: number;
  mainQuestion: string;
  answers: Answer[];
};
