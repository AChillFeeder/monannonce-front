import React, { useState } from "react";
import { Image, ActivityIndicator, View, StyleSheet } from "react-native";

export default function ImageWithLoader({ source, style }: { source: { uri: string }, style: any }) {
    const [loading, setLoading] = useState(true);

    return (
        <View style={styles.imageContainer}>
            {/* Loader */}
            {loading && (
                <ActivityIndicator
                    size="large"
                    color="#007bff"
                    style={styles.loader}
                />
            )}

            {/* Image */}
            <Image
                style={style}
                source={source}
                onLoadStart={() => setLoading(true)} // Trigger loader when loading starts
                onLoadEnd={() => setLoading(false)} // Hide loader when loading ends
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        position: "relative",
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    loader: {
        position: "absolute",
    },
});
