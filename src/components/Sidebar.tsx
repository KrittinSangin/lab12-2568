import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
// interface SidebarComponentProps  {
//   userName: string;
//   type?: "admin" |"student";
// }
// export type { SidebarComponentProps };
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="perm"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="perm"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>
        <Group>
          <Indicator inline size={10} offset={5} position="bottom-end" color="green" withBorder>
            <Avatar src="/Oerm.jpg"></Avatar>
          </Indicator>
         <Text>User: Perm </Text>
        </Group>
      </Box>
    </Stack>
  );
}
