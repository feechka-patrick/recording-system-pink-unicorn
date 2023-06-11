import { Scheduler } from "@aldabil/react-scheduler";
import RecordEditor from "./RecordEditor";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

import * as S from "./styled";
import { colors } from "@styles/colors";

type MachineType = 'dryer' | 'washer';
type NumberType = 'one' | 'two' | 'three';

const Calendar = () => {
  const [machine, setMachine] = useState<MachineType>("dryer");
  const [number, setNumber] = useState<NumberType>("one");

  const handleChangeMachine = (event: React.SyntheticEvent, newValue: MachineType) => {
    setMachine(newValue);
  };

  const handleChangeNumber = (event: React.SyntheticEvent, newValue: NumberType) => {
    setNumber(newValue);
  };

  return (
    <>
      <S.Column>

        <Box
          sx={{
            marginTop: 10,
            marginRight: 5,
            marginBottom: 2,
            marginLeft: 4,
          }}
        >
          <Tabs
            value={machine}
            onChange={handleChangeMachine}
            
            aria-label="secondary tabs example"
            orientation="vertical"
          >
            <Tab sx={{color: colors['primary-text']}} value="dryer" label="Сушилки" />
            <Tab sx={{color: colors['primary-text']}} value="washer" label="Машинки" />
          </Tabs>
        </Box>

        <S.CalendarWrapper>
          <Box
            sx={{
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 4,
            }}
          >
            <Tabs
              value={number}
              onChange={handleChangeNumber}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" sx={{color: colors['primary-text']}} label="#1" />
              <Tab value="two"  sx={{color: colors['primary-text']}}label="#2" />
              {machine === "washer" && <Tab value="three" sx={{color: colors['primary-text']}} label="#3" />}
              
            </Tabs>
          </Box>

          <Scheduler
            customEditor={(scheduler) => <RecordEditor scheduler={scheduler} />}
            height={200}
            month={null}
            hourFormat="24"
          />
        </S.CalendarWrapper>
      </S.Column>
    </>
  );
};

export default Calendar;
