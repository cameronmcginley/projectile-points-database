import { Box } from "@mui/material";
import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import ContainerContent from "../components/ContainerContent";
import LayoutNavbar from "../components/layouts/navbar";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <ContainerContent bg={true}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p className="text-title">Title</p>
        </Box>
        <ReactMarkdown>test</ReactMarkdown>
        {/* <ContainerCards
          cards={[
            {
              title: "Search",
              description:
                "Search through North American projectile points, and filter through them by fields such as shape or size.",
              link: "/points",
            },
            {
              title: "Uploade",
              description: "Upload new projectile points onto this website.",
              link: "/points/upload",
            },
          ]}
        /> */}
      </ContainerContent>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNavbar>{page}</LayoutNavbar>;
};

export default Home;
