
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { buttonVariants } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  ArrowLeft, 
  FileText, 
  FileImage, 
  File, 
  FileCode, 
  CheckCircle, 
  AlertTriangle, 
  ExternalLink 
} from "lucide-react";
import { governmentDocuments, documentCategories } from "@/data/governmentDocuments";

// Helper function to determine appropriate icon based on document type
const getDocumentIcon = (docId: string) => {
  switch (docId) {
    case "aadhaar":
      return <FileImage className="w-24 h-24 text-blue-500" />;
    case "pan":
      return <File className="w-24 h-24 text-orange-500" />;
    case "voter":
      return <FileText className="w-24 h-24 text-green-500" />;
    case "passport":
      return <FileCode className="w-24 h-24 text-red-500" />;
    case "driving":
      return <FileText className="w-24 h-24 text-purple-500" />;
    case "ration":
      return <FileText className="w-24 h-24 text-yellow-500" />;
    case "gst":
      return <FileCode className="w-24 h-24 text-blue-700" />;
    case "ayushman":
      return <FileText className="w-24 h-24 text-teal-500" />;
    default:
      return <FileText className="w-24 h-24 text-gray-400" />;
  }
};

const DocumentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [document, setDocument] = useState(governmentDocuments.find(d => d.id === id));
  const [category, setCategory] = useState(document ? documentCategories.find(c => c.id === document.categoryId) : null);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      const selectedDocument = governmentDocuments.find(d => d.id === id);
      setDocument(selectedDocument);
      
      if (selectedDocument) {
        setCategory(documentCategories.find(c => c.id === selectedDocument.categoryId) || null);
      }
      
      // Reset image states when document changes
      setImageError(false);
      setImageLoaded(false);
    }
  }, [id]);

  if (!document) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-64 animate-fade-in">
          <AlertTriangle className="w-16 h-16 mb-4 text-yellow-500" />
          <h1 className="mb-2 text-2xl font-bold">Document Not Found</h1>
          <p className="mb-6 text-gray-600">The document you're looking for doesn't exist or may have been removed.</p>
          <Link to="/documents" className={buttonVariants({ variant: "default" })}>
            Return to Documents List
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/documents" 
            className="inline-flex items-center mb-6 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Documents List
          </Link>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="h-48 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center p-4">
                  {document.imageUrl && !imageError ? (
                    <>
                      <img 
                        src={document.imageUrl} 
                        alt={document.title} 
                        className={`object-contain w-full h-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onError={() => setImageError(true)}
                        onLoad={() => setImageLoaded(true)}
                      />
                      {!imageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                    </>
                  ) : (
                    getDocumentIcon(document.id)
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{document.title}</CardTitle>
                  <CardDescription>
                    {category?.title || "Government Document"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-500">Issuing Authority</h3>
                    <p className="text-gray-900">{document.issuingAuthority}</p>
                  </div>
                  <a 
                    href={document.applicationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", className: "w-full transition-all duration-200 hover:bg-blue-50" })}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Official Website
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="mb-6 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{document.description}</p>
                </CardContent>
              </Card>

              <Card className="mb-6 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                  <CardDescription>Documents you need to provide during application</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {document.requiredDocuments.map((req, index) => (
                      <li key={index} className="flex group">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span className="transition-colors duration-200 group-hover:text-blue-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>Application Process</CardTitle>
                  <CardDescription>Steps to obtain this document</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {document.processSteps.map((step, index) => (
                      <li key={index} className="flex group">
                        <div className="flex-shrink-0 w-6 h-6 mr-3 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 group-hover:bg-blue-700 group-hover:scale-110">
                          {index + 1}
                        </div>
                        <span className="pt-0.5 transition-colors duration-200 group-hover:text-blue-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DocumentDetail;
