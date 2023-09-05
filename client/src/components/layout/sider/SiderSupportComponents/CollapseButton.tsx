import { Button } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { colors } from "constants/colors";

interface CollapseButtonProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CollapseButton = ({
  collapsed,
  setCollapsed,
}: CollapseButtonProps) => {
  return (
    <Button
      sx={{
        background: colors.ROYAL_BLUE,
        color: "primary.contrastText",
        textAlign: "center",
        borderRadius: 0,
        borderTop: "1px solid #ffffff1a",
        "&:hover": {
          background: colors.PALATINATE_BLUE,
        },
      }}
      fullWidth
      size="large"
      onClick={() => setCollapsed((prev) => !prev)}
    >
      {collapsed ? <ChevronRight /> : <ChevronLeft />}
    </Button>
  );
};
