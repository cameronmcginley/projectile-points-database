import { Box } from "@mui/material";
import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import ContainerContent from "../components/ContainerContent";
import LayoutNavbar from "../components/layouts/NavbarLayout";
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
      </ContainerContent>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNavbar>{page}</LayoutNavbar>;
};

export default Home;
