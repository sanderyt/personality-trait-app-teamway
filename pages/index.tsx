import type { NextPage } from "next";
import { useRouter } from "next/router";

import Box from "@components/common/Box";
import Button from "@components/common/Button";
import { ButtonVariant } from "@components/common/Button/enums";

const Home: NextPage = () => {
  const router = useRouter();

  const onStart = () => {
    router.push("/question/1");
  };

  return (
    <div className="container mx-auto">
      <Box>
        <h1 className="text-xl font-bold">
          Welcome to the Teamway personality test
        </h1>
        <p>
          You will be asked 5 personality questions. After answering these
          questions, you will receive an answer either: Introvert of Extravert
        </p>
        <div>
          <Button variant={ButtonVariant.Primary} handleClick={onStart}>
            Start test
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Home;
