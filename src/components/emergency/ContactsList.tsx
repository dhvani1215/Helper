
import { useState } from "react";
import { emergencyContacts } from "@/data/emergencyContacts";
import ContactCard from "./ContactCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmergencyContact } from "@/types";

const ContactsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filteredContacts = emergencyContacts.filter((contact) => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        contact.number.includes(searchTerm) ||
                        contact.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === null || contact.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Sort contacts by priority
  const sortedContacts = [...filteredContacts].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  const handleCategoryClick = (category: string | null) => {
    setCategoryFilter(category === categoryFilter ? null : category);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Search contacts or numbers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <div className="flex flex-wrap gap-2">
          <Button
            variant={categoryFilter === null ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryClick(null)}
          >
            All
          </Button>
          <Button
            variant={categoryFilter === "medical" ? "default" : "outline"}
            size="sm"
            className={categoryFilter === "medical" ? "bg-blue-600" : ""}
            onClick={() => handleCategoryClick("medical")}
          >
            Medical
          </Button>
          <Button
            variant={categoryFilter === "police" ? "default" : "outline"}
            size="sm"
            className={categoryFilter === "police" ? "bg-indigo-600" : ""}
            onClick={() => handleCategoryClick("police")}
          >
            Police
          </Button>
          <Button
            variant={categoryFilter === "fire" ? "default" : "outline"}
            size="sm"
            className={categoryFilter === "fire" ? "bg-orange-600" : ""}
            onClick={() => handleCategoryClick("fire")}
          >
            Fire
          </Button>
          <Button
            variant={categoryFilter === "other" ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryClick("other")}
          >
            Other
          </Button>
        </div>
      </div>

      {sortedContacts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No contacts found</p>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default ContactsList;
