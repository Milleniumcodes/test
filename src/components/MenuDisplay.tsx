import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { menuItems, menuCategories, MenuItem } from './MenuData';

export default function MenuDisplay() {
  const [selectedCategory, setSelectedCategory] = useState('Spezialitäten vom Grill');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  const toggleExpand = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    const isExpanded = expandedItems.includes(item.id);

    return (
      <div
        key={item.id}
        className="bg-white rounded-lg border border-stone-200 hover:border-amber-700 hover:shadow-md transition-all overflow-hidden"
      >
        <button
          onClick={() => toggleExpand(item.id)}
          className="w-full px-6 py-4 text-left hover:bg-amber-50 transition-colors"
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-stone-800 text-lg">{item.name}</h3>
              {item.notes && (
                <p className="text-xs text-amber-700 font-semibold mt-1">{item.notes}</p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-700 font-bold text-lg whitespace-nowrap">
                {item.price.toFixed(2)} €
              </span>
              <ChevronDown
                size={20}
                className={`text-stone-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
        </button>

        {isExpanded && (
          <div className="px-6 py-4 border-t border-stone-200 bg-stone-50">
            <p className="text-stone-700 mb-3">{item.description}</p>
            {item.allergens && item.allergens.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.allergens.map(allergen => (
                  <span
                    key={allergen}
                    className="inline-block text-xs bg-red-100 text-red-700 px-2 py-1 rounded"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">Kategorien</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {menuCategories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setExpandedItems([]);
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                selectedCategory === category
                  ? 'bg-amber-700 text-white shadow-lg'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-stone-800">{selectedCategory}</h2>
        <div className="grid gap-3">
          {filteredItems.map(item => renderMenuItem(item))}
        </div>
      </div>
    </div>
  );
}
