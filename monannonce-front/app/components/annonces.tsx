import { Text, View } from "react-native";
import Annonce from './annonce';
import { withAuth } from '../utils/auth';

// Liste des annonces
function Annonces() {
    return (
        <View>
            <Annonce
                titre="Titre de l'annonce"
                description="Description ici"
            />
            <Annonce
                titre="Annonce 2"
                description="Description de la deuxième annonce"
            />
            <Annonce
                titre="Annonce 3"
                description="Description de la troisième annonce"
            />
        </View>
    )
}
export default withAuth(Annonces);