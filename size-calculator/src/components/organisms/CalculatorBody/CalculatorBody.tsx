import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setInitValues,
  setSizeVal,
} from "../../../redux/calculatorSlice/SizeCalculatorSlice";
import { selectCalculatorValues } from "../../../redux/store";
import BodyWrapper from "../../atoms/BodyWrapper/BodyWrapper";
import Button from "../../atoms/Button/Button";

import UserInput from "../../molecules/UserInput/UserInput";
import SizeResult from "../Result/SizeResult";
import SelectBrand from "../SelectBrand/SelectBrand";
import SelectCategory from "../SelectCategory/SelectCategory";

const CalculatorBody = () => {
  const { brandId, categoryId, size } = useSelector(selectCalculatorValues);
  const dispatch = useDispatch();

  const [showResult, setShowResult] = useState(false);
  const [isDisabled, setDisableButton] = useState(false);

  useEffect(() => {
    if (brandId && categoryId && size) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [brandId, categoryId, size]);

  const handleClose = () => {
    // set everything to 0
    setShowResult(false);
    dispatch(setInitValues());
  };

  const handleCalculate = () => {
    // check if values are not null
    if (brandId && categoryId && size) {
      // if not null go to result
      setShowResult(true);
    }
    // if value is null show an error
    console.log("missing one of the required fields");
  };
  if (showResult) {
    return <SizeResult closeHandler={handleClose} />;
  } else {
    return (
      <BodyWrapper>
        {/* <SelectInput title="Select a brand" /> */}
        <SelectBrand />
        <SelectCategory />

        <UserInput />
        <Button
          label={"calculate"}
          clickHandler={handleCalculate}
          disabled={isDisabled}
        />
      </BodyWrapper>
    );
  }
};

export default CalculatorBody;
