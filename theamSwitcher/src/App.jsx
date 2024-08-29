import { useState , useEffect} from 'react'

import './App.css'
import { TheamProvider } from './context/theam'
import ThemeBtn from './component/TheamBtn'
import Card from './component/card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheam=()=>{
    setThemeMode("light")
  }
  const darkTheam=()=>{
    setThemeMode("dark")
  }

  // actual change in theam
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (

    <TheamProvider value={{themeMode,darkTheam,lightTheam}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theam button */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card/>
          </div>
        </div>
      </div>
    </TheamProvider>

  )
}

export default App
