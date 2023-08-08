import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    fontFamily: "NunitoSansRegular",
    width: 58,
    height: 58,
    lineHeight: 50,
    fontSize: 28,
    borderWidth: 1,
    backgroundColor: "#f4f3f5",
    textAlign: "center",
    borderRadius: 10,
    borderColor: "#FFD9CC",
    color: "#FF703D",
  },
  focusCell: {
    borderColor: "#FF703D",
  },
});

const CELL_COUNT = 5;
const OtpInput = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View>
      <CodeField
        ref={ref}
        {...props}
        caretHidden={false}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  );
};

export default OtpInput;
