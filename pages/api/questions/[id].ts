import type { NextApiRequest, NextApiResponse } from "next";
import { Question } from "../../../types";

type Data = {
  question: Question;
};

type Error = {
  message: string;
};

const questions = [
  {
    id: 1,
    mainQuestion:
      "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
    answers: [
      { id: 1, answer: "Don’t dare to interrupt them", score: 4 },
      {
        id: 2,
        answer:
          "Think it’s more important to give them some of your time; work can wait",
        score: 3,
      },
      { id: 3, answer: "Listen, but with only with half an ear", score: 2 },
      {
        id: 4,
        answer: "Interrupt and explain that you are really busy at the moment",
        score: 1,
      },
    ],
  },
  {
    id: 2,
    mainQuestion:
      "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
    answers: [
      { id: 1, answer: "Look at your watch every two minutes", score: 1 },
      {
        id: 2,
        answer: "Bubble with inner anger, but keep quiet",
        score: 2,
      },
      {
        id: 3,
        answer:
          "Explain to other equally impatient people in the room that the doctor is always running late",
        score: 3,
      },
      {
        id: 4,
        answer: "Complain in a loud voice, while tapping your foot impatiently",
        score: 4,
      },
    ],
  },
  {
    id: 3,
    mainQuestion:
      "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
    answers: [
      { id: 1, answer: "Don’t dare to interrupt them", score: 4 },
      {
        id: 2,
        answer:
          "Think it’s more important to give them some of your time; work can wait",
        score: 3,
      },
      { id: 3, answer: "Listen, but with only with half an ear", score: 2 },
      {
        id: 4,
        answer: "Interrupt and explain that you are really busy at the moment",
        score: 1,
      },
    ],
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

  res.status(200).json({ question });
}
