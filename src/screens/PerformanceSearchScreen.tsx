import { FlatList, StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import { Button, Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import { useStore } from "../store/store";
import { useNavigation } from "@react-navigation/native";

export default function PerformanceSearchScreen() {
    const navigation = useNavigation();
    const { students, pcs, loadStudents, loadPcs } = useStore();

    useEffect(() => {
        loadStudents();
    }, []);

    let data = students.map((data) => {
        return data.name
    })

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
            );
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 17, padding: 20 }}> Bucar alumno por nombre: </Text>
            <Searchbar
                style={{ marginBottom: 20 }}
                placeholder="Buscar..."
                onChangeText={handleSearch}
                value={searchQuery}
            />
            <FlatList
                data={filteredData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Button style={{ margin: 10 }} mode="outlined" onPress={() => navigation.navigate('PerformanceChart')}>
                        {item}
                    </Button>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({});