import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Brand, Category } from "../../../types/types";

import SelectArrow from "../../atoms/SelectArrow/SelectArrow";
import "./style.css";
import {
  setBrand,
  setCategory,
  setNamePrefix,
  setNextPage,
} from "../../../redux/calculatorSlice/SizeCalculatorSlice";
import useOutsideClick from "../../../utils/useOutsideClick";

interface SelectInputProps {
  title: string;
  data?: Brand[] | Category[];
  getQuery?: boolean;
  inputType: "brands" | "categories";
  error?: string;
  prevPage?: number;
  nextPage?: string;
  handleNextPage?: () => void;
  handlePrevPage?: () => void;
  //dataType:"categories"|"brands";
  //   options: Category[] | Brand[];
}

// select a brand brand
const SelectInput = ({
  title,
  data,
  getQuery = false,
  inputType = "brands",
  error,
  nextPage,
  prevPage,
  handleNextPage,
  handlePrevPage,
}: SelectInputProps) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    setQuery(e.target.value);
    if (getQuery) {
      dispatch(setNamePrefix(e.target.value));
    }
  };

  const handleOpenOptions = () => {
    setIsOpen(true);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOutsideClick({ ref: inputRef, clickHandler: handleClickOutside });

  const handleSelectOption = (option: Brand | Category) => {
    // value for the input
    setQuery(option.name);
    // id for the global state
    if (inputType === "brands") {
      dispatch(setBrand(option.id));
      dispatch(setNamePrefix(""));
    }

    if (inputType === "categories") dispatch(setCategory(option.id));
    // close options
    setIsOpen(false);
  };

  return (
    <div className="input-wrapper" ref={inputRef}>
      {error && (
        <div className="error-wrapper">
          <h5>{error}</h5>
        </div>
      )}
      <input
        className="input-wrapper--select"
        placeholder={title}
        value={query}
        onChange={handleChange}
        maxLength={20}
      />
      <SelectArrow handleClick={handleOpenOptions} />
      {isOpen && data!.length > 0 && (
        <ul className="options-wrapper">
          {data!.map((option: Brand | Category) => (
            <li
              className={`options-item ${
                query === option.name ? "active-option" : ""
              }`}
              key={option.id}
              onClick={() => handleSelectOption(option)}
            >
              {option.name}
            </li>
          ))}

          {inputType === "brands" && (
            <li className={`options-buttons`}>
              {prevPage! > 0 && (
                <button onClick={handlePrevPage}>Previous</button>
              )}

              {nextPage && <button onClick={handleNextPage}>Next</button>}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;
