"use client";

import { useSearchParams, usePathname } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  pagination: {
    totalItems: number;
    totalItemsPerPage: number;
    currentPage: number;
    pageRanges: number;
  };
}

const PaginationControls = ({ pagination }: PaginationProps) => {
  const { totalItems, totalItemsPerPage, pageRanges } = pagination;
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Calculate total pages and ensure current page is valid
  const totalPages = Math.max(1, Math.ceil(totalItems / totalItemsPerPage));
  const currentPageFromUrl = Math.min(
    Math.max(1, Number(searchParams.get("page")) || 1),
    totalPages,
  );

  // Create query string helper function
  const createQueryString = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return params.toString();
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const leftOffset = Math.floor(pageRanges / 2);
    const rightOffset = pageRanges - leftOffset;

    let startPage = currentPageFromUrl - leftOffset;
    let endPage = currentPageFromUrl + rightOffset;

    // Adjust when near the start
    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(pageRanges, totalPages);
    }

    // Adjust when near the end
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - pageRanges + 1);
    }

    // Ensure startPage and endPage are within valid range
    startPage = Math.max(1, startPage);
    endPage = Math.min(endPage, totalPages);

    // Generate page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return {
      pages,
      showLeftEllipsis: startPage > 1,
      showRightEllipsis: endPage < totalPages,
    };
  };

  const { pages, showLeftEllipsis, showRightEllipsis } = getPageNumbers();

  // Don't render pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous button */}
        {currentPageFromUrl > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`${pathname}?${createQueryString(currentPageFromUrl - 1)}`}
            />
          </PaginationItem>
        )}

        {/* First page and left ellipsis */}
        {showLeftEllipsis && (
          <>
            <PaginationItem>
              <PaginationLink
                href={`${pathname}?${createQueryString(1)}`}
                isActive={currentPageFromUrl === 1}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {/* Page numbers */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`${pathname}?${createQueryString(page)}`}
              isActive={page === currentPageFromUrl}
              className={`${page === currentPageFromUrl ? "bg-yellow-700" : ""}`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Right ellipsis and last page */}
        {showRightEllipsis && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`${pathname}?${createQueryString(totalPages)}`}
                isActive={currentPageFromUrl === totalPages}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next button */}
        {currentPageFromUrl < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`${pathname}?${createQueryString(currentPageFromUrl + 1)}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
