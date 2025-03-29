
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { indianLaws, lawCategories } from "@/data/indianLaws";

const IndianLaws = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLaws, setFilteredLaws] = useState(indianLaws);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    let results = indianLaws;
    
    // Filter by category if selected
    if (selectedCategory && selectedCategory !== "all") {
      results = results.filter(law => law.categoryId === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      results = results.filter(
        law => 
          law.title.toLowerCase().includes(lowercasedSearch) ||
          law.section.toLowerCase().includes(lowercasedSearch) ||
          law.description.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    setFilteredLaws(results);
  }, [searchTerm, selectedCategory]);

  const handleRowClick = (lawId: string) => {
    navigate(`/law/${lawId}`);
  };

  return (
    <Layout>
      <section className="py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-6 text-3xl font-bold">Indian Laws and Legal Provisions</h1>
          <p className="mb-8 text-gray-600">
            Browse through important sections of the Indian Penal Code and other legal acts. 
            Click on any law to see detailed information and references.
          </p>

          <div className="flex flex-col gap-4 mb-8 md:flex-row">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search by section, title or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute w-5 h-5 text-gray-400 left-3 top-2.5" />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="min-w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {lawCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="overflow-hidden border rounded-lg">
            <Table>
              <TableCaption>
                Showing {filteredLaws.length} of {indianLaws.length} laws
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Section</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead className="hidden md:table-cell">Punishment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLaws.length > 0 ? (
                  filteredLaws.map((law) => (
                    <TableRow 
                      key={law.id}
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => handleRowClick(law.id)}
                    >
                      <TableCell className="font-medium">{law.section}</TableCell>
                      <TableCell>{law.title}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {lawCategories.find(c => c.id === law.categoryId)?.title || law.categoryId}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {law.punishment.length > 60 
                          ? `${law.punishment.substring(0, 60)}...` 
                          : law.punishment}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="py-8 text-center text-gray-500">
                      No laws found matching your search criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndianLaws;
