import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setBrand,
  setNextPage,
} from "../../../redux/calculatorSlice/SizeCalculatorSlice";
import { useGetBrandsQuery } from "../../../redux/services/secretSauceApi";
import { selectCalculatorValues } from "../../../redux/store";
import { Brand } from "../../../types/types";
import SelectInput from "../../molecules/SelectInput/SelectInput";

interface Page {
  pageNumber: number;
  next_page: string;
}

const SelectBrand = () => {
  const dispatch = useDispatch();
  const { nextPage, name_prefix } = useSelector(selectCalculatorValues);
  const { data = [] } = useGetBrandsQuery({
    limit: 20,
    name_prefix: name_prefix,
    next: nextPage,
  });

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pages, setPages] = useState<string[]>([""]);

  useEffect(() => {
    // if data  && !name_prefix page then store next_page

    if (data && data.brands && !name_prefix && data.next) {
      setPages([...pages, data.next]);
    }
  }, [data, name_prefix]);

  const handleNextPage = () => {
    // setPageNumber
    setCurrentPage(currentPage + 1);

    // load next page
    dispatch(setNextPage(pages[currentPage + 1]));
  };

  const handlePrevPage = () => {
    // setPageNumber
    setCurrentPage(currentPage - 1);
    dispatch(setNextPage(pages[currentPage - 1]));
  };

  return (
    <SelectInput
      title={"Select Brand"}
      inputType={"brands"}
      data={data.brands}
      nextPage={data.next}
      prevPage={currentPage}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      getQuery
    />
  );
};

export default SelectBrand;
