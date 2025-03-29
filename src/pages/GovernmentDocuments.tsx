
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, FileText, FileImage, File, FileCode } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { governmentDocuments, documentCategories } from "@/data/governmentDocuments";

// Helper function to determine appropriate icon based on document type
const getDocumentIcon = (docId: string) => {
  switch (docId) {
    case "aadhaar":
      return <FileImage className="w-16 h-16 text-blue-500" />;
    case "pan":
      return <File className="w-16 h-16 text-orange-500" />;
    case "voter":
      return <FileText className="w-16 h-16 text-green-500" />;
    case "passport":
      return <FileCode className="w-16 h-16 text-red-500" />;
    default:
      return <FileText className="w-16 h-16 text-gray-400" />;
  }
};

const GovernmentDocuments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDocuments, setFilteredDocuments] = useState(governmentDocuments);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  useEffect(() => {
    let results = governmentDocuments;
    
    // Filter by category if selected
    if (selectedCategory && selectedCategory !== "all") {
      results = results.filter(doc => doc.categoryId === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      results = results.filter(
        doc => 
          doc.title.toLowerCase().includes(lowercasedSearch) ||
          doc.description.toLowerCase().includes(lowercasedSearch) ||
          doc.issuingAuthority.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    setFilteredDocuments(results);
  }, [searchTerm, selectedCategory]);

  const handleCardClick = (docId: string) => {
    navigate(`/document/${docId}`);
  };

  const handleImageError = (docId: string) => {
    setImageErrors(prev => ({ ...prev, [docId]: true }));
  };

  return (
    <Layout>
      <section className="py-6 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-6 text-3xl font-bold">Indian Government Documents</h1>
          <p className="mb-8 text-gray-600">
            Find information about important government documents, identification cards, and their application processes.
            Click on any card to see detailed requirements and procedures.
          </p>

          <div className="flex flex-col gap-4 mb-8 md:flex-row">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search for a document or card..."
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
                  {documentCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredDocuments.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredDocuments.map((doc) => (
                <Card 
                  key={doc.id} 
                  className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                  onClick={() => handleCardClick(doc.id)}
                >
                  <div className="h-40 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                    {doc.imageUrl && !imageErrors[doc.id] ? (
                      <img 
                        src={doc.imageUrl} 
                        alt={doc.title} 
                        className="object-contain w-full h-full p-2 transition-transform duration-300 hover:scale-105"
                        onError={() => handleImageError(doc.id)}
                      />
                    ) : (
                      getDocumentIcon(doc.id)
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg transition-colors duration-200 hover:text-blue-600">{doc.title}</CardTitle>
                    <CardDescription>
                      {documentCategories.find(c => c.id === doc.categoryId)?.title || "Government Document"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-600">{doc.issuingAuthority}</p>
                  </CardContent>
                  <CardFooter className="text-sm text-blue-600">
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      View document requirements →
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center border rounded-lg bg-gray-50 animate-fade-in">
              <FileText className="mx-auto mb-4 w-12 h-12 text-gray-400" />
              <h3 className="mb-2 text-lg font-medium">No documents found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default GovernmentDocuments;
