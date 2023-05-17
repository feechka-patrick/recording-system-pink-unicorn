import Card from "../Card/Card";

import { ReactComponent as CatIcon } from '../../assets/icons/kit-icon.svg';

type PropsType = {
    title: string;
    onPaymentClick?: () => {};
    onRecordClick?: () => {};
} 

const CardCat = (props: PropsType) => {
  return (
    <>
        <Card {...props}>
            <CatIcon width="150px" height="150px"/>
        </Card>
    </>
  );
};

export default CardCat;