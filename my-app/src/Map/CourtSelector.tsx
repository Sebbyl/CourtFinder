import {
  Box,
  Collapse,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { useState, useContext } from "react";
import { selectContext } from "../Context/SelectProvider";

type Sport = {
  selectSport: string[];
};

// const CourtSelector = ({ selectSport }: Sport) => {
const CourtSelector = () => {
  const sportsList: Array<string> = ["Tennis", "Volleyball"];
  // const [sports, setSports] = useState([] as String[]);
  const { sport, setSport } = useContext(selectContext);
  const handleChange = (val: String) => {
    if (sport?.includes(val)) {
      const index: number = sport.indexOf(val);
      const newList: String[] = [
        ...sport.slice(0, index),
        ...sport.slice(index + 1),
      ];
      setSport(newList);
    } else {
      setSport((sport) => [...sport, val]);
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "5vh",
        right: "5vw",
        width: "10vw",
        height: "auto",
        backgroundColor: "whiteSmoke",
        zIndex: 11111,
        p: 2,
        opacity: "85%",
        borderRadius: "15px",
      }}
    >
      <FormGroup>
        {sportsList.map((val) => (
          <FormControlLabel
            control={<Checkbox value={val} name={val.toLowerCase()} />}
            label={val}
            onChange={(item) => {
              handleChange((item.target as HTMLTextAreaElement).name);
            }}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CourtSelector;
