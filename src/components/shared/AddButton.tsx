import { useTheme } from "@/providers/theme";
import { Octicons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface AddButtonProps {
  onPress: () => void;
  label: string;
  loading?: boolean;
  disabled?: boolean;
  showIcon?: boolean;
}

export const AddButton: React.FC<AddButtonProps> = ({
  onPress,
  label,
  loading = false,
  disabled = false,
  showIcon = true,
}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 48,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: colors.primary,
        borderRadius: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        opacity: disabled ? 0.5 : 1,
      }}
      disabled={loading || disabled}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors.textForeground} />
      ) : showIcon ? (
        <Octicons name="plus" size={24} color={colors.textForeground} />
      ) : null}
      <Text
        style={{
          fontFamily: "Inter",
          fontSize: 16,
          fontWeight: "700",
          color: colors.textForeground,
        }}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
