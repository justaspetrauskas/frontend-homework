import React from "react";
import { useSelector } from "react-redux";
import { useGetMeasurementsQuery } from "../../../redux/services/secretSauceApi";
import { selectCalculatorValues } from "../../../redux/store";
import BodyWrapper from "../../atoms/BodyWrapper/BodyWrapper";
import Button from "../../atoms/Button/Button";

import "./style.css";

interface SizeResultProps {
  closeHandler: () => void;
}

const SizeResult = ({ closeHandler }: SizeResultProps) => {
  const { brandId, categoryId, size } = useSelector(selectCalculatorValues);
  const { data = [], isLoading } = useGetMeasurementsQuery({
    brandId,
    categoryId,
    measurement: size,
  });
  console.log(brandId, categoryId, size);
  console.log(data.sizes);

  return (
    <BodyWrapper>
      <span className="result-header">
        <p>Your size is:</p>
      </span>
      <span className="result-body">
        {data.sizes ? (
          data.sizes.map((size: Record<string, any>, index: number) => {
            let areMore =
              index < data.sizes.length - 1 && data.sizes.length > 1;

            return (
              <h1 key={index}>
                {size.label}
                {areMore && <span>or</span>}
              </h1>
            );
          })
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>No results</h1>
        )}
      </span>

      <Button label={"OK"} clickHandler={closeHandler} />
    </BodyWrapper>
  );
};

export default SizeResult;
