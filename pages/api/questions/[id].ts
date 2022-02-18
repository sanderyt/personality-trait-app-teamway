import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any; // add question type here
};

type Error = {
  message: string;
};

const questions = [
  {
    id: 1,
    question: "Here is the question!!!!",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
  },
  {
    id: 2,
    question: "QUESTION 2",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
  },
  {
    id: 3,
    question: "Here is the qudfsdfsdfestion",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
  },
  {
    id: 4,
    question: "Here is thesdfsdf question",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
  },
  {
    id: 5,
    question: "Here is the question",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { id } = req.query;

  const question = questions.find((question) => question.id === Number(id));

  if (!question) {
    return res.status(401).json({ message: "Could not find this question" });
  }

  res.status(200).json({ data: question });
}
