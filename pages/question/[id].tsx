import type { NextPage } from "next";
import { GetServerSideProps } from "next";

import { MainQuestion } from "@components/features/MainQuestion";
import { getQuestion } from "@services/questions";

const Question: NextPage = ({ question }) => {
  const { mainQuestion, id, answers } = question;

  return (
    <div className="container mx-auto">
      <MainQuestion mainQuestion={mainQuestion} id={id} answers={answers} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { question } = await getQuestion(Number(id));

  return {
    props: {
      question,
    },
  };
};

export default Question;
