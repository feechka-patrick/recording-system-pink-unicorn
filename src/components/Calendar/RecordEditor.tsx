
import { useState } from "react";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import type {
  ProcessedEvent,
  SchedulerHelpers
} from "@aldabil/react-scheduler/types";
import * as S from './styled';
import dayjs, { Dayjs } from 'dayjs';
import { GreenTitle } from "components/Section/styled";

interface CustomEditorProps {
  scheduler: SchedulerHelpers;
}

const RecordEditor = ({ scheduler }: CustomEditorProps) => {
    const event = scheduler.edited;

    const isPast =  scheduler.state.start.value < new Date() ? true : false;

    const [value, setValue] = useState<Dayjs | null>(dayjs(scheduler.state.start.value));
    const [error, setError] = useState("");

    const handleChange = (value: string, name: string) => {};
    const month = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    const handleSubmit = async () => {
        try {
        scheduler.loading(true);

        const added_updated_event = (await new Promise((res) => {
            setTimeout(() => {
            res({
                event_id: event?.event_id || Math.random(),
                title: "user 1",
                start: scheduler.state.start.value,
                end: scheduler.state.end.value,
            });
            }, 3000);
        })) as ProcessedEvent;

        scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
        scheduler.close();
        } finally {
        scheduler.loading(false);
        }
    };


  return (
      <S.EditorWrapper>
          <GreenTitle>СОЗДАТЬ ЗАПИСЬ</GreenTitle>
          <S.RecordText>{value?.format(`DD ${month[value.month()]}, HH:mm - ${value.add(1, 'hour').format('HH:mm')}`)}</S.RecordText>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Начало стирки"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              ampm={false}
              timeSteps={{hours: 1, minutes: 60}}
              sx={{ marginTop: 5, color: '#fff'}}
              maxTime={dayjs('2023-05-18T17:00')}
              minTime={dayjs('2023-05-18T9:00')}
            />
         </LocalizationProvider>

          <DialogActions>
            <Button sx={{marginTop: 2, marginRight: 'auto'}} onClick={scheduler.close}>ОТМЕНА</Button>
            <Button sx={{marginTop: 2, }} onClick={handleSubmit} variant="outlined">ПОДТВЕРДИТЬ</Button>
          </DialogActions>
      </S.EditorWrapper>
  );
};

export default RecordEditor;