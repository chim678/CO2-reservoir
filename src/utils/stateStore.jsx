import create from 'zustand'


const useStore = create((set) => ({
  reservoirSpin: true,
  setReservoirSpin:(val) => set({reservoirSpin: val}),
}))

export default useStore;