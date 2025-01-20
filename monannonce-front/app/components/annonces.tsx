import { Text, View } from "react-native";
import Annonce from './annonce';
import { withAuth } from '../utils/auth';

// Liste des annonces
function Annonces() {
    return (
        <View>
            <Annonce
                id={1}
                titre="Titre de l'annonce"
                description="Description ici"
                />
            <Annonce
                id={2}
                titre="Annonce 2"
                description="Description de la deuxième annonce"
                />
            <Annonce
                id={3}
                titre="Annonce 3"
                description="Description de la troisième annonce"
            />
        </View>
    )
}
export default withAuth(Annonces);