import type { NextPage } from "next";
import { GetServerSideProps } from "next";

import { getQuestion } from "@services/questions";

import MainQuestion from "@components/features/MainQuestion";

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

  if (!question) {
    context.res.setHeader("location", "/finished");
    context.res.statusCode = 302;
    context.res.end();
  }

  return {
    props: {
      question,
    },
  };
};

export default Question;
