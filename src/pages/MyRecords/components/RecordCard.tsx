import * as S from '../styled'
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Toolbar, Tooltip } from '@mui/material';

const RecordCard = ({
    date = '10:10 - 12:10',
    info = 'Стиральная машинка #2',
}:
{
    date?: string;
    info?: string;
    onClickDelete?: () => void;
    onClickEdit?: ( )=> void;
}) => {
  return (
    <>
      <S.CardWrapper>
        <S.DateWrapper>{date}</S.DateWrapper>
        <S.EquipmentInfoWrapper>{info}</S.EquipmentInfoWrapper>
        <S.ButtonsWrapper>

        <Tooltip title="Изменить">
            <EditCalendarOutlinedIcon
                fontSize='large'
                color='secondary'
                sx={
                        {
                          '&:hover': {
                            color: '#86c232',
                            borderRadius: '10px',
                            cursor: 'pointer'
                          },
                        }
                }/>
        </Tooltip>

        <Tooltip title="Удалить">
            <DeleteOutlineOutlinedIcon
                 fontSize='large'
                 color='secondary'
                 sx={
                    {
                      '&:hover': {
                        color: '#86c232',
                        borderRadius: '10px',
                        cursor: 'pointer'
                      },
                    }
            }/>
        </Tooltip>
        </S.ButtonsWrapper>
      </S.CardWrapper>
    </>
  );
};

export default RecordCard;