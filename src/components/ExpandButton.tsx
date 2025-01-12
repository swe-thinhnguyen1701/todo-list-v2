import { Card } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

interface Props {
    setShow: (show: boolean) => void;
}

const ExpandButton = ({setShow}: Props) => {
    const [isExpand, setExpand] = useState(false);

    const onClickHandler = () => {
        setExpand(!isExpand);
        setShow(!isExpand);
    }

    return (
        <Card boxShadow="none" id="expand-btn" borderRadius="50%" padding="7px" onClick={onClickHandler}>
            <BsChevronDoubleDown fontSize="sm" className={`expand ${isExpand ? "close" : ""}`} />
        </Card>
    )
}

export default ExpandButton;