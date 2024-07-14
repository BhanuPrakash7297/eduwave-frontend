import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Layout, Compass, List as ListIcon, BarChart, BarChart2, LucideLayoutDashboard, MenuIcon, X } from 'lucide-react'; // Adjust imports based on your icon library

const AdminTeacherMobileSidebar = () => {
  const [open, setOpen] = React.useState(false);
  const isSmScreen = useMediaQuery('(max-width: 640px)');
  const pathname = useLocation().pathname;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const adminRoutes = [
    {
      icon: LucideLayoutDashboard,
      label: "Dashboard",
      href: "/admin",
    },
    {
      icon: Compass,
      label: "Browse",
      href: "/admin/search",
    },
  ];

  const teacherRoutes = [
    {
      icon: ListIcon,
      label: "Courses",
      href: "/admin/teacher/courses",
    },
    {
      icon: BarChart,
      label: "Analytics",
      href: "/admin/teacher/analytics",
    },
  ];

  const currentRoutes = pathname.includes('/teacher') ? teacherRoutes : adminRoutes;

  const DrawerList = (
    <Box sx={{ width: '100%', height: '100vh', p: 3 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <IconButton onClick={toggleDrawer(false)}>
          <X />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <List>
          {currentRoutes.map((route, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={route.href}>
                <ListItemIcon>
                  <route.icon />
                </ListItemIcon>
                <ListItemText primary={route.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <div>
      {isSmScreen && (
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
      )}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '60%',
            height: '100%',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default AdminTeacherMobileSidebar;
