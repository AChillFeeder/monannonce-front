import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Commentaire({
    contenu,
    id,
    firstName,
    createdAt
}: {contenu: string, id: string, firstName: string, createdAt: string}) {
    return (
        <View style={styles.card}>
            {/* Header Section with Avatar and Name */}
            <View style={styles.header}>
                {/* Avatar Placeholder */}
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{firstName.charAt(0).toUpperCase()}</Text>
                </View>
                <Text style={styles.name}>{firstName}</Text>
            </View>

            {/* Content Section */}
            <View style={styles.body}>
                <Text style={styles.content}>{contenu}</Text>
            </View>

            {/* Footer Section with Date */}
            <View style={styles.footer}>
                <Text style={styles.date}>{new Date(createdAt).toLocaleDateString()}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginVertical: 10,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Adds shadow for Android
        borderWidth: 1,
        borderColor: "#ddd",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#007bff",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    avatarText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    body: {
        marginBottom: 10,
    },
    content: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: "#eee",
        paddingTop: 10,
    },
    date: {
        fontSize: 12,
        color: "#aaa",
    },
});
