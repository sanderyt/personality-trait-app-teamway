import type { NextApiRequest, NextApiResponse } from "next";
import { Question } from "types";
import { questions } from "mocks";

type Data = {
  question: Question;
};

type Error = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { id } = req.query;

  const question = questions.find((question) => question.id === Number(id));

  if (!question) {
    return res.status(404).json({ message: "Could not find this question" });
  }

  res.status(200).json({ question });
}
