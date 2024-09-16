import { FC, createContext, useContext, useState, ReactNode } from 'react'

interface SelectedPointContextType {
  selectedPoint: number | null
  setSelectedPoint: (id: number | null) => void
}

const SelectedPointContext = createContext<
  SelectedPointContextType | undefined
>(undefined)

export const usePlacePoint = () => {
  const context = useContext(SelectedPointContext)
  if (!context) {
    throw new Error('usePlacePoint must be used inside PlaceProvider')
  }
  return context
}

export const PlaceProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null)

  return (
    <SelectedPointContext.Provider value={{ selectedPoint, setSelectedPoint }}>
      {children}
    </SelectedPointContext.Provider>
  )
}
