import React from 'react';
import { Box, Button, Pagination } from '@mui/material';
import styles from './Pagination.module.css';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  size?: "small" | "medium" | "large";
  shape?: "circular" | "rounded";
  onChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  size,
  shape,
  onChangePage,
  handleNextClick,
  handlePrevClick
}) => {

  return (
    <Box className='d-f ai-c jc-c'>
      <Button
        className={styles.button}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <Pagination
        className={styles.pagination}
        page={currentPage}
        count={totalPages}
        onChange={onChangePage}
        size={size}
        shape={shape}
        sx={{
          "& .MuiPaginationItem-page": { fontSize: "var(--fs-caption)" },
        }}
      />
      <Button
        className={styles.button}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </Box>
  );
};

export default CustomPagination;