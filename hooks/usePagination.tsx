import { useState } from "react";

type Props = {
    total: number;
    perPage: number;
}

export const usePagination = ({
    total,
    perPage,
}: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(total / perPage);

    const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number,) => {
        setCurrentPage(newPage);
    };

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    return {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        handlePageChange,
        handlePrevClick,
        handleNextClick,
    };
};