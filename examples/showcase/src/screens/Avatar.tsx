import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Avatar,
  Layout,
  Section,
  SectionContent,
  Text,
  themeColor,
  TopNav,
  useTheme,
} from "react-native-rapi-ui";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../types/navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "Avatar">) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
        middleContent="Avatar"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <ScrollView>
        <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionContent>
            <Text fontWeight="medium">Sizes</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text>Extra large xl</Text>
              <Avatar source={require("../../assets/people.jpg")} size="xl" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text size="lg">Large lg</Text>
              <Avatar source={require("../../assets/people.jpg")} size="lg" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text>Medium md</Text>
              <Avatar source={require("../../assets/people.jpg")} size="md" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text>Small sm</Text>
              <Avatar source={require("../../assets/people.jpg")} size="sm" />
            </View>
          </SectionContent>
        </Section>
        <Section style={{ marginVertical: 20, marginHorizontal: 20 }}>
          <SectionContent>
            <Text fontWeight="medium">Shapes</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar source={require("../../assets/people.jpg")} size="xl" />
                <Avatar source={require("../../assets/people.jpg")} size="lg" />
                <Avatar source={require("../../assets/people.jpg")} size="md" />
                <Avatar source={require("../../assets/people.jpg")} size="sm" />
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text>round</Text>
                <Text fontWeight="bold">default</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar
                  shape="rounded"
                  source={require("../../assets/people.jpg")}
                  size="xl"
                />
                <Avatar
                  shape="rounded"
                  source={require("../../assets/people.jpg")}
                  size="lg"
                />
                <Avatar
                  shape="rounded"
                  source={require("../../assets/people.jpg")}
                  size="md"
                />
                <Avatar
                  shape="rounded"
                  source={require("../../assets/people.jpg")}
                  size="sm"
                />
              </View>
              <Text>rounded </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar
                  shape="square"
                  source={require("../../assets/people.jpg")}
                  size="xl"
                />
                <Avatar
                  shape="square"
                  source={require("../../assets/people.jpg")}
                  size="lg"
                />
                <Avatar
                  shape="square"
                  source={require("../../assets/people.jpg")}
                  size="md"
                />
                <Avatar
                  shape="square"
                  source={require("../../assets/people.jpg")}
                  size="sm"
                />
              </View>
              <Text>square </Text>
            </View>
          </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
