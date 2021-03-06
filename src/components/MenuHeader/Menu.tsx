import MenuOptions from 'constants/menuOptions'
import MenuOption from './MenuItem'
import { MenuItemData } from 'global.types'
import styled from 'styled-components'
import { AppBar as MuiAppBar, Grid, Toolbar } from '@mui/material'
import ResponsiveMenu from './ResponsiveMenu'

const MenuLayout = styled.div`
  position: absolute;
  width: 100%;
`

const AppBar = styled(MuiAppBar)({
  padding: '3% 6.5%',
  width: '100%',
  zIndex: 999,
  background: 'rgba(0,0,0,0)',
  boxShadow: 'none',
}) as typeof MuiAppBar

const MenuHeader = () => {
  return (
    <MenuLayout>
      <AppBar
        position="relative"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'flex' },
        }}
      >
        <Toolbar>
          <Grid container item spacing={4} alignItems={'center'}>
            {MenuOptions.map((option: MenuItemData, idx: number) => (
              <MenuOption
                key={idx}
                data={option}
                center={option.name || option.icon ? true : false}
              />
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
      <ResponsiveMenu />
    </MenuLayout>
  )
}

export default MenuHeader
