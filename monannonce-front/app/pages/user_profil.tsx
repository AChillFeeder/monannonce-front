import { Text, View } from "react-native";
import { withAuth } from '../utils/auth';

export function UserProfil() {
    return (
        <View>
            <Text>Fiche d'utilisateur</Text>
        </View>
    )
}

export default withAuth(UserProfil);