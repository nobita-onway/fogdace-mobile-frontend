import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

function useCart() {

  const addToCart = async (product) => {
    try {
      const cart = await AsyncStorage.getItem("cart");
      let cartArray = cart ? JSON.parse(cart) : [];

      const existingProductIndex = cartArray.findIndex((item) => item._id === product._id);

      if (existingProductIndex !== -1) {
        cartArray[existingProductIndex].quantity += 1;
      } else {
        product.quantity = 1;
        cartArray.push(product);
      }
      await AsyncStorage.setItem("cart", JSON.stringify(cartArray));
      Alert.alert("Thông báo", "Sản phẩm đã được thêm vào giỏ hàng.");

    } catch (error) {
      console.error("Add error", error);
    }
  };

  const getCart = async () => {
    try {
      const cart = await AsyncStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error("Get error", error);
      return [];
    }
  };

  const updateQuantity = async (product) => {
    try {
      const cart = await AsyncStorage.getItem("cart");
      let cartArray = cart ? JSON.parse(cart) : [];

      const existingProductIndex = cartArray.findIndex((item) => item._id === product._id);

      if (existingProductIndex !== -1) {
        cartArray[existingProductIndex].quantity = product.quantity;
      }
      await AsyncStorage.setItem("cart", JSON.stringify(cartArray));

    } catch (error) {
      console.error("Add error", error);
    }
  };
  const getSelectedItemsFromCart = async (selectedIndexes) => {
    try {
      const cart = await AsyncStorage.getItem("cart");
      const cartArray = cart ? JSON.parse(cart) : [];

      const selectedItems = selectedIndexes.map((index) => {
        if (index >= 0 && index < cartArray.length) {
          return cartArray[index];
        }
        return null;
      });

      const validSelectedItems = selectedItems.filter((item) => item !== null);

      return validSelectedItems;
    } catch (error) {
      console.error("Get selected items error", error);
      return [];
    }
  };

  return {
    addToCart,
    getCart,
    updateQuantity,
    getSelectedItemsFromCart
  }
}

export default useCart