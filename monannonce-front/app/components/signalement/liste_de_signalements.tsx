import { Text, View } from "react-native";
import Signalement from "./signalement";
import { withAuth } from '../../utils/auth';

// Liste des signalements
function Liste_de_signalements() {
    return (
        <View>
            <Signalement
                id={1}
                titre="Signalement 1"
                description="Description ici"
                />
            <Signalement
                id={2}
                titre="Signalement 2"
                description="Description de la deuxième Signalement"
                />
            <Signalement
                id={3}
                titre="Signalement 3"
                description="Description de la troisième Signalement"
            />
        </View>
    )
}
export default withAuth(Liste_de_signalements);