import {
  Box,
  Collapse,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

type Sport = {
  setSport: string;
};

const CourtSelector = ({ setSport }: Sport) => {
  let sports = new Array<string>();
  sports = ["Tennis", "Volleyball"];

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
        {sports.map((val) => (
          <FormControlLabel control={<Checkbox />} label={val} />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CourtSelector;
