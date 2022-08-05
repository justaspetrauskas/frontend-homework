import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../../redux/services/secretSauceApi";
import { selectCalculatorValues } from "../../../redux/store";
import SelectInput from "../../molecules/SelectInput/SelectInput";

const SelectCategory = () => {
  const { brandId } = useSelector(selectCalculatorValues);
  const { data = [] } = useGetCategoriesQuery(brandId!);

  const [placeholder, setPlaceholder] = useState<string>("");

  useEffect(() => {
    // check if there is brand id
    if (!brandId) setPlaceholder("Select Category (select brand first)");

    //if there is brand id and categories are empty then show no data
    if (brandId && (data.categories.length < 1 || !data.categories || !data))
      setPlaceholder("No categories with selected brand");

    //if there is no brand id show select brand first
    if (brandId && data.categories.length > 0)
      setPlaceholder("Select Category");
  }, [data.categories, data, brandId]);
  // console.log("BrandId", brandId);
  // console.log("Category values", data);

  return (
    <SelectInput
      title={placeholder}
      data={data.categories}
      inputType={"categories"}

      // error={"select brand first"}
    />
  );
};

export default SelectCategory;
