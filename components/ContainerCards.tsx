import { Box } from "@mui/material";
import Card from "./Card";

interface CardData {
  title: string;
  description: string;
  link: string;
}

// props.cards is array of objects
// Returns grid container specifically for Cards
const ContainerCard = (props: { cards: CardData[] }) => {
  return (
    <Box
      className="container-cards"
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        py: 3,
        gap: "2rem",
      }}
    >
      {props.cards.map((card: CardData) => (
        // card as obj
        <Card key={card.title} data={card} />
      ))}
    </Box>
  );
};

export default ContainerCard;
