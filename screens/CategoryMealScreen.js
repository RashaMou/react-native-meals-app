import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        style={styles.mealItem}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetail", {
            mealId: itemData.item.id
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.mealItem}
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "95%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mealItem: {}
});

export default CategoryMealScreen;
