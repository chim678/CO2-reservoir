import {create} from 'zustand'


const useStore = create((set) => ({
  reservoirSpin: true,
  setReservoirSpin:(val) => set({reservoirSpin: val}),
  wellhead_state: false,
  setWellhead_state: () => set((state) => ({ wellhead_state: !state.wellhead_state})),
  //setWellhead_state: (val) => set({wellhead_state: val}),
  

}))

export default useStore;