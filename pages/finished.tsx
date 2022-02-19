import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Box from "@components/common/Box";
import Button from "@components/common/Button";
import { ButtonVariant } from "@components/common/Button/enums";

const Finished: NextPage = () => {
  const [result, setResult] = useState<string | null>(null);
  const router = useRouter();

  const getResult = () => {
    const result = localStorage.getItem("testScore");

    if (!result) {
      return;
    }

    Number(result) > 10 ? setResult("Extravert") : setResult("Introvert");

    localStorage.removeItem("testScore");
  };

  const onRetry = () => {
    router.push("/");
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <div className="container mx-auto">
      <Box>
        <div>
          <p className="text-xl font-bold">
            You have finished the test. According to your answers, you are an:
          </p>
          <p className="text-4xl text-indigo-500">{result}</p>
          <Button variant={ButtonVariant.Tertiary} handleClick={onRetry}>
            Do test again
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Finished;
