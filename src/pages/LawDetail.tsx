
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
import { ArrowLeft, BookOpen, Scale, AlertTriangle } from "lucide-react";
import { indianLaws, lawCategories } from "@/data/indianLaws";

const LawDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [law, setLaw] = useState(indianLaws.find(l => l.id === id));
  const [category, setCategory] = useState(law ? lawCategories.find(c => c.id === law.categoryId) : null);

  useEffect(() => {
    if (id) {
      const selectedLaw = indianLaws.find(l => l.id === id);
      setLaw(selectedLaw);
      
      if (selectedLaw) {
        setCategory(lawCategories.find(c => c.id === selectedLaw.categoryId) || null);
      }
    }
  }, [id]);

  if (!law) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-64">
          <AlertTriangle className="w-16 h-16 mb-4 text-yellow-500" />
          <h1 className="mb-2 text-2xl font-bold">Law Not Found</h1>
          <p className="mb-6 text-gray-600">The law you're looking for doesn't exist or may have been removed.</p>
          <Link to="/laws" className={buttonVariants({ variant: "default" })}>
            Return to Laws List
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-6">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/laws" 
            className="inline-flex items-center mb-6 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Laws List
          </Link>

          <Card className="mb-8">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-2 text-sm text-gray-500">
                <Scale className="w-4 h-4 mr-1" /> 
                {category?.title || "Legal Provision"}
              </div>
              <CardTitle className="text-2xl font-bold">{law.section}: {law.title}</CardTitle>
              <CardDescription>{category?.description}</CardDescription>
            </CardHeader>
            <CardContent className="border-t border-b">
              <div className="py-4">
                <h3 className="mb-2 text-lg font-semibold">Description</h3>
                <p className="mb-6 text-gray-700">{law.description}</p>
                
                <h3 className="mb-2 text-lg font-semibold">Punishment</h3>
                <div className="p-4 mb-6 border rounded-md bg-amber-50 border-amber-200">
                  <p className="text-amber-900">{law.punishment}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="w-full py-4">
                <h3 className="mb-2 text-lg font-semibold">Legal Reference</h3>
                <a 
                  href={law.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  <BookOpen className="w-4 h-4 mr-1" />
                  Read full legal text and case references
                </a>
              </div>
            </CardFooter>
          </Card>

          <div className="p-6 border rounded-lg bg-gray-50">
            <h2 className="mb-4 text-xl font-semibold">Disclaimer</h2>
            <p className="text-gray-700">
              This information is provided for general knowledge purposes only and should not be 
              considered legal advice. For specific legal concerns, please consult with a qualified 
              legal professional. Laws and their interpretations may change over time, and this 
              information may not reflect the most current legal developments.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LawDetail;
