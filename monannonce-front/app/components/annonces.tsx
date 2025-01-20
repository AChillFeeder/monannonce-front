import { Text, View } from "react-native";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

// Composants
import Annonce from './annonce';

// Utils
import { withAuth } from '../utils/auth'; 
import useFetch from "../utils/useFetch";

interface Annonce {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    userId: number;
}

// Liste des annonces
function Annonces() {
    const { data, error, loading, refetch } = useFetch<{data: Annonce[]}>('/annonces');

    if (loading) return <ActivityIndicator animating={true} color={MD2Colors.red800} style={{marginTop: 45}}/>;
    if (error) return <Text>Erreur: {error.message}</Text>;

    return (
        <View>
            {data?.data.map((annonce: any) => (
                <Annonce
                    key={annonce.id}
                    id={annonce.id}
                    titre={annonce.title}
                    description={annonce.description}
                    />
            ))}
        </View>
    )
}
export default withAuth(Annonces);