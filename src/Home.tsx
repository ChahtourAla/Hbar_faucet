import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function Home() {
  return (
    <Stack alignItems="center" spacing={4}>
      <Typography
        variant="h4"
        color="white"
      >
        Let's buidl a dApp on Hedera
      </Typography>
    </Stack>
  )
}