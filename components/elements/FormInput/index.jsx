import { Text, TextInput, View } from "react-native";
import styles from "./style";
import { COLORS, ICONS, SIZES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Controller } from "react-hook-form";

const types = {
  username: {
    placeholder: "Tài khoản của bạn",
    icon: ICONS.ionIcon_user,
    rules: { required: "Bạn chưa nhập tên tài khoản của bạn! " },
  },
  password: {
    placeholder: "Mật khẩu",
    icon: ICONS.ionIcon_lock_closed,
    isSecure: true,
    rules: {
      required: "Bạn chưa nhập mật khẩu!",
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/,
        message:
          "Mật khẩu phải có ít nhất 6 ký tự. Gồm cả chữ thường, chữ hoa và số",
      },
    },
  },
  confirmPassword: (comparedValue) => ({
    placeholder: "Nhập lại mật khẩu",
    icon: ICONS.ionIcon_lock_closed,
    isSecure: true,
    rules: {
      required: "Bạn chưa nhập lại mật khẩu!",
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/,
        message:
          "Mật khẩu phải có ít nhất 6 ký tự. Gồm cả chữ thường, chữ hoa và số",
      },
    },
  }),
};

function FormInput({ width, height, style, type, control }) {
  const [isSecure, setIsSecure] = useState(types[type]?.isSecure);

  return (
    <Controller
      control={control}
      name={type}
      defaultValue={""}
      rules={types[type].rules}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <View style={style}>
          <View style={[styles.inputContainer(width, height)]}>
            <Ionicons
              style={styles.prefix}
              name={types[type]?.icon}
              size={SIZES.large}
            />
            <TextInput
              style={styles.input}
              placeholder={types[type]?.placeholder}
              placeholderTextColor={COLORS.lightBlack}
              secureTextEntry={isSecure}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {types[type]?.isSecure && (
              <Ionicons
                style={styles.suffix}
                name={
                  isSecure ? ICONS.ionIcon_eye_close : ICONS.ionIcon_eye_open
                }
                size={SIZES.xLarge}
                onPress={() => setIsSecure(!isSecure)}
              />
            )}
          </View>
          {error && <Text style={styles.errorMessage}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

export default FormInput;