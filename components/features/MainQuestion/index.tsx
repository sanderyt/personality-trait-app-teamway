import React, { FC } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Box from "@components/common/Box";
import Button from "@components/common/Button";
import { ButtonVariant } from "@components/common/Button/enums";

import { Answer } from "../../../types";

interface MainQuestionProps {
  mainQuestion: string;
  id: number;
  answers: Answer[];
}

interface IFormInputs {
  score: number;
}

const schema = yup
  .object({
    score: yup.number().required("This is required"),
  })
  .required();

export const MainQuestion: FC<MainQuestionProps> = ({
  mainQuestion,
  id,
  answers,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: IFormInputs) => {
    const { score } = data;

    if (score) {
      // write the score to local storage, make a service for that
      router.push(`/question/${id + 1}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <h1 className="font-bold">Question {id}</h1>
        <h2 className="font-bold text-lg text-indigo-500">{mainQuestion}</h2>
        <div>
          {answers &&
            answers.map((answer: Answer) => {
              return (
                <div key={answer.id}>
                  <input
                    type="radio"
                    id={answer.answer}
                    value={answer.score}
                    {...register("score")}
                  />
                    <label>{answer.answer}</label>
                </div>
              );
            })}
        </div>
        <p>{errors.score?.message}</p>
        <div>
          <Button type="submit" variant={ButtonVariant.Primary}>
            Next
          </Button>
        </div>
      </Box>
    </form>
  );
};
