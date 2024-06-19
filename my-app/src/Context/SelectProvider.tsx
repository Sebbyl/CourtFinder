import { createContext, useState } from "react";

type ContainerProps = {
  children: React.ReactNode;
};

type TypeSportContextType = {
  sport: String[];
  setSport: React.Dispatch<React.SetStateAction<String[]>>;
};

const TypeSportContextState = {
  sport: [],
  setSport: () => [],
};

const selectContext = createContext<TypeSportContextType>(
  TypeSportContextState
);

function SelectProvider(props: ContainerProps) {
  const [sport, setSport] = useState<String[]>([]);

  return (
    <selectContext.Provider value={{ sport, setSport }}>
      {props.children}
    </selectContext.Provider>
  );
}

export { selectContext, SelectProvider };
