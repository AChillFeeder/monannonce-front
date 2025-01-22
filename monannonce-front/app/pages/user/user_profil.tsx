import { Text, View } from "react-native";
import { withAuth } from '../../utils/auth';

export function UserProfil() {
    return (
        <View>
            <Text>Fiche d'utilisateur</Text>
            <Text>Liste de mes commentaires</Text>
            <Text>Liste de mes annonces</Text>
            <Text>Mes transactions</Text>
        </View>
    )
}

export default withAuth(UserProfil);