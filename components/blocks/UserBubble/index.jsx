import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "../../elements";

import styles from "./style";
import useNavigation from "../../../hooks/useNavigation";
import useChat from "../../../hooks/useChat";

export default function UserBubble({ user }) {
  const { create_room_chat_with } = useChat();
  const { go_to_room_chat_with } = useNavigation();
  const { avatar, name } = user;

  return (
    <TouchableOpacity
      onPress={async () => {
        const room_id = await create_room_chat_with(user);
        go_to_room_chat_with({ ...user, room_id });
      }}
      style={styles.container}
    >
      <View style={styles.avatar_wrapper}>
        <Avatar shape="rounded" src={avatar} size="large" />
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}
