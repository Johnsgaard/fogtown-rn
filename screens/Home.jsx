import React from "react";
import { Text } from "react-native"
import { gql, useQuery } from "@apollo/client";

const GET_ALL_BUOYS = gql`{
    buoys {
        airTemp
        code
        createdAt
        id
        name
        pageTime
        pressure
        updatedAt
        waterTemp
        waveHeight
        wavePeriod
        wind
      }
  }`

const HomeScreen = () => {
    const { error, data, loading } = useQuery(GET_ALL_BUOYS);
    console.log(data, loading, error);
    return (
        <Text>
            {  loading ? "..." : JSON.stringify(data || error) }
        </Text>
    );
}

export default HomeScreen;
