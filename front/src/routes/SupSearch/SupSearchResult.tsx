import React, { useCallback, useEffect, useState } from "react";
import "./Paging.css";
import Pagination from "react-js-pagination";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { get } from "../../Api";
import SupCard from "./SupCard";
import { Result } from "./SupSearch";
import { CardList, PagingWrap } from "./SupStyled";

interface ResultProps {
  searchResult: Result[];
  setSearchResult: React.Dispatch<React.SetStateAction<Result[]>>;
  pageNum: number;
  searchOption: string;
}

function SupSearchResult({
  searchResult,
  setSearchResult,
  pageNum,
  searchOption,
}: ResultProps) {
  const location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const word = new URLSearchParams(location.search).get("word");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setPage(page);
    navigate(`?word=${word}&page=${page}`);
  };

  const fetchSearchSup = useCallback(async () => {
    if (word) {
      const res = await get(`supplement?page=${page}&${searchOption}=${word}`);
      setSearchResult([...res.data.supplements]);
      setTotalCount(res.data.totalCount);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [page, searchOption]);

  useEffect(() => {
    fetchSearchSup();
  }, [fetchSearchSup]);

  const checkResultLength = () => {
    const allPageLength = Math.ceil(totalCount / 16);
    if (allPageLength >= 10) {
      return 10;
    } else if (allPageLength < 10) {
      return allPageLength;
    }
  };
  const Checked = checkResultLength();

  return (
    <>
      <CardList>
        {searchResult.map((data) => (
          <SupCard key={data.pk_supplement_id} data={data} />
        ))}
      </CardList>
      <PagingWrap>
        <Pagination
          activePage={pageNum}
          itemsCountPerPage={searchResult.length}
          totalItemsCount={totalCount}
          pageRangeDisplayed={Checked}
          prevPageText="‹"
          nextPageText="›"
          onChange={handlePageChange}
        />
      </PagingWrap>
    </>
  );
}

export default SupSearchResult;
