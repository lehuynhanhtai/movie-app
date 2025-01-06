import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="w-full bg-background p-4 flex flex-wrap gap-4 items-center justify-center border-b border-yellow-800 py-10">
      <Select>
        <SelectTrigger className="w-[200px] bg-muted">
          <SelectValue placeholder="Loại phim" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="movie">Phim lẻ</SelectItem>
          <SelectItem value="series">Phim bộ</SelectItem>
          <SelectItem value="anime">Hoạt hình</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[200px] bg-muted">
          <SelectValue placeholder="Thể loại" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="action">Hành động</SelectItem>
          <SelectItem value="comedy">Hài hước</SelectItem>
          <SelectItem value="drama">Chính kịch</SelectItem>
          <SelectItem value="romance">Tình cảm</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="china">
        <SelectTrigger className="w-[200px] bg-muted">
          <SelectValue placeholder="Quốc gia" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="china">Trung Quốc</SelectItem>
          <SelectItem value="korea">Hàn Quốc</SelectItem>
          <SelectItem value="japan">Nhật Bản</SelectItem>
          <SelectItem value="usa">Mỹ</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[200px] bg-muted">
          <SelectValue placeholder="Năm" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2024">2024</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
          <SelectItem value="2022">2022</SelectItem>
          <SelectItem value="2021">2021</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[200px] bg-muted">
          <SelectValue placeholder="Sắp xếp" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Mới nhất</SelectItem>
          <SelectItem value="oldest">Cũ nhất</SelectItem>
          <SelectItem value="az">A-Z</SelectItem>
          <SelectItem value="za">Z-A</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
        <Filter className="w-4 h-4" />
      </Button>
      <Button
        variant="destructive"
        className="bg-orange-500 hover:bg-orange-600"
      >
        Reset
      </Button>
    </div>
  );
}
