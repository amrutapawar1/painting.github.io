import React, { useState } from "react";
import { FormGroup, Grid, Typography, Box } from "@mui/material";
import styles from "./CheckList.module.css";
import Link from "next/link";
import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";
import Check from "./ComponentCheck";

type CheckList = {
  code: string;
  label: string;
  qty: number;
};
type Props = {
  checkList: CheckList[];
  name: string;
  onChange: (e: any) => void;
  label: string;
  selected: any;
};
const CheckList = (props: Props) => {
  const { checkList, name, onChange, label, selected } = props;

  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<CheckList[]>([]);

  const searchItems = (searchValue: string) => {
    setQuery(searchValue);
    if (query !== "") {
      const filteredData = checkList.filter((item: any) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(checkList);
    }
  };

  return (
    <>
      <Box className={styles.vertical_filters_header}>
        <Typography className={styles.vertical_filters_title}>{label}</Typography >
        <Box
          className={
            search
              ? styles.filter_search_expanded
              : styles.filter_search_filterSearchBox
          }
        >
          <input
            type="text"
            className={
              search
                ? styles.filter_search_inputBox
                : styles.filter_search_hidden
            }
            placeholder="Search for Categories"
            value={query}
            onChange={(e: { target: HTMLInputElement }) =>
              searchItems(e.target.value)
            }
          />
          <span
            className={
              search
                ? styles.filter_search_closeSearch
                : styles.filter_search_iconSearch
            }
            onClick={() => {
              setSearch(!search), setQuery("");
            }}
          >
            {search ? (
              <CloseIcon fontSize="small" />
            ) : (
              <SearchIcon fontSize="small" />
            )}
          </span>
        </Box>
      </Box>
      <FormGroup>
        {query.length > 1
          ? filteredResults.map((item, index) => (
            <Check item={item} key={index} onChange={onChange} name={name} />
          ))
          : checkList
            .slice(0, 5)
            .map((item) => (
              <Check
                item={item}
                key={item.code}
                onChange={onChange}
                name={name}
                checked={selected.includes(item.code)}
              />
            ))}
        <Link href="#" className={styles.filter_Link}>
          +{checkList.length} More
        </Link>
      </FormGroup>
    </>
  );
};

export default CheckList;
