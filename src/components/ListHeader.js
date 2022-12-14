import { Box, useTheme } from "@mui/system"

const ListHeader = ({ name }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        m: 0,
        bgcolor: `${theme.typography.listTitle.backgroundColor}`,
        fontSize: `${theme.typography.listTitle.fontSize}`,
        height: 25,
        textAlign: "center"
      }}
    >{name}
    </Box>
  )
}

export default ListHeader