// external imports
import { createContext, ReactNode, useEffect, useState } from "react";

// api
import { fetchTools } from "@/pages/api/cocktail-api";

// types
export type Tool = {
  id: number;
  class: string;
  name: string;
  tool_brand: string;
}

type ToolsContextProps = {
  tools: Tool[];
}

type ToolsProviderProps = {
  children: ReactNode;
}

// context
export const ToolsContext = createContext<ToolsContextProps>({
  tools: []
})

// provider
export const ToolsProvider = ({ children}: ToolsProviderProps) => {
  // initial state
  const [ tools, setTools ] = useState<Tool[]>([])

  // fetch / set tools on load
  useEffect(() => {
    const getTools = async () => {
      const { tools } = await fetchTools();
      setTools(tools);
    }
    getTools(); 
  }, [])

  // export data
  const value = { tools };

  return (
    <ToolsContext.Provider value={ value }>
      { children }
    </ToolsContext.Provider>
  )
}