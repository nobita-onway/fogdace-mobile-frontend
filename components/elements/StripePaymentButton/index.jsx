import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import axios from "axios";
import { Alert, Pressable, Text } from "react-native";
import { BASE_URL } from "../../../constants/url";
import { headerConfig } from "../../../config/headerConfig";
import styles from "./style";

const StripePayment = () => {
  const STRIPE_KEY =
    "pk_test_51O5OO5Fe0KBrb7klJLhfVf8aAPzX4XxIQIB9v0uf76xYVSVEeckEEqAYstvH6ojcvZDoYLLbYgxVbZpdw2ocdkyz00x8xe8elR";

  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const onCheckout = async () => {
    // 1. Create a payment intent
    const response = await axios.post(
      `${BASE_URL}/payment/intents`,
      {
        amount: 12950,
      },
      headerConfig
    );
    if (response.error) {
      Alert.alert("Something went wrong");
      return;
    }

    // 2. Initialize the Payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: "dev",
      paymentIntentClientSecret: response.data.metaData,
      returnURL: `${BASE_URL}/payment/intents`,
    });
    if (initResponse.error) {
      console.log(initResponse.error);
      Alert.alert("Something went wrong");
      return;
    }

    // 3. Present the Payment Sheet from Stripe
    const paymentResponse = await presentPaymentSheet();

    if (paymentResponse.error) {
      Alert.alert(
        `Error code: ${paymentResponse.error.code}`,
        paymentResponse.error.message
      );
      return;
    }

    // 4. If payment ok -> create the order
    // onCreateOrder();
  };

  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
      <Pressable onPress={onCheckout} style={styles.button}>
        <Text style={styles.buttonText}>Đặt hàng</Text>
      </Pressable>
    </StripeProvider>
  );
};

export default StripePayment;
