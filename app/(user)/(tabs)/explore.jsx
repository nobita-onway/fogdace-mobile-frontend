import { ScrollableContentContainer } from "../../../components/elements";
import { PetExploreList, PetTrading } from "../../../components/blocks";
import usePetDictionary from "../../../hooks/usePetDictionary";
import useNavigation from "../../../hooks/useNavigation";
import usePetKnowledge from "../../../hooks/usePetKnowledge";
import { COLORS } from "../../../constants";

function Explore() {
  const { pet_dictionary } = usePetDictionary();
  const { pet_knowledge } = usePetKnowledge();
  const { go_to_dictionary_of, go_to_knowledge_of } = useNavigation();

  return (
    <ScrollableContentContainer color={COLORS.white}>
      <PetTrading />
      <PetExploreList
        pets={pet_knowledge}
        onCardPress={go_to_knowledge_of}
        type={"knowledge"}
      />
      <PetExploreList
        pets={pet_dictionary}
        onCardPress={go_to_dictionary_of}
        type={"dictionary"}
      />
    </ScrollableContentContainer>
  );
}

export default Explore;
