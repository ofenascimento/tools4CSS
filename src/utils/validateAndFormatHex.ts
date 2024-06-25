export const validateAndFormatHex = (event: React.ChangeEvent<HTMLInputElement>, setColor: (color: string) => void) => {
    let newValue = event.target.value;
    if (newValue.length === 6 && !newValue.startsWith("#")) {
      newValue = "#" + newValue;
    }
    setColor(newValue);
  };
  