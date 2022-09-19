import { Box } from "@mui/material";
import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import ContainerContent from "../components/ContainerContent";
import LayoutNavbar from "../components/layouts/NavbarLayout";
import type { NextPageWithLayout } from "./_app";
import readme from "../docs/IndexReadme.md";

const Home: NextPageWithLayout = () => {
  // async const getInitialProps({ req }): any {
  //   const content = await require("../docs/IndexReadme.md")
  //   return { content }
  // }
  return (
    <>
      <ContainerContent bg={true}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>Projectile Points Web Database</h1>
        </Box>
        <ReactMarkdown>{readme}</ReactMarkdown>
      </ContainerContent>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNavbar>{page}</LayoutNavbar>;
};

export default Home;
