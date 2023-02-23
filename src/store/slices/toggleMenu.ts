import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ToggleMenuState {
  isMenuOpen: boolean
}

const initialState: ToggleMenuState = {
  isMenuOpen: false
}

export const toggleMenuSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    openMenu: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload
    }
  }
})

export const { openMenu } = toggleMenuSlice.actions

export const selectToggleMenu = (state: RootState) =>
  state.toggleMenu.isMenuOpen

export default toggleMenuSlice.reducer
