import React, { useState } from 'react';
import { useStore } from 'effector-react';
import styled from '@emotion/styled';
import { $selectedWeek } from './store';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const hours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
`;

const Day = styled.div<{ isSelected: boolean }>`
  text-align: center;
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
`;

const Hour = styled.div<{ isSelected: boolean; isReserved: boolean }>`
  text-align: center;
  cursor: pointer;
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
  background-color: ${(props) => (props.isReserved ? 'red' : 'transparent')};
  color: ${(props) => (props.isReserved ? 'white' : 'black')};
  position: relative;

  &:hover {
    background-color: ${(props) => (props.isReserved ? 'red' : '#eee')};
  }
`;

const ReservedText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const ReservedBlock = styled.div`
  position: relative;
`;

const Calendar: React.FC = () => {
  const selectedWeek = useStore($selectedWeek);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isReserved, setIsReserved] = useState<boolean>(false);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
    setSelectedHour(null);
  };

  const handleHourClick = (hour: string) => {
    setSelectedHour(hour);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleReserveClick = () => {
    setIsReserved(true);
    setIsModalOpen(false);
  };

  return (
    <Container>
      <div></div>
      {weekDays.map((day) => (
        <Day key={day} isSelected={selectedWeek === day} onClick={() => handleDayClick(day)}>
          {day}
        </Day>
      ))}
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          <Hour
            isSelected={selectedWeek === selectedDay && selectedDay === selectedHour && selectedHour === hour}
            isReserved={isReserved}
            onClick={() => handleHourClick(hour)}
          >
            {isReserved && <ReservedText>Reserved</ReservedText>}
          </Hour>
          {weekDays.map((day) => (
            <div key={`${day}-${hour}`}></div>
          ))}
        </React.Fragment>
      ))}
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <h3>Reserve Time</h3>
            <p>
              Day: {selectedWeek}, Hour: {selectedHour}
            </p>
            <ButtonContainer>
              <button onClick={handleReserveClick}>Reserve</button>
              <button onClick={handleModalClose}>Cancel</button>
            </ButtonContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </Container>
  );
};

export default Calendar;
