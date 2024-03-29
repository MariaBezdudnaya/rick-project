import { ResidentItem } from "../components/presentational/ResidentItem";

export default {
  title: "ResidentItem",
  component: ResidentItem,
};

export const Default = {
    args: {
        resident: {
            status: "Alive",
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            species: "Human",
            gender: "Male",
            location: {
                name: "Earth",
            },
        }
    }
}