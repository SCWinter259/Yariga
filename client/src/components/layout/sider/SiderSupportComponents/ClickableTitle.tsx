import { Box } from "@mui/material";

interface ClickableTitleProps {
  RenderToTitle: React.FC<any>;
  collapsed: boolean;
}

export const ClickableTitle = ({
  RenderToTitle,
  collapsed,
}: ClickableTitleProps) => {
  return (
    <Box
      sx={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RenderToTitle collapsed={collapsed} />
    </Box>
  );
};
