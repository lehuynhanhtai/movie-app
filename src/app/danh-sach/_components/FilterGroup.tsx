"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";

export interface FilterState {
  type: string;
  category: string;
  country: string;
  year: string;
  sort_field: string;
}

const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  const startYear = 1990; // Năm bắt đầu

  for (let year = currentYear; year >= startYear; year--) {
    years.push(
      <SelectItem key={year} value={year.toString()}>
        {year}
      </SelectItem>,
    );
  }
  return years;
};

export default function FilterBar({
  dataCategories,
  dataCountries,
  slug,
}: any) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>({
    type: searchParams.get("type") || "",
    category: searchParams.get("category") || "",
    country: searchParams.get("country") || "",
    year: searchParams.get("year") || "",
    sort_field: searchParams.get("sort_field") || "",
  });

  const handleSelectChange = useCallback(
    (value: string, filterKey: keyof FilterState): void => {
      setFilters((prev) => ({
        ...prev,
        [filterKey]: value,
      }));
    },
    [],
  );

  const applyFilters = useCallback((): void => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });

    const basePath = `/danh-sach/${slug}`;
    const newUrl = `${basePath}${params.toString() ? `?${params.toString()}` : ""}`;
    router.push(newUrl);
  }, [filters, slug, router]);

  const resetFilters = useCallback((): void => {
    setFilters({
      type: "",
      category: "",
      country: "",
      year: "",
      sort_field: "",
    });
    router.push(`/danh-sach/${slug}`);
  }, [router, slug]);

  return (
    <div className="w-full bg-background p-4 flex flex-wrap gap-4 items-center justify-center border-b border-yellow-800 py-10">
      <Select
        value={filters.category}
        onValueChange={(value) => handleSelectChange(value, "category")}
      >
        <SelectTrigger className="w-[200px] bg-muted">
          <SelectValue placeholder="Thể loại" />
        </SelectTrigger>
        <SelectContent>
          {dataCategories.data.items.map((category: any) => (
            <SelectItem key={category._id} value={category.slug}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.country}
        onValueChange={(value) => handleSelectChange(value, "country")}
      >
        <SelectTrigger className="w-[200px] bg-muted">
          <SelectValue placeholder="Quốc gia" />
        </SelectTrigger>
        <SelectContent>
          {dataCountries.data.items.map((country: any) => (
            <SelectItem key={country._id} value={country.slug}>
              {country.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.year}
        onValueChange={(value) => handleSelectChange(value, "year")}
      >
        <SelectTrigger className="w-[200px] bg-muted">
          <SelectValue placeholder="Năm" />
        </SelectTrigger>
        <SelectContent>{generateYearOptions()}</SelectContent>
      </Select>

      <Select
        value={filters.sort_field}
        onValueChange={(value) => handleSelectChange(value, "sort_field")}
      >
        <SelectTrigger className="w-[200px] bg-muted">
          <SelectValue placeholder="Sắp xếp" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="view">Lượt xem</SelectItem>
          <SelectItem value="modified.time">Thời gian cập nhật</SelectItem>
          <SelectItem value="desc">Z-A</SelectItem>
        </SelectContent>
      </Select>

      <Button
        onClick={applyFilters}
        variant="default"
        className="bg-orange-500 hover:bg-orange-600"
      >
        <Filter className="w-4 h-4" />
      </Button>
      <Button
        variant="destructive"
        className="bg-orange-500 hover:bg-orange-600"
        onClick={resetFilters}
      >
        Reset
      </Button>
    </div>
  );
}
