import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { createContext, FC, useCallback, useRef } from "react";
import BottomsheetContent from "./bottomsheet-content";
import { TSetupListItem } from "../../../services/types";
import { useReducedMotion } from "react-native-reanimated";
import { makeStyles, useTheme } from "@rneui/themed";

interface IBottomsheetContext {
  openModal: (item: TSetupListItem) => void;
  closeModal: () => void;
}

export const BottomsheetContext = createContext<IBottomsheetContext | null>(
  null,
);

interface ISetupsBottomsheet {
  children: React.ReactNode;
}

const SetupsBottomsheet: FC<ISetupsBottomsheet> = ({ children }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModal = useCallback((item: TSetupListItem) => {
    bottomSheetModalRef.current?.present(item);
  }, []);
  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  const contextValue: IBottomsheetContext = {
    openModal: (item: TSetupListItem) => handlePresentModal(item),
    closeModal: handleCloseModal,
  };
  const reducedMotion = useReducedMotion();
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );
  const styles = useStyles();
  return (
    <BottomsheetContext.Provider value={contextValue}>
      {children}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        backdropComponent={renderBackdrop}
        animateOnMount={!reducedMotion}
        enableContentPanningGesture={false}
        onDismiss={handleCloseModal}
        backgroundStyle={styles.backgroundStyle}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}>
        {({ data }) => (
          <BottomsheetContent item={data} onClose={handleCloseModal} />
        )}
      </BottomSheetModal>
    </BottomsheetContext.Provider>
  );
};

const useStyles = makeStyles((theme) => ({
  handleStyle: {
    height: 36,
    justifyContent: "center",
  },
  handleIndicatorStyle: {
    backgroundColor: theme.colors.white,
  },
  backgroundStyle: {
    backgroundColor: theme.colors.background,
  },
}));

export default SetupsBottomsheet;
