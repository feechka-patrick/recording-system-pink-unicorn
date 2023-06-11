import Card from "../Card/Card";
import { ReactComponent as CatIcon } from '@assets/icons/kit-icon.svg';
import { SwayAnimation } from "./styled";

type PropsType = {
    title: string;
    onPaymentClick?: () => {};
    onRecordClick?: () => {};
} 

const CardCat = (props: PropsType) => {
  return (
    <>
        <Card {...props}>
          <SwayAnimation>

            <CatIcon width="150px" 
              height="150px"
              />
          </SwayAnimation>
        </Card>
    </>
  );
};

export default CardCat;