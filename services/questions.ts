import { QuestionResponse } from "../types";
import { get } from "./api";

/**
 * Get question by id
 * @param id The id of the question that is being fetched
 * @returns The data of question
 */

export const getQuestion = (id: number): Promise<QuestionResponse> => {
  return get(`/questions/${id}`);
};

/**
 * Post the score of the choosen answer
 * @param score The score rate
 * @returns The data of question
 */
export const postQuestion = (score: number): void => {
  // Normally there would be a back-end to post to, but there is no database in this mock API
  // So I am using localStorage to keep track of the score as a mock
  const previousScore = localStorage.getItem("testScore");

  if (!previousScore) {
    return localStorage.setItem("testScore", score.toString());
  }

  const newScore = Number(previousScore) + score;

  return localStorage.setItem("testScore", newScore.toString());
};
