import React, { useState } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";
import { cardContext } from "../../../global/card_context";
import SubmmitBottomSheet from "../submmit_bottom_sheet";

export default function DetailCardSubmmit() {
  const { caso } = React.useContext(cardContext);
  const [isWpp, setIsWpp] = useState(false);

  const myActionSheet = React.useRef();
  const showActionSheet = () => myActionSheet.current.show();

  const DetailsActions = () => (
    <View style={styles.cardButtons}>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => {
          setIsWpp(true);
          showActionSheet();
        }}
      >
        <Text style={styles.cardButtonText}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => {
          setIsWpp(false);

          showActionSheet();
        }}
      >
        <Text style={styles.cardButtonText}>E-mail</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardProperty}>Salve o dia!</Text>
          <Text style={styles.cardProperty}>Seja meu herói hoje.</Text>
          <Text style={styles.cardPropertValue}>Entre em contato:</Text>
        </View>
        <DetailsActions />
      </View>
      <View></View>
      <SubmmitBottomSheet myRef={myActionSheet} caso={caso} isWpp={isWpp} />
    </View>
  );
}
