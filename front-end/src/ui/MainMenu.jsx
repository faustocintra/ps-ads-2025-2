/*import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          }
        }}
      >
        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/"
          divider
        >
          Página inicial
        </MenuItem>
        
        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/customers"
        >
          Listagem de clientes
        </MenuItem>

        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/customers/new"
          divider
        >
          Cadastro de clientes
        </MenuItem>

        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/cars"
        >
          Listagem de veículos
        </MenuItem>

        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/cars/new"
          divider
        >
          Cadastro de veículos
        </MenuItem>

        <MenuItem
         onClick={handleClose}
         component={Link}
         to="/users"
       >
         Listagem de usuários
       </MenuItem>


       <MenuItem
         onClick={handleClose}
         component={Link}
         to="/users/new"
       >
         Cadastro de usuários
       </MenuItem>

      </Menu>
    </div>
  );
}*/

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AuthContext from '../contexts/AuthContext'
import { routes, UserLevel } from '../routes/routes'


export default function MainMenu() {
 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };


 const { authState } = React.useContext(AuthContext)
 const { authUser } = authState


 // Determina o nível do usuário autenticado
 let currentUserLevel = UserLevel.ANY


 if(authUser?.is_admin) currentUserLevel = UserLevel.ADMIN
 else if(authUser) currentUserLevel = UserLevel.AUTHENTICATED


 /*
   Filtra as rotas que se tornarão itens de menu, excluindo:
   - rotas com omitFromMainMenu === true
   - rotas com userLevel > currentUserLevel
 */
 const menuRoutes = routes.filter(
   r => !(r?.omitFromMainMenu) && r.userLevel <= currentUserLevel
 )


 return (
   <div>
     <IconButton
         edge="start"
         color="inherit"
         aria-label="menu"
         sx={{ mr: 2 }}
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}
        
     >
       <MenuIcon />
     </IconButton>
     <Menu
       id="basic-menu"
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       slotProps={{
         list: {
           'aria-labelledby': 'basic-button'
         }
       }}
     >
       {
         menuRoutes.map(r => (
           <MenuItem
             key={r.route}
             onClick={handleClose}
             component={Link}
             to={r.route}
             divider={r?.divider}
           >
             {r.description}
           </MenuItem>
         ))
       }
     </Menu>
   </div>
 );
}

