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
  //post to localstorage here
};
